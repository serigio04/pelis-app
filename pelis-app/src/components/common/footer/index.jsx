import React from "react";
import './index.scss'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-dev">
                    <p>
                        Desarrollado por 
                        <span> Sergio Gomar </span>
                    </p>   
                </div>
                <ul className="footer-media">
                    <li className="footer-media-links">
                        Whatsapp
                    </li>
                    <li className="footer-media-links">
                        Email
                    </li>
                    <li className="footer-media-links">
                        Linkedin
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer;