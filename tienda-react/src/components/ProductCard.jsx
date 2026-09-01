function ProductCard({ producto, onEliminar, modificarStock, onEditar }) {
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

      {/* Misión 7: Indicador de poco stock */}
      {stock <= 2 && stock > 0 && (
        <p style={{ color: "red", fontWeight: "bold", margin: "5px 0" }}>
          ¡Poco stock! ({stock} unidades)
        </p>
      )}

      <strong>{estado}</strong>
      <br />
      
      <button onClick={mostrarProducto} disabled={stock === 0}>
        {stock > 0 ? "Ver producto" : "Agotado"}
      </button>

      <button onClick={() => onEliminar(id)}>
        Eliminar
      </button>

      {/* Misión 4: Botón Editar */}
      <button onClick={() => onEditar(producto)}>
        Editar
      </button>
    </article>
  );
}

export default ProductCard;