var strikeThrough = document.getElementById("shoppingList")
function updateFontStyle(event){

    if(event.target.style.textDecoration != "line-through"){
    document.getElementById(event.target.id).style.textDecoration = "line-through";
    }
    else{
    document.getElementById(event.target.id).style.textDecoration = "none";
    }
}
strikeThrough.addEventListener('click', updateFontStyle)
