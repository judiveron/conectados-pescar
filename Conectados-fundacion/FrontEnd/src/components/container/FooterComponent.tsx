import React from 'react';
import LogoPicture2 from '../../assets/logoconectados.png';
import Location from '../../assets/Location.png';
import Messsage from '../../assets/Message.png';
import '../../styles/Footer.css';
import SocialBar from '../SocialBar';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="conteFoo">
        <img src={LogoPicture2} alt="" className="logo_Picture" />
        <div className="menu-footer">
          <h6 className="h6-footer">Menu</h6>
          <Link className="a-footer" to="/home">
            Sobre Nosotros
          </Link>
          <Link className="a-footer" to="/thosewhoparticipate">
            Quienes participan
          </Link>
          <Link className="a-footer" to="/news">
            Novedades
          </Link>
          <Link className="a-footer" to="/contacto">
            Contacto
          </Link>
        </div>
        <div className="sobrenosotros-f">
          <h6 className="h6-footer">Sobre Nosotros</h6>
          <a
            className="location"
            href="https://goo.gl/maps/8H1ZdVsYW74PTdoB7"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Location} alt="" className="cont-im" />
            La Plata, Buenos Aires.
          </a>
          <div className="location">
            <img src={Messsage} alt="" className="cont-im" />
            conectados.fundation@gmail.com
          </div>
        </div>
        <SocialBar />
      </div>
    </div>
  );
};
export default FooterComponent;
