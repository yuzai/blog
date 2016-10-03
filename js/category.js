var list = document.getElementsByClassName('category-list-count');
for(var i=0;i<list.length;i++)
{
    list[i].innerHTML  = ' ('+list[i].innerHTML+')';
}
var button1 = document.getElementById('but1');
var button2 = document.getElementById('but2');
button1.onclick = function(){
   document.getElementById('archive1').style.display= '';
   document.getElementById('archive2').style.display= 'none'
}
button2.onclick = function(){
  document.getElementById('archive1').style.display= 'none';
  document.getElementById('archive2').style.display= ''
}

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

document.getElementById('daohang').addEventListener('mouseover',function(){
var head = document.getElementById('daohang');
      head.style.opacity = 1;
})
document.getElementById('daohang').addEventListener('mouseout',function(){
var head = document.getElementById('daohang');
      head.style.opacity = 0.4;
})
