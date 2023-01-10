import React, { Fragment } from 'react';
import '../styles/News.css';
import ImgA from '../assets/6.jpg';
import ImgB from '../assets/12.jpg';
import ImgC from '../assets/5.jpg';
import ImgD from '../assets/10.jpg';
import ImgE from '../assets/7.png';
import ImgF from '../assets/8.jpeg';
import FooterComponent from '../components/container/FooterComponent';

const News = () => {
  return (
    <Fragment>
      <div className="container container-news">
        <h1 className="col-12 text-center headerh1">Novedades</h1>

        <div className="row  ">
          <div className="col-lg-6  col-sm-12 col-xs-12">
            <img className="img-news" src={ImgA} alt="" />
            <h4 className="header-h4">
              Juguetes didácticos
            </h4>
            <p className="p-new">
            Si queremos que un niño aprenda algo, y lo traslade a su entorno cognitivo, no existe mejor método de enseñanza que el juego.
            <br />
            <br />
            
              <a
                href="https://www.instagram.com/p/CnHvtLkuM8s/?igshid=MDJmNzVkMjY%3D"
                target="_blank"
                rel="noreferrer"
                className="ANCHOR-NEW"
              >
                Saber más
              </a>{' '}
            </p>
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12">
            <img className="img-news" src={ImgB} alt="" />
            <h4 className="header-h4">
              ¡Esto sí!
            </h4>
            <p className="p-new">
              Si bien las historias en Instagram reflejan mucho nuestra alegría por lo que hacemos y la felicidad de cada niño y niña, hay cosas que no siempre se pueden capturar...
              <br />
              <a
                href="https://www.instagram.com/p/CnHviJPOldB/?igshid=MDJmNzVkMjY%3D"
                target="_blank"
                rel="noreferrer"
                className="ANCHOR-NEW"
              >
                Saber más{' '}
              </a>{' '}
            </p>
          </div>
        </div>

        <div className="row ">
          <div className="col">
            <img className="img-news" src={ImgC} alt="" />
            <h4 className="header-h4">
              Volver a empezar
            </h4>
            <p className="p-new">
              Todos recordamos –sin dudas– un momento o varios de nuestro primer día de clases... 
              <br />
              <br />
              <br />
              <a
                href="https://www.instagram.com/p/CnHvxnqOaQK/?igshid=MDJmNzVkMjY%3D"
                target="_blank"
                rel="noreferrer"
                className="ANCHOR-NEW"
              >
                Saber más
              </a>{' '}
            </p>
          </div>
          <div className="col">
            <img className="img-news" src={ImgD} alt="" />
            <h4 className="header-h4">
              Solidaridad en crisis
            </h4>
            <p className="p-new">
              Cuando las cosas no salen como lo planemos, resulta más importante que nunca volver a lo épico, a lo que se logra solamente entre todos y nunca en soledad..
              <br />
              <a
                href="https://www.instagram.com/p/CnHvkyEu60Q/?igshid=MDJmNzVkMjY%3D"
                target="_blank"
                rel="noreferrer"
                className="ANCHOR-NEW"
              >
                Saber más
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6  col-sm-12 col-xs-12">
            <img className="img-news" src={ImgE} alt="" />
            <h4 className="header-h4">
              Ustedes y nosotros y ellos
            </h4>
            <p className="p-new">
              Ustedes saben bien que no hay nosotros sin ustedes ni sin ellos (los chicos). Con amor, como pueden, como siempre y con la esperanza...
              <br />
              <a
                href="https://www.instagram.com/p/CnHvqkluJ5U/?igshid=MDJmNzVkMjY%3D"
                target="_blank"
                rel="noreferrer"
                className="ANCHOR-NEW"
              >
                Saber más
              </a>
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img className="img-news" src={ImgF} alt="" />
            <h4 className="header-h4">
              ¿Cómo terminamos?
            </h4>
            <p className="p-new">
              La ayuda llega de todos lados, siempre. Y esto lo hacemos entre todos, incluso en los momentos más complicados.
              <br />
              <a
                href="https://www.instagram.com/p/CnHvnXAuj_a/?igshid=MDJmNzVkMjY%3D"
                target="_blank"
                rel="noreferrer"
                className="ANCHOR-NEW"
              >
                Saber más
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-participate">
        <FooterComponent />
      </div>
    </Fragment>
  );
};

export default News;
