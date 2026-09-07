import { useParams } from "react-router";

function DetalleProducto({ productos }) {
  const { id } = useParams();

  // Buscamos el producto convirtiendo el id a String para asegurar que coincida con la URL
  const producto = productos.find(
    (item) => String(item.id) === id
  );

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <section>
      <h1>{producto.nombre}</h1>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <p>Categoría: {producto.categoria}</p>
    </section>
  );
}

export default DetalleProducto;