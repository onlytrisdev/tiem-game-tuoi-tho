function Waterfall(display,map,img)
{this.id=0;this.type=MAP_ITEM_TYPE.DISPLAY;this.name=display.name;this.display=display;this.level=map.level;this.physics=map.level.physics;this.enabled=true;this.update=false;this.animation=false;this.begincontact=false;this.endcontact=false;if(this.level.shaders.hasOwnProperty("Waterfall"))
{this.shader=this.level.shaders["Waterfall"];}
else
{var vert=`

        precision highp float;

        attribute vec2 aVertexPosition;
        attribute vec2 aUvs;

        uniform mat3 translationMatrix;
        uniform mat3 projectionMatrix;

        varying vec2 vUvs;




        void main() 
        {
            vUvs = aUvs;

            gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

        }`;var frag=`

        precision highp float;

        varying vec2 vUvs;

        uniform sampler2D uSampler2;
        uniform vec2 data;                          // data.x = time, data.y = speed;


        void main()
        {
            vec2 uv = vUvs;
            uv.y += data.x * data.y;

            gl_FragColor = texture2D( uSampler2, uv );
        }`;var tex=PIXI.Texture.from(img);var uniforms={uSampler2:tex,data:[0,-2]};this.shader=PIXI.Shader.from(vert,frag,uniforms);this.level.shaders["Waterfall"]=this.shader;this.update=true;}
var geo=new PIXI.Geometry();var verts;var uvs;var ids;verts=[10,0,90,0,5,3,95,3,1,15,99,15,0,30,100,29,0,49,100,50,-2,75,102,76,-4,100,104,100];uvs=[0,0,1,0,0,0.5,1,0.5,0,1,1,1,0,1.5,1,1.5,0,2,1,2,0,2.5,1,2.5,0,3,1,3,0,3.5,1,3.5];ids=[0,1,2,1,2,3,2,3,4,3,4,5,4,5,6,5,6,7,6,7,8,7,8,9,8,9,10,9,10,11,10,11,12,11,12,13];geo.addAttribute('aVertexPosition',verts);geo.addAttribute("aUvs",uvs);geo.addIndex(ids);var mesh=new PIXI.Mesh(geo,this.shader);mesh.blendMode=PIXI.BLEND_MODES.SCREEN;mesh.calculateBounds();display.removeChild(display.children[0]);display.addChild(mesh);this.level.addItem(this);}
Waterfall.prototype.onUpdate=function(time,deltaTime)
{this.shader.uniforms.data[0]=time*0.5;}