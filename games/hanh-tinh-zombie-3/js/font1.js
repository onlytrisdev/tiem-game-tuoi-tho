// Font1 : Sprite font
function Font1 (atlas) {

    // Spacing
    this.spacing = 5;
    this.space   = 50;
    this.height  = 56;

    // Unicode to PIXI.Texture
    this.tex = [];
    for (let i=0; i<1000; i++) {this.tex.push(null);}

    // 0-9
    this.tex[48] = atlas['48'];
    this.tex[49] = atlas['49'];
    this.tex[50] = atlas['50'];
    this.tex[51] = atlas['51'];
    this.tex[52] = atlas['52'];
    this.tex[53] = atlas['53'];
    this.tex[54] = atlas['54'];
    this.tex[55] = atlas['55'];
    this.tex[56] = atlas['56'];
    this.tex[57] = atlas['57'];

    // A-Z
    this.tex[65] = atlas['65'];
    this.tex[66] = atlas['66'];
    this.tex[67] = atlas['67'];
    this.tex[68] = atlas['68'];
    this.tex[69] = atlas['69'];
    this.tex[70] = atlas['70'];
    this.tex[71] = atlas['71'];
    this.tex[72] = atlas['72'];
    this.tex[73] = atlas['73'];
    this.tex[74] = atlas['74'];
    this.tex[75] = atlas['75'];
    this.tex[76] = atlas['76'];
    this.tex[77] = atlas['77'];
    this.tex[78] = atlas['78'];
    this.tex[79] = atlas['79'];
    this.tex[80] = atlas['80'];
    this.tex[81] = atlas['81'];
    this.tex[82] = atlas['82'];
    this.tex[83] = atlas['83'];
    this.tex[84] = atlas['84'];
    this.tex[85] = atlas['85'];
    this.tex[86] = atlas['86'];
    this.tex[87] = atlas['87'];
    this.tex[88] = atlas['88'];
    this.tex[89] = atlas['89'];
    this.tex[90] = atlas['90'];

    // a-z
    this.tex[97]  = atlas['97'];
    this.tex[98]  = atlas['98'];
    this.tex[99]  = atlas['99'];
    this.tex[100] = atlas['100'];
    this.tex[101] = atlas['101'];
    this.tex[102] = atlas['102'];
    this.tex[103] = atlas['103'];
    this.tex[104] = atlas['104'];
    this.tex[105] = atlas['105'];
    this.tex[106] = atlas['106'];
    this.tex[107] = atlas['107'];
    this.tex[108] = atlas['108'];
    this.tex[109] = atlas['109'];
    this.tex[110] = atlas['110'];
    this.tex[111] = atlas['111'];
    this.tex[112] = atlas['112'];
    this.tex[113] = atlas['113'];
    this.tex[114] = atlas['114'];
    this.tex[115] = atlas['115'];
    this.tex[116] = atlas['116'];
    this.tex[117] = atlas['117'];
    this.tex[118] = atlas['118'];
    this.tex[119] = atlas['119'];
    this.tex[120] = atlas['120'];
    this.tex[121] = atlas['121'];
    this.tex[122] = atlas['122'];

}