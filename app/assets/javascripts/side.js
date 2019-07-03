$(function(){
  $('.sidebar').each(function() {
    var win = $(window);
    var side = $(this)
    var sideOffsetTop = side.offset().top;
    win.on('scroll', function(){
      if(win.scrollTop() > sideOffsetTop){
        side.addClass('sticky');
      }else{
        side.removeClass('sticky');
      }
    });
    win.trigger('scroll');
  });

});