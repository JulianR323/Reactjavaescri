import { useState } from "react";
<form onSubmit={manejarEnvio}></form>
function FormularioProducto({ onAgregar }) {const manejarEnvio = (evento) => {evento.preventDefault();
if (
formulario.nombre.trim() === "" ||
formulario.categoria.trim() === "" ||
Number(formulario.precio) <= 0 ||
Number(formulario.stock) < 0
) {
alert("Revisa los datos del producto");
return;
}
const nuevoProducto = {id: Date.now(),
nombre: formulario.nombre,
categoria: formulario.categoria,
precio: Number(formulario.precio),
stock: Number(formulario.stock)
};
onAgregar(nuevoProducto);}};
function FormularioProducto() {
const [formulario, setFormulario] = useState({
nombre: "",
categoria: "",
precio: "",
stock: ""
});

return (
<form>
<h2>Agregar producto</h2>
<input
type="text"
name="nombre"
placeholder="Nombre"
/>
<input
type="text"
name="categoria"
placeholder="Categoría"
/>
<input
type="number"
name="precio"
placeholder="Precio"
/>
<input
type="number"
name="stock"
placeholder="Stock"
/>
<button type="submit">
Agregar producto
</button>
</form>
);
}
export default FormularioProducto;
