// JavaScript Document

function RadialMask(tImage,tLevel) {
	
	return new THREE.ShaderMaterial({
		transparent:true,
	 uniforms: {
		 // the underlying image
		 "tDiffuse": { type:"t", value: tImage },
		 // the alpha mask
		 //"tMask": { value: null },
		 "tLevel": { type:"f", value: tLevel}
	 },
	 vertexShader: [
		 "varying vec2 vUv;", 
		 "void main() {",
		 "vUv = uv;",
		 "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
		 "}"
	 ].join("\n"),
	 fragmentShader: [
		 "uniform sampler2D tDiffuse;",
		 //"uniform sampler2D tMask;",
		 "uniform float tLevel;",
		 "varying vec2 vUv;",
		"void main() {",
		 // get the current pixel color
		 "vec4 texel = texture2D(tDiffuse, vUv);",
		 
		 "float angle = 0.5+atan(vUv.x-0.5,0.5-vUv.y)/6.283;",
		 
		 "float alpha = 0.0;",
		 
		"if (angle<tLevel) alpha=1.0;", 
		 
		 // get alpha based on the color of the mask image
		 //"float alpha = texture2D(tMask, vUv).r;",
		 // Cutoff level for alpha
		 //"if (level>alpha)"," {alpha = 1;} ","else","{alpha=0;}",
		 // apply the alpha to the current pixel 
		 
		 "gl_FragColor = texel * alpha;",
		 //"if (gl_FragColor.a<0.5) discard;",
		// "gl_FragColor.a = texel.a * alpha;",
		 "}"
	 ].join("\n")
});
}

function LinearMask(tImage,tLevel,toLeft) {
	return new THREE.ShaderMaterial({
		transparent:true,
	 uniforms: {
		 // the underlying image
		 "tDiffuse": { type:"t", value: tImage },
		 // the alpha mask
		 //"tMask": { value: null },
		 "tDir": {type:"f", value: toLeft},
		 "tLevel": { type:"f", value: tLevel}
	 },
	 vertexShader: [
		 "varying vec2 vUv;", 
		 "void main() {",
		 "vUv = uv;",
		 "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
		 "}"
	 ].join("\n"),
	 fragmentShader: [
		 "uniform sampler2D tDiffuse;",
		 "uniform float tDir;",
		 "uniform float tLevel;",
		 "varying vec2 vUv;",
		"void main() {",
		 // get the current pixel color
		 "vec4 texel = texture2D(tDiffuse, vUv);",
		 		 
		 "float alpha = 0.0;",
		 "if (tDir>0.0) {",
		     "if (vUv.x>tLevel) alpha=1.0;", 
		 "} else {",
		     "if (vUv.x<=tLevel) alpha=1.0;", 
		 "}",
		 "gl_FragColor = texel * alpha;",
		 //"if (gl_FragColor.a<0.5) discard;",
		// "gl_FragColor.a = texel.a * alpha;",
		 "}"
	 ].join("\n")
});
}

/*
function RadialMask(tImage,tLevel) {
	return new THREE.ShaderMaterial({
	 uniforms: {
		 // the underlying image
		 "tDiffuse": { type:"t", value: tImage },
		 // the alpha mask
		 //"tMask": { value: null },
		 "tLevel": { type:"f", value: tLevel}
	 },
	 vertexShader: [
		 "varying vec2 vUv;", 
		 "void main() {",
		 "vUv = uv;",
		 "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
		 "}"
	 ].join("\n"),
	 fragmentShader: [
		 "uniform sampler2D tDiffuse;",
		 //"uniform sampler2D tMask;",
		 "uniform float tLevel;",
		 "varying vec2 vUv;",
		"void main() {",
		 // get the current pixel color
		 "vec4 texel = texture2D(tDiffuse, vUv);",
		 
		 "float angle = 0.5+atan(vUv.x-0.5,0.5-vUv.y)/6.283;",
		 
		 "float alpha = 0.0;",
		 
		"if (angle<tLevel) alpha=1.0;", 
		 
		 // get alpha based on the color of the mask image
		 //"float alpha = texture2D(tMask, vUv).r;",
		 // Cutoff level for alpha
		 //"if (level>alpha)"," {alpha = 1;} ","else","{alpha=0;}",
		 // apply the alpha to the current pixel 
		 
		 "gl_FragColor = texel * alpha;",
		 "if (gl_FragColor.a<0.5) discard;",
		// "gl_FragColor.a = texel.a * alpha;",
		 "}"
	 ].join("\n")
});
}

*/









