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
});

function verificarPassWord(){
    const d1 = document.getElementById("digito1").value;
    const d2 = document.getElementById("digito2").value;
    const d3 = document.getElementById("digito3").value;
    const password = d1 + d2 +d3;
    const resultado= document.getElementById("resultado3");
    if (password === "911"){
        resultado.textContent = "password 1 correcta";
    } else if (password === "714"){
        resultado.textContent = "password 2 correcta";
    } else {
        resultado.textContent = "password incorrecta";
    }
}