import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import axios from '../../http-common-ongs';
import Img from '../../assets/isologotipo.png';
import '../../styles/HeaderForm.css';
import SubmitButton from '../SubmitButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const ContainerEmpresa = () => {
    const [validated, setValidated] = useState(false);
    const [pName, setPName] = useState('');
    const [pLastName, setPLastName] = useState('');
    const [cuitOng, setCuitOng] = useState('');
    const [emailOng, setEmailOng] = useState('');
    const [phoneOng, setPhoneOng] = useState('');
    const [nameOng, setNameOng] = useState('');
    const [addressOng, setAddressOng] = useState('');
    const [typeOng, setTypeOng] = useState('');
    const navigate = useNavigate();

    const handleOnSubmitEmpresaForm = async (event: {
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
            type CreateNeedHelp = {
                pName: string;
                pLastName: string;
                emailOng: string;
                phoneOng: string;
                nameOng: string;
                addressOng: string;
                typeOng: string;
            };

            const needHelpOng = {
                ongname: nameOng,
                ongcuit: cuitOng,
                ongreason: typeOng,
                ongheadnm: pName,
                ongheadln: pLastName,
                ongaddress: addressOng,
                ongphone: phoneOng,
                ongemail: emailOng,
            };
            try {
                await axios.post<CreateNeedHelp>('/create', needHelpOng);
            } catch (error) { }
            navigate('/gratitude');
        }
    };
    return (
        <div className="forMayoMin">
            <div className='form'>
                <img src={Img} alt="" className="logoFundacion5" />
                <p className="pTitulo7">
                    Toda empresa puede ser nuestra aliada. Ya sea a través de la donación
                    de alimentos, productos y servicios logísticos.
                </p>
            </div>{' '}
            <h4 className="hForm">Quiero sumarme como empresa </h4>{' '}
            <div className="py-2">
                <Row className="mb-3 ">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Nombre de la Empresa </Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="persona nombre"
                            onChange={handleOnSubmitEmpresaForm}
                        />
                        <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Debes completar el campo!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="ejem : usuario@email.com"
                            name="email ong"
                            required
                            pattern="[^@\s]+@[^@\s]+"
                            onChange={handleOnSubmitEmpresaForm}
                        />
                        <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Debes completar el campo!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="0000-0000-0000"
                            required
                            name="telefono ong"
                            onChange={handleOnSubmitEmpresaForm}
                        />
                        <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Debes completar el campo!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label>Dirección de la Empresa</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            name="nombre ong"
                            onChange={handleOnSubmitEmpresaForm}
                        />
                        <Form.Control.Feedback>Correcto.</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Debes completar el campo!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                        <Form.Label>¿Que desea donar?</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            name="direccion ong"
                            onChange={handleOnSubmitEmpresaForm}
                        />
                        <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Debes completar el campo!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <div className="submitButtonFormEmpresas">
                    <SubmitButton />
                </div>
            </div>
        </div>
    );
};

export default ContainerEmpresa;