const imagen = document.getElementById("unionEspañola");

imagen.addEventListener("click", () => {
    if (imagen.style.border === ""){
        imagen.style.border = "2px solid red"
    } else {
        imagen.style.border = "";
    }
});

const boton = document.getElementById("botonenviar")
const inputs = document.querySelectorAll(".dato")
const resultado = document.getElementById("resultado")

botonenviar.addEventListener("click", () =>{
    let suma = 0;
    inputs.forEach(input =>{
        suma += Number(input.value);
    });
    if (suma > 10){
        resultado.textContent = "La suma es " + suma + " te exediste de 10";
        resultado.style.color = "red";
    } else {
        resultado.textContent = "La suma es " + suma + " estas bien";
        resultado.style.color = "green"
    }
}
)