const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    //caso a caixa esteja vazia
    if (inputBox.value == '') {
        alert("Você deve colocar uma tarefa!");
    }

    else {
        let li = document.createElement('li'); //vai criar um elemento li e guardar na variavel
        li.innerHTML = inputBox.value; //vai adicionar o texto escrito a um li
        listContainer.appendChild(li); //para o li adicionado aparecer na lista

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener ('click', function(e){
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if  (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();