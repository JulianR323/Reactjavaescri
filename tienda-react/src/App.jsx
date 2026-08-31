import { useState } from "react";
import ProductoCard from "./components/ProductCard";
import { productos } from "./data/productos";
import "./App.css";
import { productos as productosIniciales } from "./data/productos";
import FormularioProducto from "./components/FormularioProducto";

function App() {
  const [productos, setProductos] = useState(productosIniciales);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);
const eliminarProducto = (id) => {
    const nuevaLista = productos.filter((producto) => producto.id !== id);
    setProductos(nuevaLista);
  };

  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;
    const coincideStock = !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  const productosAgotados = productos.reduce(
    (total, producto) => (producto.stock === 0 ? total + 1 : total),
    0
  );

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };
  const agregarProducto = (nuevoProducto) => {
setProductos([
...productos,
nuevoProducto
]);
};

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>

      {}
      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(evento) => setBusqueda(evento.target.value)}
        />
<FormularioProducto
onAgregar={agregarProducto}
/>
        <select
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
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
            onChange={(evento) => setSoloDisponibles(evento.target.checked)}
          />
          Mostrar únicamente disponibles
        </label>

        <button onClick={limpiarFiltros}>Limpiar filtros</button>
      </div>

      {}
      <p>Productos encontrados: {productosFiltrados.length}</p>
      <p>Productos agotados en tienda: {productosAgotados}</p>

      {}
      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <section className="productos">
  {productosFiltrados.map((producto) => (
    <ProductoCard 
      key={producto.id} 
      producto={producto} 
      onEliminar={eliminarProducto}
    />
  ))}
</section>
      )}
    </main>
  );
}

export default App;

// Usamos filter() porque devuelve un nuevo arreglo excluyendo el elemento a eliminar, mientras que find() solo devuelve el primer elemento que coincide.