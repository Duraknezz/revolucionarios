import React from 'react';
import './Footer.css'; // Asegúrate de tener este archivo en la carpeta correcta
import logo from '../imagenes/Logo_blanco.png'; 

function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <img src={logo} alt="Logo Los Revolucionarios" />
            </div>
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Sucursales</h4>
                    <p>#519 Av. Torreón Nuevo, Morelia, Mich.</p>
                </div>
                <div className="footer-section">
                    <h4>Horario</h4>
                    <p>1:00pm - 1:00am</p>
                </div>
                <div className="footer-section">
                    <h4>Teléfono</h4>
                    <p>443 232 4326</p>
                </div>
                <div className="footer-section">
                    <h4>Nuestro Menú</h4>
                    <p>TACOS | LA PARRILLA | MARISCOS | SANDWICH | ENSALADAS | ESPECIALIDADES | BOTANAS | COCTELES ESP</p>
                </div>
                <div className="footer-socials">
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
