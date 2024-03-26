import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [mostrarError, setMostrarError] = useState("false");
  const [mensaje, setMensaje] = useState("");
  const [mostrarMensaje, setMostrarMensaje] = useState("false");

  function handleSubmit(event) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    event.preventDefoult();
    if(name.length() < 5 || emailRegex.test(email)) {
      setError("Por favor verifique su información nuevamente");
      setMostrarError(true);
    } else {
      console.log("Formulario enviado correctamente");
      setMensaje(`Gracias ${name}, te contactaremos cuando antes vía email`);
      setMostrarMensaje(true);
    }
  }

  function handleInput(event) {
    if (event.target.id === "nombre") {
      setName(event.target.value);
    }
    if (event.target.id === "email") {
      setEmail(event.target.value);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} id="nombre" />
        <input type="email" onChange={handleInput} id="email" />
        <button>Enviar</button>
      </form>
      {mostrarError ? error : null}
      {mostrarMensaje ? mensaje : true}
    </div>
  );
};

export default Form;
