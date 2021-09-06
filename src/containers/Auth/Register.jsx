import React from 'react'
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardInput,
    CardButton,
    CardLink
} from '../../styled/FormStyled';
import { registerEmailPassword } from '../../actions/authAction';

const Register = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange]= useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const {name, email, password, password2} = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name);
    dispatch(registerEmailPassword(email, password, name))
  }
    return (
           <>
            <CardWrapper>
        <CardHeader>
          <CardHeading>Crear cuenta</CardHeading>
        </CardHeader>
        <form onSubmit={handleRegister}>
        <CardBody>
        <CardFieldset>
            <CardInput placeholder="Nombre Completo" type="text" name='name' value={name} onChange={handleInputChange} required />
          </CardFieldset>
          <CardFieldset>
            <CardInput placeholder="Correo" type="email" name='email' value={email} onChange={handleInputChange} required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Contraseña" type="password"  name='password' value={password} onChange={handleInputChange} required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Confirmar contraseña" type="password" name="password2" value={password2} onChange={handleInputChange} required />
          </CardFieldset>

          <CardFieldset>
            <CardButton type="submit">Registrarse</CardButton>
          </CardFieldset>
          <CardFieldset>
            <CardLink><Link to='/auth/login'>¿Ya tienes cuenta?</Link></CardLink>
          </CardFieldset>

        </CardBody>
        </form>
      </CardWrapper>
        </> 
        
    )
}

export default Register
