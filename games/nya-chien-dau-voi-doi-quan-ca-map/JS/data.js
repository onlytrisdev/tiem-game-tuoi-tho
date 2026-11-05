// JavaScript Document
//ajax xml driven
var legalxml;
var XML;
var copyr;
$.ajax({
	
	
	
			type: "GET",
			url: "indexNinjagoMovieGame.xml",
			dataType: "xml",
			error: function(){ alert("Please Refresh The Site!!"); },
			success: function(xml) {
				XML = xml;
				

				//oficial link and text
				$('#siteLinkText').html($(XML).find('center').find('officialsitetab').text());
				$('#siteLinkText2').html($(XML).find('center').find('officialsitetab').text());
				$('#siteLinkText2').css('font-size',$(XML).find('center').find('officialsitetab').attr('size')+'px');
				document.getElementById("siteLinkText2").style.cursor = "pointer";
				
				//pause
				$('#pauseGameHeadingText').html($(XML).find('center').find('pausetext').text());
				$('#pauseGameHeadingText').css('font-size',$(XML).find('center').find('pausetext').attr('size')+'px');
				//pause continue
				$('#pauseGameOptions1').html($(XML).find('center').find('pcontinue').text());
				//pause start over
				$('#pauseGameOptions2').html($(XML).find('center').find('pstart').text());
				//pause more game
				$('#pauseGameOptions3').html($(XML).find('center').find('pmore').text()); 
				//pause official site
				$('#pauseGameOptions4').html($(XML).find('center').find('officialsitetab').text());
				
				//necer giv up   
				$('#hitResponseText').html($(XML).find('center').find('nevergive').text());
				//tt
				legalxml = $(XML).find('center').find('terms').text();
				//alert(legalxml);
				//not rating
				$('.generic_relative').css('display','none');
				//copy
				copyr =$(XML).find('center').find('copyright').text();
				
				
				//$(XML).find('center').find('legal').text();
				
				
	 }
});