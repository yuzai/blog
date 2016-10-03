document.addEventListener('scroll',function(){
var head = document.getElementById('daohang');
  if(window.pageYOffset !== 0)
      head.style.opacity = 1;
  else {
      head.style.opacity = 0.4;
  }
  if(window.pageYOffset >= 230 && window.innerWidth >=768 ){
    var w = $('#ab_ca').parent().width();
    $('#ab_ca').addClass('about_fix');
    $('#ab_ca').css('width',w);
  }
  else {
    $('#ab_ca').removeClass('about_fix');
  }
})
