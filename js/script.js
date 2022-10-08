
const btnverResultado = document.querySelector("#verResultado");
const container = document.querySelector("#capcha");
const mensaje = document.querySelector("#error");
let correcto = "10";

    btnverResultado.addEventListener("click", e => {
        e.preventDefault();
        const input = document.querySelector("input").value;
        if(input==correcto){
        container.style.visibility = "hidden"; 
        btnverResultado.style.visibility = "hidden";
        }else{
            mensaje.innerText="CALCULO INCORRECTO";
        }
    
    });