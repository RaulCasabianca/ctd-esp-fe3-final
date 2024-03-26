import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/Contact";
import Detail from "./Components/pages/Detail";
import Favs from "./Components/pages/Favs";
import Layout from "./Components/layout/Layout";
import DetailHome from "/src/Components/pages/Detailhome.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;