//////Выбрать все и Снять выделение (галочки)//////////
var flag=false;
document.fio.all.onclick = function(){
    if(!flag){
        chooseAll.innerHTML = "Снять выделение";
        flag=true;
        checkElements(true);
    } else {
    chooseAll.innerHTML = "Выделить всех";
        flag=false;
        checkElements(false);	
    }	
}
function checkElements(variant){
    for(var i=1; i<document.fio.length; i++){
            document.fio.elements[i].checked = variant;
        }
}
//////////////////////////////////////////////////////////

///Выподающий список производителей "Все производители"///
$('.button').on('click', function(){
  $('.toggle').toggle();
})
//////////////////////////////////////////////////////////