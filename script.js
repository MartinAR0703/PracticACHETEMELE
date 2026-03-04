// Seleccionamos el boton pos su ID
const button = document.getElementById("colorButton"); 

//Creacion de un arreglo con algunos colores claros y agradables
const colors =["#0f2027","#203a43","#2c5364","#667eea","#764ba2"];

//Variable de control del color
let index =0;

//Agregamos un evento "click"
button.addEventListener("click",function(){

    const color1= colors[index];
    const color2= colors[(index+1) % colors.length];

    document.body.style.background =
        `linear-gradient(45deg, ${color1}, ${color2})`;

    index = (index + 1) % colors.length;
});