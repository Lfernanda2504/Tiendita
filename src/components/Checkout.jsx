import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { Carts } from './Carts'
import { useForm } from '../hooks/useForm'

const Checkout = () => {
    const [formValues, handleInputChange, reset] = useForm({
        email: '',
        number: '',
        date: '',
        cvc: '',
        name: ''

    });
   
    const { email, number,  date, cvc, name } = formValues;
    
    return (
        <div>
            <Row>
                <Col> <Carts /> </Col>
                <Col>
            <form className='form'>
            <label htmlFor='email'>
                Correo electronico
                <input onChange={handleInputChange} type='email' id='email' placeholder='dominio@mail.com' name='email' value={email} />
              </label>
              <h3><stron>información de la tarjeta</stron></h3>
              <label htmlFor='number'>
                Numero de tarjeta
                <input onChange={handleInputChange} type='number' id='number' placeholder='0000 - 0000 - 0000 - 0000' name='number' value={number} />
              </label>
              <Row><Col> <label htmlFor='date'>
                <input onChange={handleInputChange} type='date' id='date' placeholder='MM/YY' name='date' value={date} />
              </label></Col>
              <Col><label htmlFor='cvc'>
                cvc
                <input onChange={handleInputChange} type='password' id='cvc' placeholder='000' name='cvc' value={cvc} />
              </label></Col>
              </Row>
              <label htmlFor='name'>
                nombre en la tarjeta
                <input onChange={handleInputChange} type='text' id='name' placeholder={name} name='name' value={name} />
              </label>

              <button type='submit'>
                Pagar
                <i className='fa fa-angle-right' />
              </button>
              
            </form>
            </Col>
            </Row>
        </div>
    )
}

export default Checkout
