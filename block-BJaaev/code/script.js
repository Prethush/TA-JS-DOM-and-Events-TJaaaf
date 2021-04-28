
let inputTodo = document.querySelector(".input-todo");
let rootElm = document.querySelector("ul");
let div = document.querySelector(".bottom-container")


let todoArray = JSON.parse(localStorage.getItem("todos")) || [];


function addItems(event)  {
    let value = event.target.value;
    // console.dir(value);
    if(event.keyCode === 13 && value !== "") {
        todoArray.push({
            name: value,
            isDone: false
        });
        event.target.value = "";
        console.log(todoArray);
        localStorage.setItem("todos", JSON.stringify(todoArray));
        createtodoUI(rootElm, todoArray);
    }
}

function handleDelete(event) {
    let id = event.target.dataset.id;
    todoArray.splice(id, 1);
    localStorage.setItem("todos", JSON.stringify(todoArray));
    createtodoUI(rootElm, todoArray);
}


function handleChange(event) {
    let id = event.target.dataset.id;
    todoArray[id].isDone = !todoArray[id].isDone;
    localStorage.setItem("todos", JSON.stringify(todoArray));
   
    createtodoUI(rootElm, todoArray);

}

function itemsLeftCount() {
    return  todoArray.filter((todo) => {
        return todo.isDone === false;
    });

}

function handleAllItems(event) {
    createtodoUI(rootElm, todoArray);
}



function handleActiveItems(event) {
    rootElm.innerHTML = ""
    todoArray.forEach((todo, i) => {
        let li = document.createElement("li");
        
        let input = document.createElement("input");  
        let label = document.createElement("label");
        input.style.marginRight = ".5rem";
        let span = document.createElement("span");
        if(todo.isDone === false) {
           
            input.type = "checkbox";
            input.checked = todo.isDone;
            label.innerText = todo.name;
            span.innerText = "X";
            span.setAttribute("data-id", i);
            li.append(input, label, span);
        }
        
        rootElm.append(li);      
        
    })
}

function handleCompletedItems(event) {
    rootElm.innerHTML = "";
    todoArray.forEach((todo, i) => {
        let li = document.createElement("li");
        let input = document.createElement("input");  
        input.style.marginRight = ".5rem";
        let label = document.createElement("label");
        let span = document.createElement("span");
        if(todo.isDone === true) {
            input.type = "checkbox";
            input.checked = todo.isDone;
            label.innerText = todo.name;
            span.innerText = "X";
            span.setAttribute("data-id", i);
            li.append(input, label, span);
        }
        rootElm.append(li);    
    });
    

}

function changeText(event) {
    console.dir(event.target);
    let id = event.target.dataset.id;
    todoArray[id].name = event.target.innerText;
}
inputTodo.addEventListener("keyup", addItems);

function createtodoUI(root, data) {
   
    root.innerHTML = "";
    data.forEach((todo, i) => {
        
        let li = document.createElement("li");
        // li.classList.add("flex", "jcb", "aic");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("checkbox");
        input.checked = todo.isDone;
        input.setAttribute("data-id", i);
        let label = document.createElement("label");
        label.innerText = todo.name;
        label.setAttribute("data-id", i);
        if(todoArray[i].isDone === true) {
        label.classList.add("strike");
        } else {
            label.classList.remove("strike");
            label.classList.add("unstrike");
        }   
        let span = document.createElement("span");
        span.innerText = "X";
        span.setAttribute("data-id", i);
        li.append(input, label, span);
       
        root.append(li);
        
        label.addEventListener("select", changeText);
        span.addEventListener("click", handleDelete);
        input.addEventListener("input", handleChange);
        createsubUI(li, input, label, span, todoArray, i);
        
    });
    
   
}


function createsubUI(li, input, label, span, todoArray, i) {
        div.innerHTML = "";
        let itemsLeft = document.createElement("span");
        itemsLeft.innerText = `${itemsLeftCount().length} ${itemsLeftCount().length > 1 ? "items" : "item"} left`;
        let allItems = document.createElement("a");
        allItems.innerText = "All";
        let activeItems = document.createElement("a");
        activeItems.innerText = "Active";
        let completed = document.createElement("a");
        
        div.append(itemsLeft, allItems, activeItems, completed);
        
        completed.innerText = "Completed";
        allItems.addEventListener("click", handleAllItems);
        activeItems.addEventListener("click", handleActiveItems);
        completed.addEventListener("click", handleCompletedItems);

}
createtodoUI(rootElm, todoArray);