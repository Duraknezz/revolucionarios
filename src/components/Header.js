import React from 'react';
import './Header.css'; 
import logo from '../imagenes/Logo_color.png'; 

function Header() {
    return (
        <div className="header">
            <div className="nav">
                <div className="nav__data">
                    <div className="nav__logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <ul className="nav__list">
                    <li className="nav__item"><a href="#">Inicio</a></li>
                    <li className="nav__item"><a href="#">Menu</a></li>
                    <li className="nav__item"><a href="#">Sobre Nosotros</a></li>
                    <li className="nav__item"><a href="#">Contacto</a></li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
