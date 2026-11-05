function WavingGrass(display,map)
{this.id=0;this.type=MAP_ITEM_TYPE.DISPLAY;this.name=display.name;this.display=display;this.level=map.level;this.physics=map.level.physics;this.enabled=true;this.update=false;this.animation=false;this.begincontact=false;this.endcontact=false;var tex=display.children[0].texture;if(this.level.shaders.hasOwnProperty(this.name))
{this.shader=this.level.shaders[this.name];}
else
{var vert=`

        precision highp float;

        attribute vec2 aVertexPosition;
        attribute vec2 aUvs;

        uniform mat3 translationMatrix;
        uniform mat3 projectionMatrix;
        uniform vec3 data; // data.x = time, data.y = height, data.z = speed;

        varying vec2 vUvs;

        void main() 
        {
            vUvs = aUvs;

            vec2 pos = aVertexPosition;
            float factor = min( ( pos.y - data.y ) * 0.1, 0.0 );
            pos.x += factor * sin( data.z * 10.0 + data.x * data.z );

            gl_Position = vec4((projectionMatrix * translationMatrix * vec3(pos, 1.0)).xy, 0.0, 1.0);

        }`;var frag=`

            precision highp float;

            varying vec2 vUvs;

            uniform sampler2D uSampler2;


            void main()
            {
                gl_FragColor = texture2D( uSampler2, vUvs );
            }`;var baseTex=tex.baseTexture;var uniforms={uSampler2:baseTex,data:[0,tex.orig.height,1.5+Math.random()*0.5]};this.shader=PIXI.Shader.from(vert,frag,uniforms);this.level.shaders[this.name]=this.shader;this.update=true;}
var geo=new PIXI.Geometry();var verts;var uvs;var ids;verts=[0,0,tex.orig.width,0,tex.orig.width,tex.orig.height,0,tex.orig.height];uvs=[tex._uvs.x0,tex._uvs.y0,tex._uvs.x1,tex._uvs.y1,tex._uvs.x2,tex._uvs.y2,tex._uvs.x3,tex._uvs.y3];ids=[0,1,2,0,3,2];geo.addAttribute('aVertexPosition',verts);geo.addAttribute("aUvs",uvs);geo.addIndex(ids);var mesh=new PIXI.Mesh(geo,this.level.shaders[this.name]);mesh.x=display.children[0].x;mesh.y=display.children[0].y;mesh.calculateBounds();display.removeChild(display.children[0]);display.addChild(mesh);this.level.addItem(this);}
WavingGrass.prototype.onUpdate=function(time,deltaTime)
{this.shader.uniforms.data[0]=time*0.6;}