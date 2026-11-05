var adPlayerLoader = {
    dynamicallyLoadScript: function(url) {
        var script = document.createElement("script"); // Make a script DOM node
        script.src = url; // Set it's src to the provided URL

        document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    }
};

adPlayerLoader.dynamicallyLoadScript('');

//adPlayerLoader.dynamicallyLoadScript('adPlayerConfig.js');
adPlayerLoader.dynamicallyLoadScript('adPlayer.js');

// adPlayerLoader.dynamicallyLoadScript('adPlayerConfig.js');
// adPlayerLoader.dynamicallyLoadScript('adPlayer.js');


//use this function to show the ads
function showAd(){
    //adPlayer.showAd();
}