$(document).on('click', 'a[target="_blank"]', function() {
  var link = this.href;
  $('.bumper').fadeIn();
  $('#exit_back_btn').unbind('click').click(function() { $('.bumper').hide(); });
  $('#exit_continue_btn').unbind('click').click(function() { window.open(link,'_blank'); $('.bumper').hide(); });
  return false;
});

$(function() {
  setTimeout(function() {
  if(window.parent !== window) { 
    $('.legal-mid span').css('padding-top', 20); 
    $('.legal-mid a').hide(); 
    $('a[href*="dreamworks"]').attr('target', '_parent'); 
  }
  $('a[href*="dreamworks"]').attr('target', '_parent');
  }, 200);
});
