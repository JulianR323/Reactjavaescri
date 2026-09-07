import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import Inicio from "./pages/Inicio";
import Inventario from "./pages/Inventario";
import NuevoProducto from "./pages/NuevoProducto";
import Acerca from "./pages/Acerca"; 
import NoEncontrado from "./pages/NoEncontrado";
import Navbar from "./components/Navbar";
import { productos as productosIniciales } from "./data/productos";
import "./App.css";


const obtenerProductosIniciales = () => {
  const guardados = localStorage.getItem("inventario");
  if (guardados) {
    return JSON.parse(guardados);
  }
  return productosIniciales;
};

function App() {
  const [productos, setProductos] = useState(obtenerProductosIniciales);
  const [productoEditando, setProductoEditando] = useState(null);

  useEffect(() => {
    localStorage.setItem("inventario", JSON.stringify(productos));
  }, [productos]);

  const eliminarProducto = (id) => {
    const confirmacion = window.confirm("¿Estás segura de eliminar este producto?");
    if (confirmacion) {
      const nuevaLista = productos.filter((producto) => producto.id !== id);
      setProductos(nuevaLista);
    }
  };

  const actualizarProducto = (productoActualizado) => {
    const nuevaLista = productos.map((prod) =>
      prod.id === productoActualizado.id ? productoActualizado : prod
    );
    setProductos(nuevaLista);
    setProductoEditando(null);
  };

  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  const modificarStock = (id, cambio) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return {
          ...producto,
          stock: Math.max(0, producto.stock + cambio),
        };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>

      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/inventario"
          element={
            <Inventario
              productos={productos}
              eliminarProducto={eliminarProducto}
              modificarStock={modificarStock}
              setProductoEditando={setProductoEditando}
            />
          }
        />
        <Route
          path="/nuevo"
          element={
            <NuevoProducto
              agregarProducto={agregarProducto}
              actualizarProducto={actualizarProducto}
              productoEditando={productoEditando}
              setProductoEditando={setProductoEditando}
            />
          }
        />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </main>
  );
}

export default App;