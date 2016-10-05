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
    var mao = /#.*/;
    link[i].onclick = function(){
      var temp = $(this.href.match(mao)[0]);
      var size = temp.css('font-size').split('px')[0];
      temp.animate({'font-size':size*1.5},1000);
      temp.css({'color':'green'});
      $('html,body').animate({scrollTop:temp.offset().top-100},500);
      setTimeout(function(){
        temp.css({'color':'black'});
        temp.animate({'font-size':size},1000)}
        ,1000);
    }
}
function change_color(temp){
  temp.style.color = 'black';
}
// <div class="pagination">
//   <p><%- paginator({ total: Math.ceil(site.posts.length / config.per_page)}) %></p>
// </div>
