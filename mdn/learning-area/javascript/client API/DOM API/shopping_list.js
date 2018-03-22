var ul = document.querySelector("ul");
var input = document.querySelector("input");
var addButton = document.querySelector("button");

ul.addEventListener("click", function(e){
    var target = e.target;
    if(target && target.tagName === "BUTTON"){
        var listItem = target.parentNode;
        listItem.parentNode.removeChild(listItem);
        input.focus();
    }
});

addButton.addEventListener("click", function(){
    var li = document.createElement("li");
    li.textContent = input.value;
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = "";
    input.focus();    
});