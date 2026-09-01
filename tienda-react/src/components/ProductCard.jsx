function ProductCard({ producto, onEliminar, modificarStock, onEditar}) {
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
      <div>
        <button onClick={() => modificarStock(id, -1)}>-</button>
        <span> Stock: {stock} </span>
        <button onClick={() => modificarStock(id, 1)}>+</button>
      </div>
      <strong>{estado}</strong>
      <br />
      <button onClick={mostrarProducto} disabled={stock === 0}>
        {stock > 0 ? "Ver producto" : "Agotado"}
      </button>
      <button onClick={() => onEliminar(id)}>
        Eliminar
      </button>
      <button onClick={() => onEditar(producto)}>
        Editar
      </button>
    </article>
  );
}

export default ProductCard;
