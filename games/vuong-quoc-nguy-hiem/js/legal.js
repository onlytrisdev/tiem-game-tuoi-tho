function Legal(game)
{this.game=game;this.app=this.game.app;this.display=AppUtils.createElement("div","legalContainer");AppUtils.setProps(this.display,{width:"100%",height:"0px",left:"0px",top:"100%"});this.legal_line=AppUtils.createElement("div","legal_line","legal");this.height=Math.max(game.app.scale*40,20);AppUtils.setProps(this.legal_line,{position:"absolute",width:"90%",height:this.height+"px",left:"5%",top:(-this.height)+"px",fontFamily:"sans-serif",fontWeight:"regular",fontSize:"0.75em",letterSpacing:"0.1em",color:"#FFF",textAlign:"center",opacity:"0.5",cursor:"pointer"});this.legal_line.textContent="LEGO, the LEGO logo, NINJAGO and the Minifigure are trademarks of the LEGO Group. ©2020 The LEGO Group.";this.display.appendChild(this.legal_line);}
Legal.prototype.show=function()
{this.display.style.visibility="visible";}
Legal.prototype.hide=function()
{this.display.style.visibility="hidden";}