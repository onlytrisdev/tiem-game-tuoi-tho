var xmlhttp = new XMLHttpRequest();
var json;
var adPositions = ['pre','mid','mid1','mid2','mid3','mid4','mid5','end','replay'];
var igaChannelID = '0';
var openLinks = "1";
var linkLogo = "";
var cobrandingLogo = "";
var cobrandingUrl = "";

var domainName = document.referrer;
if(domainName == "")
    {
        domainName = window.location.href;
    }
var domain_parts = domainName.split("://");
var domain_subparts = domain_parts[1].split("/");
var domain = domain_subparts[0];
console.log('domain: ',domain);


//this should be overwritten in the games settings.js file
var hostNames = domain_subparts[0];
var gameName = domain_subparts[domain_subparts.length-1];

if(gameName==''){
    gameName = domain_subparts[domain_subparts.length-2];    
}

xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        json = JSON.parse(this.responseText);
        checkJson();
    }
}

function checkJson(){
    console.log('check settings for domain: ',domain)
    if(hasDomainDefinition(domain)){
        adPositions = json.domains[domain].ads;
        igaChannelID = json.domains[domain].igaChannelID;
        openLinks = json.domains[domain].links;
      
        //console.log('found domain config');  
    }else{
        //console.log('no domain config using defaults');
    }
    
    //from the domain settings
    console.log('ad positions are:',adPositions);
    console.log('igaChannelID: ',igaChannelID);
    console.log('openLinks: ',openLinks);
    
    setThumbs();
    setCobrandings();
    
    //console.log('thumbs are',thumbs);
    //console.log('cobrandings are',cobrandings);
}



function hasDomainDefinition(domain){
    return json.domains[this.domain] != undefined;
}

function hasCobrandingDefinition(domain){
    return json.cobrandings[this.domain] != undefined;
}

function setThumbs(){
    thumbs = json.thumbs;
}

function setCobrandings(){
    cobrandings = json.cobrandings;
}


var initiatedGaAds=false;
function showAdOnPosition(position){
    console.log('try to show ad on ' + position);
    
    if(adPositions.indexOf(position)>-1){
        console.log('showing ad on ' + position);
        
        showAd();
        
        sendGoogleAnalyticsAdEvent(position);
        
        muteAd(true);
    }else{
        console.log('not showing ad on ' + position);
    }
}

function sendGoogleAnalyticsAdEvent(position){
    if(initiatedGaAds===false){
            
        if(typeof ga ==='undefined'){
            //google analytics is not loaded
            //this is done usually in the games settings.js file
            
          
            (function (i, s, o, g, r, a, m) {
                i[''] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })//(window, document, 'script', '', 'ga');
        }
        
        //init the ads GA only once
        //ga('create', 'UA-7372037-21', 'auto', 'ads');    
        initiatedGaAds=true;
    }
    
    //console.log('track ga ad event ',gameName, hostNames, position, igaChannelID);    
    //ga('ads.send', 'event', gameName, hostNames, position, igaChannelID);
        
}

/**
 * 0 - closed links
 * 1 - opened links
 * string - open links with the string as the url
 * */
function openUrl(url){
    if(openLinks==="1"){
        window.open(url);
    }else if(openLinks!=="0"){
        window.open(openLinks);
    }
}

xmlhttp.open('GET','ads.json',false);//this shouldn't be asynchronous
xmlhttp.send();


window.addEventListener("load",function(event) {
    console.log('LOADED!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    
    if(typeof adPlayer == 'undefined' || typeof showAd == 'undefined'){
        //adblock is active, show warning
        console.log('ad block detected');
        
        var adBlockWarning = '<div id="adBlockWarning" style="position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: url(\'adBlockWarning.jpg\') no-repeat center;background-size: cover;">';

        document.getElementsByTagName("body")[0].innerHTML=adBlockWarning;
    }
},false);

