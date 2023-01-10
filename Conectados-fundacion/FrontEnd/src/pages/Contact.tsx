import React from 'react';
import '../styles/Contact.css';
import Fondo2 from '../assets/fondo.jpg';
import FooterComponent from '../components/container/FooterComponent';

const Contact = () => {
  return (
    <div>
      <div className="responsiveContactContainer">
        <h1 className="contacTitle">¡Contáctanos!</h1>
        <img src={Fondo2} alt="" className="fondo3" />
        <div className="containerContact p-5">
          <a
            href=""
            target="_blank"
            rel="no reference noreferrer"
            className="redirect"
          >
           <strong> Donar Online </strong> 
          </a>
          <a
            href="mailto:conectados.fundation@gmail.com?subject=Quiero%20ayudar!"
            target="_blank"
            rel="no reference noreferrer"
            className="redirect"
          >
            <strong> E-mail CONECTADOS </strong>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=541133557184&text=¡Hola!%20Me%20gustaría%20recibir%20la%20ayuda%20de%20Conectados"
            target="_blank"
            rel="no reference noreferrer"
            className="redirect"
          >
           <strong>Área Social - Asistencia Conectados</strong> 
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=541133557184&text=¡Hola!%20Quiero%20colaborar%20con%20Conectados%20"
            target="_blank"
            rel="no reference noreferrer"
            className="redirect"
          >
           <strong> Whatsapp Conectados </strong> 
          </a>
          <a
            href="https://www.instagram.com/conectados.fundation/"
            target="_blank"
            rel="no reference noreferrer"
            className="redirect"
          >
            <strong> Instagram CONECTADOS</strong>
          </a>
        </div>
      </div>
      <div className="footer-participate">
        <FooterComponent />
      </div>
    </div>
  );
};

export default Contact;
