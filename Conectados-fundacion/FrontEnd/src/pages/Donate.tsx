import React, { Fragment } from 'react';
import ContainerEmpresa from '../components/container/ContainerEmpresa';
import FooterComponent from '../components/container/FooterComponent';
import '../styles/Donate.css';
const Donate = () => {
  return (
    <div>
      <ContainerEmpresa />
      <Fragment>
        <FooterComponent />
      </Fragment>
    </div>
  );
};

export default Donate;
