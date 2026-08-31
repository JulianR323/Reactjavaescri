function ProductCard({ producto, onEliminar }) {
  const { id, nombre, precio, categoria, stock } = producto;
  const estado = stock > 0 ? "Disponible" : "Agotado";
  const formatearPrecio = (valor) => valor.toLocaleString("es-CO");

  const mostrarProducto = () => {
    alert(`Seleccionaste ${nombre}`);
  };

  return (
    <article className="producto-card">
      <h2>{nombre}</h2>
      <p>Categoría: {categoria}</p>
      <p>Precio: ${formatearPrecio(precio)}</p>
      <p>Stock: {stock}</p>
      <strong>{estado}</strong>
      <br />
      <button onClick={mostrarProducto} disabled={stock === 0}>
        {stock > 0 ? "Ver producto" : "Agotado"}
      </button>
      <button onClick={() => onEliminar(id)}>
        Eliminar
      </button>
    </article>
  );
}

export default ProductCard;
