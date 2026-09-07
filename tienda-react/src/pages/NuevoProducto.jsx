
import FormularioProducto from "../components/FormularioProducto";

function NuevoProducto({
  agregarProducto,
  actualizarProducto,
  productoEditando,
  setProductoEditando,
}) {
  return (
    <main className="contenedor">
      <h1>Nuevo producto</h1>

      <FormularioProducto
        onAgregar={agregarProducto}
        onActualizar={actualizarProducto}
        productoEditando={productoEditando}
        setProductoEditando={setProductoEditando}
      />
    </main>
  );
}

export default NuevoProducto;
