window.onload = iniciar;

function iniciar(){
    var btnGuardar = document.getElementById("btnGuardar");
    btnGuardar.addEventListener("click", clickBtnGuardar);
}

function clickBtnGuardar() {
    alert("Solicitud de cambio realizada")
}