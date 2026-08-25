/* console.log("JavaScript listo para practicar");
function calcularTotal(precio, cantidad) {
    const total = precio * cantidad;
    return total;
}
const resultado = calcularTotal(50000, 3);
console.log(resultado);

function suma(a, b) {
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
console.log(cuadrado(8,2));




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
console.log(NombreCompleto("Juan","Perez"));


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

/*
productos.forEach((producto, indice) => {
 console.log(`${indice + 1}. ${producto.nombre} -stock:${producto.stock}`);
});
*/
/*
const nombres = productos.map(producto => producto.nombre);
console.log(nombres);
/*
const preciosConIva = productos.map(producto => producto.precio * 1.19);
console.log(preciosConIva);

const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
console.log(nombresMayuscula);

const resumenProductos = productos.map(producto => `${producto.nombre} cuesta $${producto.precio}`);
console.log(resumenProductos);
const disponibles = productos.filter(producto => producto.stock > 0);
const producto3 = productos.find(producto => producto.id === 3);

const mayoresA100k = productos.filter(producto => producto.precio > 100000);
console.log(mayoresA100k);

const entre50kY200k = productos.filter(producto => producto.precio >= 50000 && producto.precio <= 200000);
console.log(entre50kY200k);

const tecnologia = productos.filter(producto => producto.categoria === "Perifericos");
console.log(tecnologia);

const producto5 = productos.find(producto => producto.id === 5);
console.log(producto5);

const buscarProducto = (id) => productos.find(producto => producto.id === id);

console.log(buscarProducto(5));/*

const hayAgotados = productos.some(producto => producto.stock === 0);
const preciosValidos = productos.every(producto => producto.precio > 0);
const valorInventario = productos.reduce(
 (total, producto) => total + producto.precio * producto.stock,
 0
);

const hayAgotados = productos.some(producto => producto.stock === 0);
console.log("¿Hay productos agotados?:", hayAgotados);

const hayPrecioMayorA1M = productos.some(producto => producto.precio > 1000000);
console.log("¿Hay alguno mayor a $1M?:", hayPrecioMayorA1M);

const preciosValidos = productos.every(producto => producto.precio > 0);
console.log("¿Todos tienen precio > 0?:", preciosValidos);

const stocksValidos = productos.every(producto => producto.stock >= 0);
console.log("¿Todos tienen stock >= 0?:", stocksValidos);

const valorInventario = productos.reduce(
  (total, producto) => total + (producto.precio * producto.stock),
  0
);
console.log("Valor total del inventario: $", valorInventario);

console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);
const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);

const productoActualizado = {
  ...productos[0],
  stock: 8
};


const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(estado);

const productoEditado = {
  ...productos[0],
  precio: 75000, 
  stock: 0
};
const { nombre, precio, stock } = productoEditado;

const estadoEditado = stock > 0 ? 'Disponible' : 'Agotado';
console.log(`El producto ${nombre} ahora cuesta $${precio} y su estado es: ${estadoEditado}.`);*/



const productos = [
  { id: 1, nombre: 'Mouse Óptico', precio: 50000, categoria: 'Periféricos', stock: 5 },
  { id: 2, nombre: 'Teclado Mecánico', precio: 90000, categoria: 'Periféricos', stock: 0 },
  { id: 3, nombre: 'Monitor 24"', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audífonos Bluetooth', precio: 120000, categoria: 'Audio', stock: 8 },
  { id: 5, nombre: 'Micrófono USB', precio: 180000, categoria: 'Audio', stock: 0 },
  { id: 6, nombre: 'Silla Gamer', precio: 450000, categoria: 'Muebles', stock: 2 },
  { id: 7, nombre: 'Cámara Web HD', precio: 85000, categoria: 'Periféricos', stock: 4 },
  { id: 8, nombre: 'Pad Mouse XL', precio: 35000, categoria: 'Accesorios', stock: 12 },
  { id: 9, nombre: 'Disco SSD 1TB', precio: 280000, categoria: 'Almacenamiento', stock: 0 },
  { id: 10, nombre: 'Soporte Monitor', precio: 95000, categoria: 'Accesorios', stock: 6 }
];

const hayAgotados = productos.some(producto => producto.stock === 0);
console.log('Hay productos agotados?:', hayAgotados);

const valorInventario = productos.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
console.log('Valor total del inventario:', valorInventario);

function buscarProducto(id) {
  return productos.find(producto => producto.id === id);
}

console.log('Producto encontrado (ID 5):', buscarProducto(5));