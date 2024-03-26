import React, { useState } from "react";

function Detailhome() {
    const [busqueda, setBusqueda] = useState("");
    const [resultado, setResultado] = useState(null);

    const handleSearch = async (event) => {
        event.preventDefault();

        // Realizar solicitud a la API con el término de búsqueda
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users/${busqueda}`
            );
                const data = await response.json();
            setResultado(data);
        } catch (error) {
            console.error(
                "Error en la búsqueda. Puede que la información sea incorrecta.",
                error
            );
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    placeholder="Búsqueda por nombre"
                />
                <button type="submit">Buscar</button>
            </form>

            {resultado && (
            <div>
                <h2>Información del objeto:</h2>
                <p>Nombre: {resultado.name}</p>
                <p>Otra propiedad: {resultado.email}</p>
                {/* Agrega más líneas para mostrar otras propiedades del objeto */}
            </div>
            )}
        </div>
    );
}

export default Detailhome;