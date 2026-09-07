import { NavLink } from "react-router";

function Inicio({ productos = [] }) {
  // Protección por si productos llega indefinido por un instante
  const listaProductos = Array.isArray(productos) ? productos : [];

  // Cálculos dinámicos seguros
  const totalProductos = listaProductos.length;
  
  const totalUnidades = listaProductos.reduce(
    (acc, producto) => acc + Number(producto.stock || 0), 
    0
  );

  const stockBajo = listaProductos.filter(
    (producto) => producto.stock <= 2 && producto.stock > 0
  ).length;

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", backgroundColor: "#f8f9fa", minHeight: "80vh" }}>
      {/* Tarjeta principal de bienvenida */}
      <div style={{ backgroundColor: "#9198e9", padding: "40px", borderRadius: "12px", marginBottom: "30px" }}>
        <p style={{ textTransform: "uppercase", fontSize: "12px", fontWeight: "bold", color: "#161da4", letterSpacing: "1px" }}>
          Tu espacio de trabajo
        </p>
        <h1 style={{ fontSize: "42px", color: "#0f054b", margin: "10px 0 20px 0" }}>
          Tu inventario, en orden.
        </h1>
        <p style={{ color: "#081258", fontSize: "16px", marginBottom: "30px" }}>
          Consulta productos, actualiza existencias y encuentra cada detalle en un solo lugar.
        </p>
        
        <div>
          <NavLink to="/inventario">
            <button style={{ backgroundColor: "#13319e", color: "white", border: "none", padding: "12px 24px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer", marginRight: "15px" }}>
              Explorar inventario &rarr;
            </button>
          </NavLink>

          <NavLink to="/nuevo">
            <button style={{ backgroundColor: "transparent", color: "#1f0d3e", border: "1px solid #161358", padding: "12px 24px", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>
              + Nuevo producto
            </button>
          </NavLink>
        </div>
      </div>

      {/* Tarjetas de estadísticas */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ backgroundColor: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "36px", margin: "0 0 5px 0", color: "#1a2e26" }}>{totalProductos}</h2>
          <p style={{ color: "#666", margin: "0" }}>Productos registrados</p>
        </div>

        <div style={{ backgroundColor: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "36px", margin: "0 0 5px 0", color: "#1a2e26" }}>{totalUnidades}</h2>
          <p style={{ color: "#666", margin: "0" }}>Unidades disponibles</p>
        </div>

        <div style={{ backgroundColor: "white", padding: "25px", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "36px", margin: "0 0 5px 0", color: "#1a2e26" }}>{stockBajo}</h2>
          <p style={{ color: "#666", margin: "0" }}>Productos con stock bajo</p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;