//var x = document.getElementById("add").addEventListener("click", BtnAdd)
var contador = 0


function BtnAdd () {
    contador++
    document.getElementById("num").innerHTML = contador
    console.log(contador)
};

function BtnSub () {
    contador--
    document.getElementById("num").innerHTML = contador
    console.log(contador)
};

function BtnReset () {
    document.getElementById("num").innerHTML = 0
    console.log(contador)
};