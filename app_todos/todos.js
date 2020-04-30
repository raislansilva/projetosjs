var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var list = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderList(){
    listElement.innerHTML = ''

    for(l of list){
        var todoElement = document.createElement('li');
        var textElement = document.createTextNode(l);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');

        var pos = list.indexOf(l);
        linkElement.setAttribute('onclick','deleteTodo('+ pos +')')

        var linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        todoElement.appendChild(textElement);
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement);
    }
}

function addTodo(){
    var todoText = inputElement.value;

    list.push(todoText);
    inputElement.value = ''
    renderList()

}

function deleteTodo(pos){
    list.splice(pos,1);
    renderList();
}

function saveToStorage(){
    localStorage.setItem('list_todos',JSON.stringify(list));
}

renderList();
buttonElement.onclick = addTodo;
