var dadosJSON;

var ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', 'https://raw.githubusercontent.com/Fyllipy/QuantitativosDashboard/master/windows.txt');
    ourRequest.onload = function (){
        var ans;
            ans = ourRequest.responseText;
            //console.log(ans);
            
            //var teste = ans[rec];

            //var dict = new Object();
            //dict = ans;

            dadosJSON = JSON.parse(ans);
            var data = dadosJSON.windows;

            console.log(data);

var div = document.querySelector(".modal-body");
var container = document.querySelector(".bodyContainer");
var content = document.querySelector(".modal-content");
var modalHeader = document.querySelector(".modal-header");
var modalText = document.querySelector(".headerText");
var modalFooter = document.querySelector(".modal-footer");
//var eraser = document.querySelector(".containerEraser");

//content.removeChild(modalHeader[0])
//var itens = document.getElementById("headerEraser");
//console.log(itens);
//itens.remove();

var itemRow = [];
var itemName = [];
var itemValue = [];
//var container;



//while (modalText.firstChild) {
//    modalText.removeChild(modalText.firstChild);
//}

function windowForm(id){
    container.setAttribute('class','bodyContainer');
    for(var i = 0;i < 3; i++){
        itemRow[i] = document.createElement("tr");
        itemName[i] = document.createElement("td");
        itemValue[i] = document.createElement("td");
        itemRow[i].setAttribute('class', 'Eraser');
        itemRow[i].appendChild(itemName[i]);
        itemRow[i].appendChild(itemValue[i]);
        container.appendChild(itemRow[i]);
        div.appendChild(container);
      }
      
      
      var nivel = document.createTextNode("Nivel da construcao ")
        itemName[0].appendChild(nivel);
      
      var alturaPeitoril = document.createTextNode("Altura do Peitoril: ")
        itemName[1].appendChild(alturaPeitoril);
      
      var alturaExtremidade = document.createTextNode("Altura da Extremidade ")
        itemName[2].appendChild(alturaExtremidade);
      
      
      //table.appendChild(tableNames);
      //table.appendChild(itemValues);
      //div.appendChild(table);

  
      var nivelValue = document.createTextNode(data[id].Nixedvel);
      itemValue[0].appendChild(nivelValue);
    
      var alturaPeitorilValue = document.createTextNode(data[id].Alturadopeitoril);
      itemValue[1].appendChild(alturaPeitorilValue);
    
      var alturaExtremidadeValue = document.createTextNode(data[id].Alturadaextremidade);
      itemValue[2].appendChild(alturaExtremidadeValue);
}


var erase = document.getElementsByClassName("Eraser");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("window");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var list = document.getElementById("selection");

var option = [];
var itenID = [];

var select = document.createElement("SELECT");
for(var j = 0;j<data.length;j++){
  option[j] = document.createElement("option");
  itenID[j] = document.createTextNode(j);
  option[j].appendChild(itenID[j]);
  select.appendChild(option[j]);
}
list.appendChild(select);



// When the user clicks the button, open the modal 
btn.onclick = function() {

    container.remove();
    container = document.createElement("div");



    //for (var i = 0; i < erase.length; ++i) {
    //    erase[i].remove();
    //  }
    modalHeader.removeChild(modalHeader.lastElementChild);
    windowForm(select.value);
    modal.style.display = "block";
    var wall = document.createElement("h2");
    wall.setAttribute('id', 'headerEraser');
    var walltext = document.createTextNode("Propriedades das Paredes");
    wall.appendChild(walltext);
    modalHeader.appendChild(wall);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    }
    ourRequest.send();


