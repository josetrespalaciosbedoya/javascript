var edad = 17;

console.log(edad);

sumar();

function sumar(){
    let edad=19;
    console.log(edad);
}

let a = "6";

console.log(typeof(a));

function sumar() {
    let f = 4;
    console.log(f);
}

sumar();

var jab=null;
console.log(jab);

let nombre = 'Jab';
const canal = 'HTML6';
let fecha = new Date();
let numero = 4;
let euros = 100;
let mensaje = `
    Me llamo ${nombre} y mi canal es ${canal} 
    y estamos en el año ${fecha.getFullYear()} y 
    después del número ${numero} viene el número ${++numero}
    y el valor de ${euros} equivalen a ${convertir(euros)}.
`;


console.log(mensaje);

function convertir(a) {
    let resultado = a * 22.23;
    return resultado;
}

sumar(1);

function sumar (num){
    let sum = 4;
    let resultado = num + sum;

    console.log(resultado);
}

let numeroS = "6";
let numeroU = 4;

let result = numeroS + numeroU;

console.log(typeof(result));

let valorSumado = 6;

let incremento = ++valorSumado;

console.log(incremento);

let c = 65;
let s = "5";

console.log(c===s);
console.log(c!=s);