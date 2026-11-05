function ShareToFacebook(b,a){
	
    var gscore = localStorage["Jumper.bestScore"] != undefined ? parseInt(localStorage["Jumper.bestScore"]) : 0;
    var sendUrl = "https://www.facebook.com/dialog/feed?";
    var app_id = "app_id=260579587419564";
    var link = "&link=http://www.localhost/meo-tom-kissing-2/game";

    var caption = "&caption=Thử sức với game Mèo Tom kissing cùng Arcade nào!";
    if (gscore > 0) {
        caption = "&caption=" + "Mình vừa đạt được "+b+" điểm rồi!";
    }
    var description = "&description=Game này đúng là game điên đầu trên localhost";
    var redirect_uri = "&redirect_uri=http://www.localhost/meo-tom-kissing-2/game";
    var picture = "&picture=http://www.localhost/images/image/2015/4/10/meo-tom-kissing-2.jpg";
    var name = "&name=Mèo Tom kissing"
    var url = sendUrl + app_id + link + caption + description + redirect_uri + picture + name

    var win = window.open(url, "_blank");
    win.focus()
}




function CreateLinksInGame(){
	window.open( 'http://www.localhost', '_blank' )
}