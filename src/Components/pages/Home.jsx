import React, { useContext, useEffect, useState } from "react";
import Card from "../common/Card";
import { ContextGlobal } from "../../context/ContextProvider";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const { dentists } = useContext(ContextGlobal);

  return (
    <main>
      {/* Aqui deberias renderizar las cards */}
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.dentistas.map((dentista) => {
          return <Card key={dentista.id} dentista={dentista} />;
        })}
      </div>
    </main>
  );
};

export default Home;