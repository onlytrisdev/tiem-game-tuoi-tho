function CameraSetting(display,map,jsonData)
{this.name=display.name;this.pos={x:0,y:0};this.outer=0;this.inner=0;this.inverseDelta=0;this.offset={x:0,y:0};this.zoom=1;var data=AppUtils.getArrayItemsByName(jsonData.library,display.name,0);var bounds_0=display.children[0].width*display.children[0].width*0.25;var bounds_1=display.children[1].width*display.children[1].width*0.25;if(bounds_0>bounds_1)
{this.outer=bounds_0;this.inner=bounds_1;}
else
{this.outer=bounds_1;this.inner=bounds_0;}
this.inverseDelta=1/(this.outer-this.inner);this.pos={x:display.x,y:display.y};var script=data[0].scripts[0].c;script=script.replace(/'/g,"\"");script=JSON.parse(script)
this.offset={x:script.offset[0],y:script.offset[1]};this.zoom=script.zoom;}