import React, { useContext } from "react";
import Card from "../common/Card";
import { ContextGlobal } from "../../context/ContextProvider";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = ({}) => {
  const { state, dentists } = useContext(ContextGlobal);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((fav) => {
          return <Card key={fav.id} dentista={fav} />;
        })}
      </div>
    </>
  );
};

export default Favs;