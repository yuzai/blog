var list = document.getElementsByClassName('category-list-count');
for(var i=0;i<list.length;i++)
{
    list[i].innerHTML  = ' ('+list[i].innerHTML+')';
}
var list = document.getElementsByClassName('archive-list-count');
for(var i=0;i<list.length;i++)
{
    list[i].innerHTML  = ' ('+list[i].innerHTML+')';
}
document.addEventListener('scroll',function(){
var head = document.getElementById('daohang');
  if(window.pageYOffset !== 0)
      head.style.opacity = 1;
  else {
      head.style.opacity = 0.4;
  }
  if(window.pageYOffset >= 202 && window.innerWidth >=768 ){
    var w = $('#ab_ca').parent().width();
    $('#ab_ca').addClass('about_fix');
    $('#ab_ca').css('width',w);
  }
  else {
    $('#ab_ca').removeClass('about_fix');
  }
})
var link = document.getElementsByClassName('toc-link');
for(var i=0;i<link.length;i++)
{
    var mao = /#[\u4e00-\u9fa5]*/;
    console.log(link[i].href.match(mao)[0]);
    link[i].onclick = function(){
      var temp = $(this.href.match(mao)[0]);
      $(this.href.match(mao)[0]).animate({'font-size':'30px'},1000);
      $(this.href.match(mao)[0]).css('color','green');
      $('html,body').animate({scrollTop:$(this.href.match(mao)[0]).offset().top-100},500);
      return false;
    }
}
