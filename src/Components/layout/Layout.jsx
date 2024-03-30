import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Outlet } from "react-router-dom";
import { ContextGlobal } from "../../context/ContextProvider";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;