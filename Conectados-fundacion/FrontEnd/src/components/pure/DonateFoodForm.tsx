import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../styles/HeaderForm.css';

const DonateFoodForm = ({ setValue, value, quantity, info }: any) => {
  const handleOnChange = (e: { target: { name: any; value: any } }) => {
    const names = e.target.name;
    switch (names) {
      case 'categoria':
        setValue(e.target.value);
        break;
      case 'cantidad':
        quantity(e.target.value);
        break;
    }
  };

  const handleOnClick = (e: any) => {
    const name = e.target.id;
    switch (name) {
      case 'perecedero':
        info(true);

        break;
      case 'noperecedero':
        info(false);
        break;

      default:
        break;
    }
  };

  return (
    <div className="py-2">
      <Row className="subFor2">
        {''}
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <div className="select-text">Seleccionar Categoría:</div>
          <select
            className="btn btn-dropdown  select-food btn-success p-1 w-10"
            name="categoria"
            onChange={handleOnChange}
            value={value}
        >
            <option value="Granos">Granos</option>
            <option value="Verduras">Verduras</option>
            <option value="Frutas">Frutas</option>
            <option value="Productos Lacteos">Productos Lácteos</option>
            <option value="Proteinas">Proteínas</option>
          </select>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <div className="divfoodDonate">
            <Form.Label className="label-form">Peso/Cantidad</Form.Label>
            <input
              required
              type="text"
              className="foodDonateForm"
              onChange={handleOnChange}
              name="cantidad"
              placeholder="ejem : Producto - Cantidad"
            />
          </div>
        </Form.Group>
          <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Debes completar el campo!
          </Form.Control.Feedback>
      </Row>
    </div>
  );
};

export default DonateFoodForm;
