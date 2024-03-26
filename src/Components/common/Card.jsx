import React from "react";
import { link } from "react-router-dom"

const Card = ({ dentista }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <link to="/detalle"/>
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <img src="\public\images\doctor.jpg" style={{ width: "100%", loading: "lazy" }}/>
      <h1>{dentista.name}</h1>
      <h2>{dentista.username}</h2>
      <h3>{dentista.id}</h3>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
