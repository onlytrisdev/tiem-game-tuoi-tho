/**
 * Patch SpriteFontPlus → render with gamefont.ttf (Canvas2D + WebGL bake).
 * Load after c2runtime.js. Does not modify data.js / event sheets.
 */
(function (global) {
	'use strict';

	var FONT_FAMILY = 'GameFont';
	var EPSILON = 0.00001;
	var measureCanvas = null;
	var measureCtx = null;
	var dQuad = null;

	function ensureMeasureCtx() {
		if (!measureCtx) {
			measureCanvas = document.createElement('canvas');
			measureCanvas.width = 8;
			measureCanvas.height = 8;
			measureCtx = measureCanvas.getContext('2d');
		}
		return measureCtx;
	}

	function getTextureFile(inst) {
		try {
			return String((inst.type && inst.type.texture_file) || '');
		} catch (e) {
			return '';
		}
	}

	function getStyle(inst) {
		var file = getTextureFile(inst);
		if (file.indexOf('txtroundend') !== -1) {
			return { fill: '#FFE14A', stroke: '#C41E6A', lineWidthRatio: 0.14 };
		}
		if (file.indexOf('txtroundtime') !== -1) {
			return { fill: '#FFF4A8', stroke: '#1A1208', lineWidthRatio: 0.12 };
		}
		/* txtp1name and default */
		return { fill: '#FFE14A', stroke: '#1A1208', lineWidthRatio: 0.12 };
	}

	function getFontPx(inst) {
		return Math.max(10, Math.round(inst.characterHeight * inst.characterScale * 0.88));
	}

	function getCssFont(inst) {
		return getFontPx(inst) + 'px "' + FONT_FAMILY + '", sans-serif';
	}

	function applyTextStyle(ctx, inst, scaleMul) {
		var style = getStyle(inst);
		var px = getFontPx(inst) * (scaleMul || 1);
		ctx.font = px + 'px "' + FONT_FAMILY + '", sans-serif';
		ctx.textBaseline = 'top';
		ctx.fillStyle = style.fill;
		ctx.strokeStyle = style.stroke;
		ctx.lineWidth = Math.max(1.5, px * style.lineWidthRatio);
		ctx.lineJoin = 'round';
		ctx.miterLimit = 2;
	}

	function drawStyledText(ctx, text, x, y) {
		if (!text) return;
		ctx.strokeText(text, x, y);
		ctx.fillText(text, x, y);
	}

	function ensureGlHelpers(inst) {
		if (!inst.rcTex) {
			inst.rcTex = new cr.rect(0, 0, 1, 1);
		}
		if (typeof inst.need_text_redraw === 'undefined') {
			inst.need_text_redraw = true;
		}
		if (typeof inst.last_render_tick === 'undefined') {
			inst.last_render_tick = 0;
		}
	}

	function patchSpriteFontPlus() {
		if (!global.cr || !cr.plugins_ || !cr.plugins_.SpriteFontPlus) {
			return false;
		}
		var proto = cr.plugins_.SpriteFontPlus.prototype;
		var instanceProto = proto.Instance.prototype;
		if (instanceProto.__gvGameFontPatched) {
			return true;
		}
		instanceProto.__gvGameFontPatched = true;

		if (!dQuad) {
			dQuad = new cr.quad();
		}

		var origOnCreate = instanceProto.onCreate;
		instanceProto.onCreate = function () {
			origOnCreate.call(this);
			this.mycanvas = null;
			this.myctx = null;
			this.mytex = null;
			this.need_text_redraw = true;
			this.last_canvas_w = 0;
			this.last_canvas_h = 0;
			if (this.runtime.glwrap) {
				ensureGlHelpers(this);
				this.runtime.tickMe(this);
			}
		};

		var origOnDestroy = instanceProto.onDestroy;
		instanceProto.onDestroy = function () {
			this.myctx = null;
			this.mycanvas = null;
			if (this.runtime.glwrap && this.mytex) {
				try {
					this.runtime.glwrap.deleteTexture(this.mytex);
				} catch (e) { /* ignore */ }
			}
			this.mytex = null;
			if (origOnDestroy) origOnDestroy.call(this);
		};

		instanceProto.tick = function () {
			if (!this.runtime.glwrap || !this.mytex) return;
			if (this.runtime.tickcount - this.last_render_tick < 300) return;
			var layer = this.layer;
			if (!layer) return;
			this.update_bbox();
			var bbox = this.bbox;
			if (
				bbox.right < layer.viewLeft ||
				bbox.bottom < layer.viewTop ||
				bbox.left > layer.viewRight ||
				bbox.top > layer.viewBottom
			) {
				try {
					this.runtime.glwrap.deleteTexture(this.mytex);
				} catch (e) { /* ignore */ }
				this.mytex = null;
				this.myctx = null;
				this.mycanvas = null;
			}
		};

		instanceProto.measureWidth = function (text) {
			var ctx = ensureMeasureCtx();
			ctx.font = getCssFont(this);
			var w = ctx.measureText(text || '').width;
			return w > 0 ? w : 0;
		};

		instanceProto.getCharacterWidth = function (character) {
			var ctx = ensureMeasureCtx();
			ctx.font = getCssFont(this);
			var w = ctx.measureText(character || '').width;
			return w > 0 ? w : this.characterWidth * this.characterScale;
		};

		instanceProto.draw = function (ctx, glmode) {
			if (this.text === '') return;
			this.rebuildText();
			if (this.height < this.characterHeight * this.characterScale + this.lineHeight) {
				return;
			}

			var myscale = 1;
			ctx.globalAlpha = glmode ? 1 : this.opacity;
			if (glmode) {
				myscale = Math.abs(this.layer.getScale());
				ctx.save();
				ctx.scale(myscale, myscale);
			} else {
				ctx.save();
			}

			applyTextStyle(ctx, this, 1);

			var myx = this.x;
			var myy = this.y;
			if (!glmode) {
				if (this.runtime.pixel_rounding) {
					myx = (myx + 0.5) | 0;
					myy = (myy + 0.5) | 0;
				}
				ctx.translate(myx, myy);
				ctx.rotate(this.angle);
			}

			var ha = this.halign;
			var va = this.valign;
			var scale = this.characterScale;
			var charHeight = this.characterHeight * scale;
			var lineHeight = this.lineHeight;
			var lines = this.lines;
			var textHeight = this.textHeight;
			var valign = va * cr.max(0, this.height - textHeight);
			var offx = glmode ? 0 : -(this.hotspotX * this.width);
			var offy = glmode ? 0 : -(this.hotspotY * this.height);
			offy += valign;

			var drawY = offy;
			for (var i = 0; i < lines.length; i++) {
				var line = lines[i].text;
				var len = lines[i].width;
				var halign = ha * cr.max(0, this.width - len);
				var drawX = offx + halign;
				drawY += lineHeight;

				if (drawX + len > this.width + EPSILON && ha === 0) {
					/* allow slight overflow when measuring differs */
				}
				drawStyledText(ctx, line, Math.round(drawX), Math.round(drawY));
				drawY += charHeight;
				if (drawY + charHeight + lineHeight > this.height) {
					break;
				}
			}

			ctx.restore();
			this.last_render_tick = this.runtime.tickcount;
		};

		instanceProto.drawGL = function (glw) {
			if (this.width < 1 || this.height < 1 || this.text === '') return;
			ensureGlHelpers(this);

			var need_redraw = this.text_changed || this.need_text_redraw;
			this.need_text_redraw = false;

			this.rebuildText();
			if (this.height < this.characterHeight * this.characterScale + this.lineHeight) {
				return;
			}

			var layer_scale = this.layer.getScale();
			var layer_angle = this.layer.getAngle();
			var rcTex = this.rcTex;
			var floatscaledwidth = layer_scale * this.width;
			var floatscaledheight = layer_scale * this.height;
			var scaledwidth = Math.ceil(floatscaledwidth);
			var scaledheight = Math.ceil(floatscaledheight);
			var absscaledwidth = Math.abs(scaledwidth);
			var absscaledheight = Math.abs(scaledheight);
			var halfw = this.runtime.draw_width / 2;
			var halfh = this.runtime.draw_height / 2;

			if (!this.myctx) {
				this.mycanvas = document.createElement('canvas');
				this.mycanvas.width = absscaledwidth;
				this.mycanvas.height = absscaledheight;
				this.last_canvas_w = absscaledwidth;
				this.last_canvas_h = absscaledheight;
				need_redraw = true;
				this.myctx = this.mycanvas.getContext('2d');
			}
			if (absscaledwidth !== this.last_canvas_w || absscaledheight !== this.last_canvas_h) {
				this.mycanvas.width = absscaledwidth;
				this.mycanvas.height = absscaledheight;
				if (this.mytex) {
					glw.deleteTexture(this.mytex);
					this.mytex = null;
				}
				need_redraw = true;
			}

			if (need_redraw || this.text_changed) {
				this.myctx.clearRect(0, 0, absscaledwidth, absscaledheight);
				/* Bake in local object box (glmode); angle applied via bquad on GPU */
				var savedAngle = this.angle;
				this.angle = 0;
				this.draw(this.myctx, true);
				this.angle = savedAngle;
				this.text_changed = false;

				if (!this.mytex) {
					this.mytex = glw.createEmptyTexture(
						absscaledwidth,
						absscaledheight,
						this.runtime.linearSampling,
						this.runtime.isMobile
					);
				}
				glw.videoToTexture(this.mycanvas, this.mytex, this.runtime.isMobile);
			}

			this.last_canvas_w = absscaledwidth;
			this.last_canvas_h = absscaledheight;
			glw.setTexture(this.mytex);
			glw.setOpacity(this.opacity);
			glw.resetModelView();
			glw.translate(-halfw, -halfh);
			glw.updateModelView();

			this.update_bbox();
			var q = this.bquad;
			var tlx = this.layer.layerToCanvas(q.tlx, q.tly, true, true);
			var tly = this.layer.layerToCanvas(q.tlx, q.tly, false, true);
			var trx = this.layer.layerToCanvas(q.trx, q.try_, true, true);
			var try_ = this.layer.layerToCanvas(q.trx, q.try_, false, true);
			var brx = this.layer.layerToCanvas(q.brx, q.bry, true, true);
			var bry = this.layer.layerToCanvas(q.brx, q.bry, false, true);
			var blx = this.layer.layerToCanvas(q.blx, q.bly, true, true);
			var bly = this.layer.layerToCanvas(q.blx, q.bly, false, true);

			if (this.runtime.pixel_rounding || (this.angle === 0 && layer_angle === 0)) {
				var ox = ((tlx + 0.5) | 0) - tlx;
				var oy = ((tly + 0.5) | 0) - tly;
				tlx += ox;
				tly += oy;
				trx += ox;
				try_ += oy;
				brx += ox;
				bry += oy;
				blx += ox;
				bly += oy;
			}

			if (this.angle === 0 && layer_angle === 0) {
				trx = tlx + scaledwidth;
				try_ = tly;
				brx = trx;
				bry = tly + scaledheight;
				blx = tlx;
				bly = bry;
				rcTex.right = 1;
				rcTex.bottom = 1;
			} else {
				rcTex.right = floatscaledwidth / scaledwidth;
				rcTex.bottom = floatscaledheight / scaledheight;
			}

			glw.quadTex(tlx, tly, trx, try_, brx, bry, blx, bly, rcTex);
			glw.resetModelView();
			glw.scale(layer_scale, layer_scale);
			glw.rotateZ(-this.layer.getAngle());
			glw.translate(
				(this.layer.viewLeft + this.layer.viewRight) / -2,
				(this.layer.viewTop + this.layer.viewBottom) / -2
			);
			glw.updateModelView();
			this.last_render_tick = this.runtime.tickcount;
		};

		/* Force texture bake after SetText / AppendText / SetScale */
		var Acts = proto.acts;
		if (Acts) {
			['SetText', 'AppendText', 'SetScale', 'SetCharacterSpacing', 'SetLineHeight'].forEach(function (name) {
				var orig = Acts[name];
				if (typeof orig !== 'function') return;
				Acts[name] = function () {
					orig.apply(this, arguments);
					this.need_text_redraw = true;
					if (this.mytex && this.runtime && this.runtime.glwrap) {
						/* keep texture; redraw on next drawGL */
					}
				};
			});
		}

		if (global.console && console.info) {
			console.info('[GameFont] SpriteFontPlus patched → ' + FONT_FAMILY);
		}
		return true;
	}

	function tryPatch() {
		if (patchSpriteFontPlus()) return;
		var n = 0;
		var t = global.setInterval(function () {
			if (patchSpriteFontPlus() || ++n > 200) {
				global.clearInterval(t);
			}
		}, 25);
	}

	if (document.fonts && document.fonts.load) {
		document.fonts
			.load('48px "' + FONT_FAMILY + '"')
			.catch(function () { /* fail-open */ })
			.then(tryPatch);
	} else {
		tryPatch();
	}
})(typeof window !== 'undefined' ? window : globalThis);
