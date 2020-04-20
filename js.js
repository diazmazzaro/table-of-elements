$(document).ready(function(){
  
  $('.element-card').on('click', function(){
    
    if ( $(this).hasClass('open') ) {
      $(this).removeClass('open');
    } else {
      $('.element-card').removeClass('open');
      $(this).addClass('open');
    }
    
  });

  window.selectByMatterState = function(state, clear=true){
    if(clear){
      $('.element-card[data-selected]').removeAttr('data-selected');
      $('.element-card[data-disabled]').removeAttr('data-disabled');
      
    }
    if(state != 'xXxXx'){
      $('.element-card[data-matter-states="' + state+'"]').attr('data-selected', 'true');
      $('.element-card:not([data-matter-states="' + state+'"])').attr('data-disabled', 'true');
    }
  }
  
  window.selectByGroup = function(state, clear=true){
    if(clear){
      $('.element-card[data-selected]').removeAttr('data-selected');
       $('.element-card[data-disabled]').removeAttr('data-disabled');
    }
    $('.element-card[data-group="' + state+'"]').attr('data-selected', 'true');
    $('.element-card:not([data-group="' + state+'"])').attr('data-disabled', 'true');
  }
  
});