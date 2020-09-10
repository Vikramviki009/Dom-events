var list = document.querySelector("ul");
var input = document.querySelector("#user-input");
var addBox = document.querySelector("#enter");

list.addEventListener('click',function(e){
    if(e.target.className === "delete"){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})
addBox.addEventListener("click",function(e){
    if(input.value!=0){
        const li = document.createElement("li");
        const itemName = document.createElement("span");
        const delBtn = document.createElement("span");

        itemName.textContent=input.value;
        delBtn.textContent="Delete";

        itemName.classList.add("name");
        delBtn.classList.add("delete");

        li.appendChild(itemName);
        li.appendChild(delBtn);
        list.appendChild(li);
    }
    input.value="";
})

input.addEventListener("keypress",function(e){
    if(input.value!=0 && e.which === 13){
        const li = document.createElement("li");
        const itemName = document.createElement("span");
        const delBtn = document.createElement("span");

        itemName.textContent=input.value;
        delBtn.textContent="Delete";

        itemName.classList.add("name");
        delBtn.classList.add("delete");

        li.appendChild(itemName);
        li.appendChild(delBtn);
        list.appendChild(li);
        input.value="";
    }
})

list.addEventListener("click",function(e){
    e.preventDefault();
    if(e.target.className=== 'name'){
        e.target.classList.toggle("done");
    }
})