var list = document.getElementsByClassName('category-list-count');
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
})

document.getElementById('daohang').addEventListener('mouseover',function(){
var head = document.getElementById('daohang');
      head.style.opacity = 1;
})
document.getElementById('daohang').addEventListener('mouseout',function(){
var head = document.getElementById('daohang');
      head.style.opacity = 0.4;
})
