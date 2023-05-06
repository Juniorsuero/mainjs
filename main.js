
// var numero1 = prompt("introduce un numero");
// var numero2 = prompt("introduce otro numero");

// var resultado = parseInt(numero1) + parseInt(numero2);
// alert("el resultado es : " + resultado);

// let numero1 = 5;
// let numero2 = 10;

// let resultado = numero1 + numero2;
// console.log("resultados:", resultado); 

const form = document.querySelector("form");
const input = document.getElementById("btn");



input.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(form.elements[0].value);
    console.log(form.elements[1].value);

    const nombre = form.elements[0].value;
    const contrasena = form.elements[1].value;

    if(nombre === "admin" && contrasena === "1234"){
      return window.open("https://www.youtube.com/watch?v=mq-CDUwHe8Y");
    }else{
        return alert("datos incorrectos");
    }
});

// console.log({form,input});
