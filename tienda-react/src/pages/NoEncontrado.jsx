import { NavLink } from "react-router";

function NoEncontrado() {
  return (
    <section className="contenedor">
      <h1>404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      
      {}
      <NavLink to="/">Volver a Inicio</NavLink>
    </section>
  );
}

export default NoEncontrado;