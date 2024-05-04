import React from 'react';

function Header() {
  return (
    <header style={{ background: 'linear-gradient(to right, #ff9900, #ff6600)', padding: '10px 0', textAlign: 'center' }}>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <li><a href="#inicio" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a></li>
          <li><a href="#menu" style={{ color: 'white', textDecoration: 'none' }}>Menú</a></li>
          <li><a href="#sobre" style={{ color: 'white', textDecoration: 'none' }}>Acerca de Nosotros</a></li>
          <li><a href="#contacto" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
