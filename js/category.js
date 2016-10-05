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
if(window.pageYOffset >= 230 && window.innerWidth >=768 ){
  var w = $('#ab_ca').parent().width();
  $('#ab_ca').addClass('about_fix');
  $('#ab_ca').css('width',w);
}
else {
  $('#ab_ca').removeClass('about_fix');
}
})
