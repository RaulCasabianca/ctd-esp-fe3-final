import { createContext, useReducer, useState, useEffect } from "react";
import axios from "axios";
import reducer from "../reducer/reducer";

export const initialState = {
    dentists: {},
    favs: JSON.parse(localStorage.getItem("favs")) || [],
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [dentistas, setDentistas] = useState([]);
    const [dark, setDark] = useState(false);

    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
    const pedirApi = async () => {
        const resultado = await axios(url);
        setDentistas(resultado.data);
    };
    pedirApi();
    }, []);

    useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
    }, [state.favs]);

    useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
    }, [dark]);

    const dentists = {
    dentistas,
    setDentistas,
    };

    return (
    <ContextGlobal.Provider
        value={{ dentists, dark, setDark, dispatch, state }}
    >
        {children}
    </ContextGlobal.Provider>
    );
};