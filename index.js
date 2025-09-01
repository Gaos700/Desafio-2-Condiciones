const imagen = document.getElementById("unionEspañola");

imagen.addEventListener("click", () => {
    if (imagen.style.border === ""){
        imagen.style.border = "2px solid red"
    } else {
        imagen.style.border = "";
    }
});