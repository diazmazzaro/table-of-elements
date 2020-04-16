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
    }
    $('.element-card[data-matter-states="' + state+'"]').attr('data-selected', 'true');
  }
  
});
