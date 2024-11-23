import React from "react";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => (
    <Routes>
        <Route excat path="/peliculas" render={ () => <p>Pagina de peliculas</p>}/>
        <Route excat path="/" render={ () => <p>Pagina principal</p>}/>
    </Routes>
);

export default AppRoutes