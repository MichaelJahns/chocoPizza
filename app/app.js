var strikeThrough1 = document.getElementById("shoppingList")
var strikeThrough2 = document.getElementById("shoppingList2")
function updateFontStyle(event){

    if(event.target.style.textDecoration != "line-through"){
    document.getElementById(event.target.id).style.textDecoration = "line-through";
    }
    else{
    document.getElementById(event.target.id).style.textDecoration = "none";
    }
}
strikeThrough1.addEventListener('click', updateFontStyle)
strikeThrough2.addEventListener('click', updateFontStyle)
