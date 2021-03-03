//seleciona o formulario
var Form = document.querySelector(".formulario");
var Camp = document.querySelectorAll(".formulario__campos");
//manipula o botão
var BtAdd = document.querySelector(".formulario__submit");
BtAdd.addEventListener("click", function (event){
    event.preventDefault();
    var NomeN = Form.cNomeN.value;
    var NomeS = Form.cNomeS.value;
    var NomeE = Form.cNomeE.value;
    var NomeT = Form.cNomeT.value;
    console.log(NomeN);
    console.log(NomeS);
    console.log(NomeE);
    console.log(NomeT);
});
//alteradores do CSS
function manterN() {

    var Capture = Form.querySelector("#nNome");
    Capture.classList.add("mantem");


}
function manterS() {
    var Capture = Form.querySelector("#sNome");
    Capture.classList.add("mantem");
}
function manterE() {
    var Capture = Form.querySelector("#eNome");
    Capture.classList.add("mantem");
}

function manterT() {
    var Capture = Form.querySelector("#tNome");
    Capture.classList.add("mantem");
}
