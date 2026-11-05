// BFont : Bitmap sprite font
function BFont () {



}


// BFont.createText
// txt      : text to render
// alignx   : "left" "center" "right"
// aligny   : "base" "center" "top"
// tex      : texture array
BFont.prototype.createText = function(parentlayer, x, y, txt, alignx, aligny, font, scale) {

    // Vars
    let layer;
    let sprite;
    let sprites;
    let i;
    let uni;
    let width;
    let tex;
    let px;
    let py;
    let hw;

    // Container layer
    layer = new PIXI.Container();

    // Create sprites
    width = 0;
    sprites = [];
    for (i=0; i<txt.length; i++) {

        // Unicode
        uni = txt.charCodeAt(i);

        // Space " "
        if (uni === 32) {
            width += font.space;
            sprites.push(null);
        }

        // Texture for this sprite
        tex = font.tex[uni];
        if (tex != null) {
            sprite = new PIXI.Sprite(tex);
            sprite.anchor.set(0.5,0.5);
            sprites.push(sprite);
            layer.addChild(sprite);
            width += sprite.width;
        }

        // Approx. total width using font.spacing
        if (i < txt.length - 1) {width += font.spacing;}

    }

    // Default position
    px = 0;
    py = 0;

    // alignx = left
    if (alignx === "left") {px = 0;}

    // alignx = center
    if (alignx === "center") {px = -width / 2;}

    // alignx = right
    if (alignx === "right") {px = -width;}

    // aligny = base
    if (aligny === "base") {py = 0;}

    // aligny = center
    if (aligny === "center") {py = scale * font.height / 2;}

    // aligny = top
    if (aligny === "top") {py = scale * font.height;}

    // Set positions
    for (i=0; i<sprites.length; i++) {

        sprite = sprites[i];
        if (sprite == null) {

            px += font.space;

        } else {

            hw = sprite.width / 2;
            px += hw;
            sprite.x = px;
            sprite.y = py;
            px += hw + font.spacing;
        }

    }

    // Layer and position
    parentlayer.addChild(layer);
    layer.x = x;
    layer.y = y;
    layer.scale.set(scale,scale);

    //.
    return layer;

}; // createText