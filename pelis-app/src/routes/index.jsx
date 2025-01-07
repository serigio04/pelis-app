import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/homepage";

const AppRoutes = () => (
    <Routes>
        {/* <Route excat path="/peliculas"/> */}
        <Route path="/" element={<HomePage />}/>
    </Routes>
);

export default AppRoutes