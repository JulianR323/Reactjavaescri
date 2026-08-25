import ProductoCard from './components/ProductCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const disponibles = productos.filter(producto => producto.stock > 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>

      {}
      <section className="productos">
        {productos.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </section>

      {}
      <section className="seccion-disponibles">
        <h2>Productos Disponibles en Stock</h2>
        <div className="productos">
          {disponibles.map(producto => (
            <ProductoCard
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      </section>

    </main>
  );
}

export default App;