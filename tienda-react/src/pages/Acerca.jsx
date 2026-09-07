import React from "react";

function Acerca() {
  return (
    <div style={{
      padding: "40px 20px",
      maxWidth: "800px",
      margin: "0 auto",
      fontFamily: "sans-serif",
      color: "#1e3a8a"
    }}>
      <div style={{
        backgroundColor: "#eff6ff",
        border: "2px solid #bfdbfe",
        borderRadius: "12px",
        padding: "30px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)"
      }}>
        <h1 style={{ color: "#1e40af", marginBottom: "15px", fontSize: "28px" }}>
          Acerca de la Aplicación
        </h1>
        <p style={{ color: "#1e3b8a", fontSize: "16px", lineHeight: "1.6", marginBottom: "15px" }}>
          Esta aplicación de gestión de inventario ha sido diseñada para optimizar el control de productos, stock y administración general con una interfaz moderna y eficiente.
        </p>
        <p style={{ color: "#3b82f6", fontSize: "14px", fontWeight: "bold" }}>
          Versión 1.0 - Tema Azul Personalizado
        </p>
      </div>
    </div>
  );
}

export default Acerca;