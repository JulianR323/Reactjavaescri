import { useNavigate } from "react-router";
import FormularioProducto from "../components/FormularioProducto";

function NuevoProducto({
  agregarProducto,
  actualizarProducto,
  productoEditando,
  setProductoEditando,
}) {

  const navigate = useNavigate();
  const handleAgregar = (producto) => {
    agregarProducto(producto);
    navigate("/inventario");
  };
  const handleActualizar = (producto) => {
    actualizarProducto(producto);
    navigate("/inventario");
  };
  return (
    <main className="contenedor">
      <h1>Nuevo producto</h1>

      <FormularioProducto
        onAgregar={handleAgregar}
        onActualizar={handleActualizar}
        productoEditando={productoEditando}
        setProductoEditando={setProductoEditando}
      />
    </main>
  );
}

export default NuevoProducto;