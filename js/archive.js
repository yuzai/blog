$(document).ready(function(){
var list = document.getElementsByClassName('category-list-count');
for(var i=0;i<list.length;i++)
{
  list[i].innerHTML = '('+this.innerHTML+')';
}
}
)
