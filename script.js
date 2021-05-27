//Retornar data e hora atual
function dataHoraAtual(){
    var dNow = new Date();
    var localDate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
    return localDate;
}

//Criando LI's das tarefas.
document.getElementById("addItem").onclick = function addItemOnList() {
    if (document.getElementById("item").value.length > 0) {
        var item = document.getElementById("item").value + ' - ' + dataHoraAtual();
        var li = document.createElement("li");
        var i = document.createTextNode(item);
        li.appendChild(i);
        document.getElementById("itemsOfList").appendChild(li);
        document.getElementById("item").value = '';
        document.getElementById("item").focus();
        return false;
    } else {
        alert("Por favor, preencha o campo de tarefa!");
    }
}

//Deletar o LI clicado.
var li = document.getElementById("itemsOfList");
li.addEventListener("click", function(event) {
    li.removeChild(event.target);
})
//Declarando variáveis muito utilizadas.
var bodyDOM = document.body;
var titleDOM = document.getElementById("title");
var descriptionDOM = document.getElementById("description");
var itemsLi = document.getElementById("itemsOfList");
var fonts = document.getElementById("optionsFnt");
var language = document.getElementById("selectLng");
var menuIcon = document.getElementById("iconMenu");
var menuBar = document.getElementById("barMenu");
var addItemBtn = document.getElementById("addItem");

//Alterando entre temas Dark e Light.
function darkLight() {
    if (document.getElementById("myCheck").checked == true) {
        bodyDOM.style.backgroundColor = "black";
        titleDOM.style.color = "white";
        descriptionDOM.style.color = "white";
        itemsLi.style.color = "white";
        fonts.style.color = "white";
        language.style.color = "white";
        menuIcon.style.backgroundImage = "url('assets/gearWhite.png')";
        menuBar.style.backgroundColor = "#262626";
        addItemBtn.style.backgroundColor = "black"
        addItemBtn.style.color = "white";
        addItemBtn.style.borderColor = "white";
    } else {
        bodyDOM.style.backgroundColor = "#00d0ac";
        titleDOM.style.color = "black";
        descriptionDOM.style.color = "black";
        itemsLi.style.color = "black";
        fonts.style.color = "black";
        language.style.color = "black";
        menuIcon.style.backgroundImage = "url('assets/gearBlack.png')";
        menuBar.style.backgroundColor = "#009980";
        addItemBtn.style.backgroundColor = "#00d0ac"
        addItemBtn.style.color = "black";
        addItemBtn.style.borderColor = "black";
    }
}

//Alterando as fontes ao selecionar as linguaguens.
document.getElementById("engIcon").onclick = function setLangEng() {
    titleDOM.textContent = "To-Do List";
    descriptionDOM.textContent = "Type an assignment below to add it to your list:";
    document.getElementById("addItem").value = "ADD ASSIGNMENT";
    fonts.textContent = "Select Theme:";
    language.textContent = "Select Language:";
}

document.getElementById("ptIcon").onclick = function setLangPt() {
    titleDOM.textContent = "Lista de Afazeres";
    descriptionDOM.textContent = "Digite uma tarefa abaixo para adicionar a sua lista:";
    document.getElementById("addItem").value = "ADD TAREFA";
    fonts.textContent = "Selecione o tema:";
    language.textContent = "Selecione o idioma:";
}