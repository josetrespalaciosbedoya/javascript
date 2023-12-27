function hello(name, number) {
    return `Hola ${name}, en número es ${number}`;
}

function start(){
    let res=hello("Jose", 14);
    alert(res);
}

function togo(){
    document.getElementById("boton").onclick = start;
}

window.onload = togo;