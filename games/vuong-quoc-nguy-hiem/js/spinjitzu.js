function Spinjitzu(player)
{this.player=player;this.level=player.level;this.audio=player.level.game.audio;this.rotCount=0;this.power=1;this.finished=true;this.display=new PIXI.Container();const vert=`

    precision mediump float;

    attribute vec2 aVertexPosition;
    attribute vec2 aUvs;

    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;

    varying vec2 vUvs;

    void main() 
    {
        vUvs = aUvs;
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    }`;const frag=`

        precision mediump float;

        varying vec2 vUvs;

        uniform sampler2D uSampler2;
        uniform float time;
        uniform float offset;
        uniform float speed;
    

        void main() 
        {
            vec2 uv = vUvs;
            uv.x *= 8.0;
            uv.x += time * speed;
            
            vec4 col = texture2D( uSampler2, uv );
            float factor = ( 1.0 - abs( vUvs.x - 0.5 ) * 2.0 ) * 4.0;
            col *= min( factor, 1.0 );
            
            gl_FragColor = col;
        }`;var tex=new PIXI.Texture(this.level.textures["fxmap"],new PIXI.Rectangle(0,128,128,128));var uniforms_1={uSampler2:tex,time:0,speed:1.0};this.shader_vortex_1=PIXI.Shader.from(vert,frag,uniforms_1);var uniforms_2={uSampler2:tex,time:0,speed:2.0};this.shader_vortex_2=PIXI.Shader.from(vert,frag,uniforms_2);var meshData_1=this.createStrip();var meshData_2=this.createStrip();this.strip_1_geo=new PIXI.Geometry();this.strip_1_geo.addAttribute("aVertexPosition",meshData_1.verts);this.strip_1_geo.addAttribute("aUvs",meshData_1.uvs);this.strip_1_geo.addIndex(meshData_1.ids);this.strip_1=new PIXI.Mesh(this.strip_1_geo,this.shader_vortex_1);this.strip_1.setTransform
(0,130,0.7,0.9);this.strip_1.blendMode=PIXI.BLEND_MODES.ADD;this.strip_2_geo=new PIXI.Geometry();this.strip_2_geo.addAttribute("aVertexPosition",meshData_2.verts);this.strip_2_geo.addAttribute("aUvs",meshData_2.uvs);this.strip_2_geo.addIndex(meshData_2.ids);this.strip_2=new PIXI.Mesh(this.strip_2_geo,this.shader_vortex_2);this.strip_2.setTransform
(0,120,1,1.1);this.strip_2.blendMode=PIXI.BLEND_MODES.ADD;this.particles=[];this.particleDisplay=new PIXI.Container();var p;var pTex=new PIXI.Texture(this.level.textures["fxmap"],new PIXI.Rectangle(60,0,16,16));var x;var y;var scale;for(var i=0;i<20;i++)
{p=new PIXI.Sprite(pTex);p.anchor.set(0.5,0.5);p.blendMode=PIXI.BLEND_MODES.ADD;p.visible=false;p.data={x:0,y:0,scale:0,velX:0,velY:0,alpha:0};this.particleDisplay.addChild(p);this.particles.push(p);}
this.lTex=new PIXI.Texture(this.level.textures["fxmap"],new PIXI.Rectangle(0,60,256,68));this.lightning=new PIXI.Sprite(this.lTex);this.lightning.anchor.set(0.1,0.5);this.lightning.y=150;this.lightning.blendMode=PIXI.BLEND_MODES.ADD;this.display.addChild(this.strip_1);this.display.addChild(this.strip_2);this.display.addChild(this.lightning);this.display.visible=false;this.audio.create("Spinjitzu.ogg");}
Spinjitzu.prototype.start=function()
{this.display.visible=true;this.finished=false;for(var i=0;i<this.particles.length;i++)
{this.setupParticle(this.particles[i]);}
this.audio.play("Spinjitzu.ogg",true);}
Spinjitzu.prototype.stop=function()
{if(!this.display.visible)return;this.display.visible=false;this.audio.stop("Spinjitzu.ogg");}
Spinjitzu.prototype.onUpdate=function(time,deltaTime)
{if(this.finished)return;this.finished=true;for(var i=0;i<this.particles.length;i++)
{var p=this.particles[i];p.data.velY+=deltaTime*0.05;p.data.x+=p.data.velX;p.data.y+=p.data.velY;p.data.scale=Math.max(p.data.scale-deltaTime*0.015,0);p.data.alpha=Math.min(p.data.alpha+deltaTime*0.01,1);p.x=p.data.x;p.y=p.data.y;p.scale.x=p.data.scale;p.scale.y=p.data.scale;p.alpha=p.data.alpha;if(p.data.y>this.player.display.y+200)
{if(this.display.visible)
{this.finished=false;this.setupParticle(p);}}
else
{this.finished=false;}}
this.shader_vortex_1.uniforms.time=time*2;this.shader_vortex_2.uniforms.time=time*1.5;this.sin_1=Math.sin(time*5);this.sin_2=Math.sin(time*5+1);this.strip_1.rotation=this.sin_1*0.1;this.strip_2.rotation=this.sin_2*0.1;if(Math.random()>0.5)
{this.lightning.visible=true;this.lightning.alpha=0.5+Math.random()*0.5;this.lightning.x=Math.random()*50-25;var scaleX=(1+Math.random())*Math.sign(Math.random()-0.5);var scaleY=(2+Math.random()*0.5)*Math.sign(Math.random()-0.5);this.lightning.scale.set(scaleX,scaleY);this.lightning.angle=Math.random()*40*Math.sign(-scaleX);}
else
{this.lightning.visible=false;}
this.display.x=this.player.display.x;this.display.y=this.player.display.y;}
Spinjitzu.prototype.setupParticle=function(p)
{p.data.x=this.player.display.x;p.data.y=this.player.display.y+130;p.data.scale=6+Math.random()*2;p.data.velX=Math.random()*4-2;p.data.velY=-5-Math.random()*15;p.data.alpha=0.2;p.visible=true;}
Spinjitzu.prototype.createStrip=function()
{var verts=[];var uvs=[];var ids=[];var pt={x:0,y:0};var uv={x:0,y:0};var scale=1;var width=230;for(var c=0;c<4;c++)
{for(var x=0;x<10;x++)
{scale=(c*10+x)/40;scale=1-scale*0.7;for(var y=0;y<2;y++)
{pt.x=-Math.cos(x/10*Math.PI*2)*width;pt.y=-Math.sin(x/10*Math.PI*2)*40+y*120;var addX=pt.y/400*Math.cos(x/10*Math.PI*2)*150;pt.x=pt.x*scale+addX;pt.y=pt.y*scale+(c*10+x)*7;pt.y-=280;uv.x=(c*10+x)/40;uv.y=1-y*0.5;verts.push(pt.x);verts.push(pt.y);uvs.push(uv.x);uvs.push(uv.y);}}}
for(var x=0;x<39;x++)
{ids.push(x*2,x*2+1,x*2+2);ids.push(x*2+1,x*2+2,x*2+3);}
return{verts:verts,uvs:uvs,ids:ids};};Spinjitzu.prototype.destroy=function()
{}