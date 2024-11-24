import React from "react";
import { Link } from "react-router-dom";
import './index.scss';

const Header = () => {
    return (
        <>
            <header className="header">
                <ul>
                    <li>
                        <Link to='/' >Inicio</Link>
                    </li>
                    <li>
                        <Link to='/peliculas'>Películas</Link>
                    </li>
                    <li><Link to='/peliculas/añadir'>Añadir película</Link></li>
                </ul>
                <div className="header-search">
                    <input type="text" name="search" placeholder="¿Qué película quieres ver?"/>
                    <button className="header-search-button">
                        Buscar
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;