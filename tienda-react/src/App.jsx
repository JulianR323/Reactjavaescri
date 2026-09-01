import { useState, useEffect } from "react"; 
import ProductoCard from "./components/ProductCard";
import "./App.css";
>>>>>>> f88ae42c8a3387563272c30ae58c8d6f429f983c
import { productos as productosIniciales } from "./data/productos";
import FormularioProducto from "./components/FormularioProducto";
import "./App.css";
const obtenerProductosIniciales = () => {
  const guardados = localStorage.getItem("inventario");
function App() {
  const obtenerProductosIniciales = () => {

  const guardados =
    localStorage.getItem("inventario");

  if (guardados) {
    return JSON.parse(guardados);
  }
  return productosIniciales;
};

function App() {
  const [productos, setProductos] = useState(obtenerProductosIniciales);
  const [productoEditando, setProductoEditando] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  

  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState("Todos");
  const [orden, setOrden] = useState("nombre");
  useEffect(() => {
    localStorage.setItem("inventario", JSON.stringify(productos));
  }, [productos]);

 
  const eliminarProducto = (id) => {
    const confirmacion = window.confirm("¿Estás segura de eliminar este producto?");
    if (confirmacion) {
      const nuevaLista = productos.filter((producto) => producto.id !== id);
      setProductos(nuevaLista);
      setMensaje("Producto eliminado correctamente.");
    }
  };

  
  const actualizarProducto = (productoActualizado) => {
    const nuevaLista = productos.map((prod) =>
      prod.id === productoActualizado.id ? productoActualizado : prod
    );
    setProductos(nuevaLista);
    setProductoEditando(null); 
    setMensaje("Producto actualizado correctamente.");
  };

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
    setMensaje("Producto agregado correctamente.");
  };

  const modificarStock = (id, cambio) => { 
    const nuevosProductos = productos.map(producto => { 
      if (producto.id === id) { 
        return { 
          ...producto, 
          stock: Math.max(0, producto.stock + cambio) 
        }; 
      } 
      return producto; 
    }); 
    setProductos(nuevosProductos); 
  };

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
    setMensaje("Filtros restablecidos.");
  };

const productosFiltrados = productos.filter((producto) => {
  const coincideNombre = producto.nombre
    .toLowerCase()
    .includes(busqueda.toLowerCase());

  const coincideCategoria =
    categoria === "Todas" || producto.categoria === categoria;

  const coincideEstado =
    estado === "Todos" ||
    (estado === "Disponibles" && producto.stock > 0) ||
    (estado === "Agotados" && producto.stock === 0);

  return coincideNombre && coincideCategoria && coincideEstado;
});
const productosOrdenados = [...productosFiltrados].sort((a, b) => {
  if (orden === "nombre") {
    return a.nombre.localeCompare(b.nombre);
  }

  if (orden === "precioMenor") {
    return a.precio - b.precio;
  }

  if (orden === "precioMayor") {
    return b.precio - a.precio;
  }

  if (orden === "stockMenor") {
    return a.stock - b.stock;
  }

  if (orden === "stockMayor") {
    return b.stock - a.stock;
  }

  return 0;
});


  const totalRegistrados = productos.length;
  const productosAgotados = productos.filter((producto) => producto.stock === 0).length;
  const valorInventario = productos.reduce( 
    (total, producto) => total + (producto.precio * producto.stock), 
    0 
  );

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>

      {}
      {mensaje && (
        <p style={{ color: "#2e7d32", backgroundColor: "#e8f5e9", padding: "10px", borderRadius: "5px", fontWeight: "bold" }}>
          {mensaje}
        </p>
      )}

      {}
      <FormularioProducto
        onAgregar={agregarProducto}
        onActualizar={actualizarProducto}
        productoEditando={productoEditando}
        setProductoEditando={setProductoEditando}
      />
);
const limpiarFiltros = () => {
  setBusqueda("");
  setCategoria("Todas");
  setEstado("Todos");
  setOrden("nombre");
};
  const agregarProducto = (nuevoProducto) => {
setProductos([
...productos,
nuevoProducto
]);
};
const modificarStock = (id, cambio) => { 
    const nuevosProductos = productos.map(producto => { 
      if (producto.id === id) { 
        return { 
          ...producto, 
          stock: Math.max(0, producto.stock + cambio) 
        }; 
      } 
      return producto; 
    }); 
    setProductos(nuevosProductos); 
  };
  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(evento) => setBusqueda(evento.target.value)}
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

<select
  value={estado}
  onChange={(evento) => setEstado(evento.target.value)}
>
  <option value="Todos">Todos</option>
  <option value="Disponibles">Disponibles</option>
  <option value="Agotados">Agotados</option>
</select>
<select
  value={orden}
  onChange={(evento) => setOrden(evento.target.value)}
>
  <option value="nombre">Nombre A-Z</option>
  <option value="precioMenor">Precio menor a mayor</option>
  <option value="precioMayor">Precio mayor a menor</option>
  <option value="stockMenor">Stock menor a mayor</option>
  <option value="stockMayor">Stock mayor a menor</option>
</select>

        <button onClick={limpiarFiltros}>Limpiar filtros</button>
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


      <p>Productos encontrados: {productosFiltrados.length}</p>

      <div className="tarjeta-indicador">
        <h4>Productos agotados</h4>
        <p>{productosAgotados}</p>
      </div>

      <div className="tarjeta-indicador">
        <h4>Valor del inventario</h4>
        <p>${valorInventario.toLocaleString("es-CO")}</p>
      </div>
    </div>
      <p>Productos encontrados: {productosFiltrados.length}</p>
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
              onEditar={(prod) => setProductoEditando(prod)} 
            />
          ))}
        </section>
  {productosOrdenados.map((producto) => (
    <ProductoCard 
      key={producto.id} 
      producto={producto} 
      onEliminar={eliminarProducto}
      modificarStock={modificarStock}
    />
  ))}
</section>
      )}
    </main>
  );
}

export default App;

// Usamos filter() porque devuelve un nuevo arreglo excluyendo el elemento a eliminar, mientras que find() solo devuelve el primer elemento que coincide.