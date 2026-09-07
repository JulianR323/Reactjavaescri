
import { useState } from "react";
import { useNavigate } from "react-router";
import ProductoCard from "../components/ProductCard";

function Inventario({
  productos,
  eliminarProducto,
  modificarStock,
  setProductoEditando,
  mensaje,
}) {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);

  const navigate = useNavigate();

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };

  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" ||
      producto.categoria === categoria;

    const coincideStock =
      !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  const totalRegistrados = productos.length;

  const productosAgotados = productos.filter(
    (producto) => producto.stock === 0
  ).length;

  const valorInventario = productos.reduce(
    (total, producto) =>
      total + producto.precio * producto.stock,
    0
  );

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>

      {mensaje && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          {mensaje}
        </p>
      )}

      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(evento) =>
            setBusqueda(evento.target.value)
          }
        />

        <select
          value={categoria}
          onChange={(evento) =>
            setCategoria(evento.target.value)
          }
        >
          <option value="Todas">Todas</option>
          <option value="Periféricos">Periféricos</option>
          <option value="Pantallas">Pantallas</option>
          <option value="Audio">Audio</option>
          <option value="Muebles">Muebles</option>
          <option value="Accesorios">Accesorios</option>
          <option value="Almacenamiento">Almacenamiento</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={soloDisponibles}
            onChange={(evento) =>
              setSoloDisponibles(evento.target.checked)
            }
          />
          Mostrar únicamente disponibles
        </label>

        <button onClick={limpiarFiltros}>
          Limpiar filtros
        </button>
      </div>

      <div className="tablero">
        <div className="tarjeta-indicador">
          <h4>Productos registrados</h4>
          <p>{totalRegistrados}</p>
        </div>

        <div className="tarjeta-indicador">
          <h4>Productos agotados</h4>
          <p>{productosAgotados}</p>
        </div>

        <div className="tarjeta-indicador">
          <h4>Valor del inventario</h4>
          <p>${valorInventario.toLocaleString("es-CO")}</p>
        </div>
      </div>

      <p>
        Productos encontrados: {productosFiltrados.length}
      </p>

      <p>
        Productos agotados en tienda: {productosAgotados}
      </p>

      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <section className="productos">
          {productosFiltrados.map((producto) => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              onEliminar={eliminarProducto}
              modificarStock={modificarStock}
              onEditar={(prod) => {
                setProductoEditando(prod);
                navigate("/nuevo");
              }}
            />
          ))}
        </section>
      )}
    </main>
  );
}

export default Inventario;

