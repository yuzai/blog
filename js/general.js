var list = document.getElementsByClassName('category-list-count');
for(var i=0;i<list.length;i++)
{
    list[i].innerHTML  = '('+list[i].innerHTML+')';
}

document.addEventListener('scroll',function(){
var head = document.getElementById('daohang');
  if(window.pageYOffset !== 0)
      head.style.opacity = 1;
  else {
      head.style.opacity = 0.4;
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

document.addEventListener('scroll',function(){
if(window.pageYOffset >= 202 && window.innerWidth >=768 ){
  var w = $('#ab_ca').parent().width();
  $('#ab_ca').addClass('about_fix');
  $('#ab_ca').css('width',w);
}
else {
  $('#ab_ca').removeClass('about_fix');
  $('#ab_ca').css('width','auto');
}
})
sideslide_control();
function sideslide_control(){
  var w = $('#ab_ca').parent().width();
if(window.innerWidth >= 768)
{
  $('#ab_ca').removeClass('sideslide_control');
  $('#ab_ca').css({
    'left':'auto'
  });
}
else {
  // var w = $('#ab_ca').parent().width();
  $('#ab_ca').addClass('sideslide_control');
  $('#ab_ca').css({
    'left':-w
  });
}
}
$(window).resize(function(){
  sideslide_control();
})

$('#slide_aboutme').click(function(){
   if(window.innerWidth < 768)
   {
    if($('#ab_ca').hasClass('sideslide_control')){
      var w = $('#ab_ca').parent().width();
      if($('#ab_ca').css('left') == '0px')
         $('#ab_ca').animate({left:-w});
      else {
         $('#ab_ca').animate({left:0});
      }
    }
    }
   })
$('#ab_ca,body').click(function(){
  if(window.innerWidth < 768)
  {
   if($('#ab_ca').hasClass('sideslide_control')){
     var w = $('#ab_ca').parent().width();
     if($('#ab_ca').css('left') == '0px')
        $('#ab_ca').animate({left:-w},'slow');
   }
   }
})
