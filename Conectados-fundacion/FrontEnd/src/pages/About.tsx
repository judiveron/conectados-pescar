import React from 'react';
import '../styles/About.css';
import Img from '../assets/3.png';
import FooterComponent from '../components/container/FooterComponent';
const About = () => {
  return (
    <div className="headerAbout">
      <div className="containerAbout">
        <div className="containerHeaderAbout">
          <h1 className="titleAbout">Sobre Nosotros</h1>
          <p className="paragraphAbout">
            Somos una fundación de La Plata, Provincia de Buenos Aires. Que lleva, en los momentos más sensibles de la infancia, autoestima, reconocimiento y dignidad a los niños y niñas más olvidados de la sociedad. Esto lo logramos gracias al desarrollo de un sistema que nos permite llevar adelante campañas y proyectos de solidaridad personalizada. 
          </p>
        </div>
        <div className="bodyAbout">
          <img className="imgAbout" src={Img} alt="" />
          <div className="paragraphs">
            <h2 className="titleOneAbout titlesparagraphs">Misión</h2>
            <p className="paragraphOneAbout"> Multiplicar nuestras campañas y extenderlas a tantos lugares del mundo como gente haya con ganas de ayudar y niños que necesiten ser reconocidos.</p>
            <h3 className="titletwoAbout titlesparagraphs">Visión</h3>
            <p>
              Ser una organización que está enfocada en la temática del hambre, la
              nutrición y la inseguridad alimentaria, para llegar con más
              alimentos a más personas que sufren hambre, incorporando más
              organizaciones comunitarias, en alianza con otros actores sociales.
            </p>
            <h4 className="titlethreeAbout titlesparagraphs">
              Este modelo se sostiene gracias...
            </h4>
            <p>
              - Al apoyo de una comunidad de donantes.
              <br />
              - Al compromiso de empresas y fundaciones donantes.
              <br />
              - Al desarrollo de eventos a beneficio, acciones de marketing
              filantrópico y marketing digital.
              <br />
              - A las contribuciones simbólicas que realizan las
              organizaciones sociales.
            </p>
          </div>
        </div>
      </div>
      <div className="contentAboutFooter">
        <FooterComponent />
      </div>
    </div>
  );
};

export default About;
