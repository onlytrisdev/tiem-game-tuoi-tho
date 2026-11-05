(function () {
	var host = String(location.hostname || '').toLowerCase();

	function isAllowedHost(h) {
		if (!h) return false;
		if (h === 'localhost' || h === '127.0.0.1') return true;
		if (h === 'test.game' || h.indexOf('.test.game') >= 0) return true;
		if (h === 'localhost' || h === 'www.localhost' || h === 'e.localhost') return true;
		if (h.indexOf('.localhost') >= 0) return true;
		return false;
	}

	window.__LOCAL_DEV__ = isAllowedHost(host)
		|| /[?&]local=1(?:&|$)/.test(location.search);

	if (!window.__LOCAL_DEV__) return;

	console.info('[poki-unlock] Sitelock bypass enabled for', host || '(query local=1)');

	function isPokiUrl(url) {
		return /poki|sitelock/i.test(String(url));
	}

	var _open = window.open;
	window.open = function (url, target) {
		if (typeof url === 'string' && isPokiUrl(url)) {
			console.warn('[poki-unlock] Blocked Poki redirect:', url);
			return null;
		}
		return _open.apply(window, arguments);
	};

	['assign', 'replace'].forEach(function (m) {
		var orig = Location.prototype[m];
		if (!orig) return;
		Location.prototype[m] = function (url) {
			if (isPokiUrl(url)) {
				console.warn('[poki-unlock] Blocked location.' + m + ':', url);
				return;
			}
			return orig.call(this, url);
		};
	});

	var hrefDesc = Object.getOwnPropertyDescriptor(Location.prototype, 'href');
	if (hrefDesc && hrefDesc.set) {
		Object.defineProperty(Location.prototype, 'href', {
			set: function (url) {
				if (isPokiUrl(url)) {
					console.warn('[poki-unlock] Blocked location.href =', url);
					return;
				}
				hrefDesc.set.call(this, url);
			},
			get: hrefDesc.get,
			configurable: true
		});
	} else {
		console.warn('[poki-unlock] Location.href setter not patchable in this browser');
	}

	var _anchorClick = HTMLAnchorElement.prototype.click;
	HTMLAnchorElement.prototype.click = function () {
		if (this.href && isPokiUrl(this.href)) {
			console.warn('[poki-unlock] Blocked anchor click:', this.href);
			return;
		}
		return _anchorClick.call(this);
	};
})();
