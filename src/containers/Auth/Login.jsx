import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'

import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardInput,
    CardOptionsItem,
    CardOptions,
    CardOptionsNote,
    CardButton,
    CardLink
} from '../../styled/FormStyled';
import {FcGoogle, } from 'react-icons/fc'
import { ImFacebook} from 'react-icons/im'
import { loginEmailPassword, loginGoogle, loginFacebook } from '../../actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.uid)

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''

    });
   
    const { email, password } = formValues;

    const handleLogin =(e)=>{
        e.preventDefault();
        dispatch(loginEmailPassword(email, password));
    }
    
    const handleLoginGoogle = () =>{
        dispatch(loginGoogle());
    };

    const handleLoginFacebook = ()=>{
      dispatch(loginFacebook());
    };

    return (
        <>
        <CardWrapper>
        <CardHeader>
          <CardHeading>Iniciar sesión</CardHeading>
        </CardHeader>
        <form onSubmit={handleLogin}>
        <CardBody>
          <CardFieldset>
            <CardInput placeholder="Correo" type="email" name="email" value={email} onChange={handleInputChange} required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Contraseña" type="password" name="password" value={password} onChange={handleInputChange} required />
          </CardFieldset>

          <CardFieldset>
            <CardOptionsNote>O</CardOptionsNote>

            <CardOptions>
              <CardOptionsItem>
                <FcGoogle size={20}  onClick={handleLoginGoogle}/>
              </CardOptionsItem>

              <CardOptionsItem>
                  <ImFacebook size={20} color="#0252BC" onClick={ handleLoginFacebook}/>
              </CardOptionsItem>
            </CardOptions>
          </CardFieldset>

          <CardFieldset>
            <CardButton type="submit" disabled={loading}>Entrar</CardButton>
          </CardFieldset>

          <CardFieldset>
            <CardLink><Link to='/auth/register'>¿No estas registrado?</Link></CardLink>
          </CardFieldset>
        </CardBody>
        </form>
      </CardWrapper>
      
        </>
    )
}

export default Login
