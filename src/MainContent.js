import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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
        <div className="swiper-slide"><img src="../imagenes/editadas/_DSC0023.jpg" alt="Imagen 1" /></div>
        <div className="swiper-slide"><img src="../imagenes/editadas/_DSC0047.jpg" alt="Imagen 2" /></div>
        <div className="swiper-slide"><img src="../imagenes/editadas/_DSC0059.jpg" alt="Imagen 3" /></div>
      </div>
      <div className="swiper-pagination"></div>
      <a href="#menu" className="button main-content" style={{ position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>Ir al Menú</a>
    </div>
  );
}

export default MainContent;
