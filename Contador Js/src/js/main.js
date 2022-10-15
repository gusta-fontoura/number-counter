//var x = document.getElementById("add").addEventListener("click", BtnAdd)
let contador = 0
const reset = 0


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
    contador = 0
    document.getElementById("num").innerHTML = contador
    console.log(contador)
};