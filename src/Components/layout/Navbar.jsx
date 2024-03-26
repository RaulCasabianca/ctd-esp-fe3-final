import React from "react";
import { Link, Outlet } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <>
      <nav>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <ul>
          <Link to="/">Home</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/detailhome">Detalle</Link>
          <Link to="/favs">Destacados</Link>
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

          <button>Change theme</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;