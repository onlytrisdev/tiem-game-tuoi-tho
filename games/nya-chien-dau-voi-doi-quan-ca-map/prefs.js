

var textAssets = {};
oCONFIG = {
  language :"en",

  game_id: "ninjago-center",
  show_trace: true,
  show_stats: false,
  show_debug: false,
	hideOfficialSite:0,
  build: 1,
	legalButtonWidth:70,
	legalVShift:0,
	legalLineHeight:"9px",
  hub_url: "../../",
  more_url: "../../",
  movie_url: "http://www.legoninjagomovie.com/",
  browser_alert: "http://dev.appcloud.warnerbros.com/legoninjago/gamehub/browser_alert/",

  load_hold_seconds: 0

};
// Overridden from en.json language file


var legal_links = [
  {msg: "legal_terms", link:""},
  {msg: "legal_privacy", link:""},
  {msg: "legal_mpaa", link:""},
  {msg: "legal_parentalguide", link:""},
  {msg: "legal_ratings", link:""}
];



var oLANG = {
	"legal":"LEGAL",
	"legal_terms":"TERMS OF SERVICE",
	"legal_privacy":"PRIVACY POLICY",
	"legal_mpaa":"MPAA",
	"legal_parentalguide":"PARENTAL GUIDE",
	"legal_ratings":"FILM RATINGS",
	"legal_copyright":"&copy;2017 Warner Bros. Ent. All Rights Reserved. &copy;2017 The LEGO Group."
};

var legal_billing = null;

var legal_images = [
  "Media/rating.png"
];

var official_site_link = "http://www.legoninjagomovie.com/";

var menu_list = [
  {title_msg: "menu_resume", action:"resume", link:""},
  {title_msg: "menu_exit", action:"exit", link:""},
  {title_msg: "menu_more", action:"hub"},
  {title_msg: "official_site", action:"official_site"},
];
