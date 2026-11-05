var gameName = 'wedding_style_cinderella_vs_rapunzel_vs_elsa_html5';
var domainName = document.referrer;
if (domainName == "") {
    domainName = window.location.href;
}
var domain_parts = domainName.split("://");
var domain_subparts = domain_parts[1].split("/");
var hostNames = domain_subparts[0];
var faceUrl = "//www.facebook.com/eGirlGames.net"
var logoUrl = "//www.egirlgames.net/?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=logo";
var THUMB_1 = thumbs['egg'][0]+"?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=thumb1";
var THUMB_2 = thumbs['egg'][1]+"?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=thumb2";
var THUMB_3 = thumbs['egg'][2]+"?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=thumb3";
var THUMB_4 = thumbs['egg'][3]+"?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=thumb4";
var mGamesLink1 = "//www.egirlgames.net/?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=titlescreen";
var mGamesLink2 = "//www.egirlgames.net/?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=level_select";
var mGamesLink3 = "//www.egirlgames.net/?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=cinderella_makeup";
var mGamesLink4 = "//www.egirlgames.net/?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=cinderella_dressup";
var mGamesLink5 = "//www.egirlgames.net/?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=rapunzel_makeup";
var mGamesLink6 = "//www.egirlgames.net/?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=rapunzel_dressup";
var mGamesLink7 = "//www.egirlgames.net/?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=elsa_makeup";
var mGamesLink8 = "//www.egirlgames.net/?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=elsa_dressup";
var mGamesLink9 = "//www.egirlgames.net/?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=thumbs_transition";
var mGamesLink10 = "//www.egirlgames.net/?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=buttonEndScreen";
var loaderlogolink = "//www.egirlgames.net?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=preloader_logo";
var loaderbackgroundlink = "//www.egirlgames.net/page/exclusive-games?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=preloader_background";
<!-- Google Analytics -->
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '', 'ga');
ga('create', 'UA-7372037-15', 'auto');
ga('send', 'event', 'www.egirlgames.net', gameName, hostNames);
<!-- End Google Analytics -->
var setFilenaming = {
    create: function () {
        this.game.state.start('preload');
    }
}