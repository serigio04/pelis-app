import React from "react";

const Header = () => {
    return (
        <>
            <header className="header">
                <ul>
                    <li>Inicio</li>
                    <li>Películas</li>
                    <li>Añadir película</li>
                </ul>
                <div className="header-search">
                    <input type="text" name="search" placeholder="Buscar"/>
                    <button className="header-search-button">
                        Buscar
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;