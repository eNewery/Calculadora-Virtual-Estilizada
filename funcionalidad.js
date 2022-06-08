/*VARIABLES */
var OperandoA 
var OperandoB 
var Operacion
/* SELECCIONANDO ARCHIVOS HTML PARA CONVERTILOS EN VARIABLES */
var display = document.getElementById("display")
var resultado = document.getElementById("resultado");
var nueve = document.getElementById("nueve")
var ocho = document.getElementById("ocho")
var siete = document.getElementById("siete")
var multiplicar = document.getElementById("multiplicar")
var seis = document.getElementById("seis")
var cinco = document.getElementById("cinco")
var cuatro = document.getElementById("cuatro")
var restar = document.getElementById("restar")
var tres = document.getElementById("tres")
var dos = document.getElementById("dos")
var uno = document.getElementById("uno")
var sumar = document.getElementById("sumar")
var dividir = document.getElementById("dividir")
var borrar = document.getElementById("borrar")
var igual = document.getElementById("igual")
var cero = document.getElementById("cero")
 
/* EVENTOS */
uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1"
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2"
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3"
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4"
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5"
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6"
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7"
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8"
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9"
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0"
}
borrar.onclick = function(e){
 limpiar();
}

/* OPERACIONES */
sumar.onclick = function(e){
    display.textContent = "¡Estas sumando!";
    OperandoA  = resultado.textContent;
 Operacion = "+";
 limpiar();
}

restar.onclick = function(e){
    display.textContent = "¡Estas restando!";
    OperandoA  = resultado.textContent;
    Operacion = "-";
    limpiar();
   }

   multiplicar.onclick = function(e){
    display.textContent = "¡Estas multiplicando!";
    OperandoA  = resultado.textContent;
    Operacion = "*";
    limpiar();
   }

   dividir.onclick = function(e){
    display.textContent = "¡Estas dividiendo!";
    OperandoA  = resultado.textContent;
    Operacion = "/";
    limpiar();
   }
   igual.onclick = function(e){
    display.textContent = "¡Resultado!";
    OperandoB = resultado.textContent;
    resolver();
   }
/* FUNCIONES */
function init() {
    alert("Estas en la Calculadora Virtual!");
}
init()

function resetear(){

resultado.textContent = "";
OperadorA = 0;
OperadorB = 0;
Operacion = "";

}



function limpiar(){

resultado.textContent = "";
}

function resolver(){
var res = 0;
switch(Operacion){
    case "+":
        res=parseFloat(OperandoA) + parseFloat(OperandoB);
        break;
        

        case "-":
            res=parseFloat(OperandoA) - parseFloat(OperandoB);
            break;

            
            case "*":
                res=parseFloat(OperandoA) * parseFloat(OperandoB);
                break;

                
                case "/":
                    res=parseFloat(OperandoA) / parseFloat(OperandoB);
                    break;
            
}
resetear()
resultado.textContent = res;
}
