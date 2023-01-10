import React from 'react';
import FormContainer from '../components/container/ContainerForm';
import '../styles/FormPages.css';
import FooterComponent from '../components/container/FooterComponent';

const FormPages = () => {
  return (
    <div>
      <FormContainer />
      <div className="footerFormContainer">
        <FooterComponent />
      </div>
    </div>
  );
};

export default FormPages;
