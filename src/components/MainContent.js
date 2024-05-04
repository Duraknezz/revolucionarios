import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import image1 from '../imagenes/editadas/_DSC0015.jpg'; // Ajusta la ruta según sea necesario
import image2 from '../imagenes/editadas/_DSC0047.jpg'; // Ajusta la ruta según sea necesario
import image3 from '../imagenes/editadas/_DSC0030.jpg'; // Ajusta la ruta según sea necesario
import './MainContent.css';



function MainContent() {
  useEffect(() => {
    new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
      <div className="swiper-slide"><img src={image1} alt="Imagen 1" /></div>
        <div className="swiper-slide"><img src={image2} alt="Imagen 2" /></div>
        <div className="swiper-slide"><img src={image3} alt="Imagen 3" /></div>
      </div>
      <div className="swiper-pagination"></div>
      <a href="#menu" className="button main-content" style={{ position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>Ir al Menú</a>
    </div>
  );
}

export default MainContent;
