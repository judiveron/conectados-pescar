import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Img from '../../assets/isologotipo.png';
import VoluntaryForm from '../pure/VoluntaryForm';
import VehicleForm from '../pure/VehicleForm';
import ScheduleForm from '../pure/ScheduleForm';
import SubmitButton from '../SubmitButton';
import axios from '../../http-common';
import { useAppContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import '../../styles/ContBtn.css';

const FormContainer = () => {
  const [completed, setCompleted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [dni, setDni] = useState('');
  const [schedule, setSchedule] = useState('');
  const [vehicle, setVehicle] = useState('Camion');

  const context = useAppContext();
  const navigate = useNavigate();

  const handleOnSubmitVoluntaryForm = async (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity() === true) {
      type CreatePerson = {
        dni: string;
        name: string;
        lastName: string;
        phone: string;
        mail: string;
        schedule: string;
        vehicle: string;
      };
      const person = {
        userdni: dni,
        username: name,
        userlastname: lastName,
        userphone: phone,
        useremail: mail,
        useravailability: schedule,
        uservehicle: vehicle,
      };
      try {
        await axios
          .post<CreatePerson>('/create', person)
          .then((data: any) => console.log(data));
      } catch (error) {
        console.log('error message: ', error);
      }
      context.createVoluntary(person);
      navigate('/gratitude');
    }
  };

  /* crea un objeto persona con la informacion obtenida desde el formulario voluntario */

  const check = (e: { target: { checked: any } }) => {
    const value = e.target.checked;
    setCompleted(value);
  };

  return (
    <div className='formMM'>
      <Form
        className="minForm"
        noValidate
        validated={validated}
        onSubmit={handleOnSubmitVoluntaryForm}
      >
        <div className="formHeader">
          <img src={Img} alt="" className="logoFundacion" />
          <p className="pTitulo1">
            Nuestra tarea sería imposible de realizar sin la ayuda de
            voluntarios. En CONECTADOS tu tiempo se transforma en
            ayuda.{' '}
          </p>
        </div>{' '}
        <h4 className="h4Form">Quiero sumarme como voluntario </h4>{' '}
        <br />
        <br />
        <br />
        <VoluntaryForm
          name={setName}
          lastName={setLastName}
          phone={setPhone}
          mail={setMail}
          dni={setDni}
        />
        <ScheduleForm scheduleInfo={setSchedule} />
        <Form.Group as={Col} md="12">
          <br />
          <Form.Check
            type="checkbox"
            onChange={check}
            label="¿Posees vehículo ?¿Te gustaría ayudar en el transporte de los
              alimentos?"
          />{' '}
          {completed ? (
            <p className="p-vehicle">
              Tipo de Vehículo:{' '}
              <VehicleForm vehicle={vehicle} setVehicle={setVehicle} />
            </p>
          ) : (
            ''
          )}
        </Form.Group>
        <div className="cont-btn">
          <SubmitButton />
        </div>
      </Form>
    </div>
  );
};

export default FormContainer;
