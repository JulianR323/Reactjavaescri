/* console.log("JavaScript listo para practicar");*/
/*function calcularTotal(precio, cantidad) {
    const total = precio * cantidad;
    return total;
}
const resultado = calcularTotal(50000, 3);
console.log(resultado);*/

/*function suma(a, b) {
    const suma = a + b;
    return suma
}
function resta(a, b){
    const resta = a - b;
    return resta
}
function multi(a, b){
    const multi = a * b;
    return multi
}
function div(a, b){
    const div = a / b;
    return div
}
function calcularPromedio(nota1,nota2,nota3){
    const promedio = nota1 + nota2 + nota3;
    const calculo = promedio / 3
    return calculo
}
console.log("Suma:", suma(2,3));
console.log("Resta:", resta(8,3));
console.log("Multi:", multi(9,9));
console.log("Division:", div(4,2));
console.log("Promedio:", calcularPromedio(4.0,3.5,5.0));*/

/*Console log muestra el mensaje en la consola mientras que return devuelve un valor para que el resto del
codigo pueda usarlo */

/*

Sin funcion flecha
function aplicarIva(precio) {
return precio * 1.19;
}

Funcion flecha
const aplicarIva = (precio) => {
return precio * 1.19;
};

Acortada con funcion tipo flech
const aplicarIva = precio => precio * 1.19;




const cuadrado = (a,b) =>{
    const resultado = a ** b;
    return resultado
};  
console.log(cuadrado(8,2));*/



/*
const esMayorEdad = (a) =>{
    if (a >= 18){
        return("Mayor de edad");
    }else{
        return("Menor de edad");
    }
}
console.log("Usted es:", esMayorEdad(16));

const NombreCompleto = (a,b) =>{
    const NombreCompleto = a + " " + b
    return NombreCompleto
}
console.log(NombreCompleto("Juan","Perez"));*/


const productos = [
 { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
 { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
 { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audifonos', precio: 15000, categoria: 'Perifericos', stock: 3 },
   { id: 5, nombre: 'USB de Almacenamiento', precio: 25000, categoria: 'Almacenamiento', stock: 6 },
    { id: 6, nombre: 'Mousepad', precio: 30000, categoria: 'Perifericos', stock: 7 },
    { id: 7, nombre: 'Mesa', precio: 350000, categoria: 'Muebles', stock: 3 },
    { id: 8, nombre: 'Silla', precio: 10000, categoria: 'Muebles', stock: 0 },
    { id: 9, nombre: 'Ventilador', precio: 20000, categoria: 'Electrodomesticos', stock: 5 },
    { id: 10, nombre: 'Camara', precio: 120000, categoria: 'Perifericos', stock: 1 },
];
console.log(productos);