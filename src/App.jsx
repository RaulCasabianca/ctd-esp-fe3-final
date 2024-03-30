//rutas
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/Contact";
import Detail from "./Components/pages/Detail";
import Favs from "./Components/pages/Favs";
import Layout from "./Components/layout/Layout";
import DetailHome from "/src/Components/pages/Detailhome.jsx";
import { ContextGlobal } from "./context/ContextProvider";
import React, { useContext } from "react";

//componente
function App() {
  const { dark } = useContext(ContextGlobal);

  //jsx
  return (
    <div className={dark ? "dark" : "light"}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/detailhome" element={<DetailHome />} />
          <Route path="/favs" element={<Favs />} />
        </Route>
        <Route path="/*" element={<div>La pagina no existe</div>} />
      </Routes>
    </div>
  );
};

export default App;