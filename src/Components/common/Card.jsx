import React from "react";
import { Link } from "react-router-dom";

const Card = ({ dentista }) => {
  const addFav = (event) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    event.preventDefault();
  };

  return (
    <Link to={`/detail/${dentista.id}`}>
      <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <img
          src="src/images/doctor.jpg"
          style={{ width: "100%", loading: "lazy" }}
        />
        <h4>{dentista.name}</h4>
        <h5>{dentista.username}</h5>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      </div>
    </Link>
  );
};

export default Card;