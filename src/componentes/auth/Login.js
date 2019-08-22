import React, { useState, Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../../config/axios'
import { withRouter } from 'react-router-dom'

/* Material UI */
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import logotipo from '../img/logotipo.png'
import Swal from 'sweetalert2'; 

import { PageContext } from '../../context/PageContext'

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#C3C5C1',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#C3C5C1',
        },
        '&:hover fieldset': {
          borderColor: '#C3C5C1',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#C3C5C1',
        },
      },
    },
  })(TextField);  


function Login(props) {
    // Auth y token
    const [auth, guardarAuth] = useContext(PageContext)

    const [credenciales,guardarCredenciales] = useState({});

    // Iniciar Sesion
    const iniciarSesion = async e => {
        e.preventDefault();

        try {
            const respuesta = await clienteAxios.post('/login',credenciales);
            // Extrayendo el token
            const {token} = respuesta.data;
            localStorage.setItem('token',token);

            // Colocando el token en el state
            guardarAuth({
                credenciales,
                token,
                auth: true
            })

            // Lanzando la alerta
            Swal.fire(
                'Bienvenido',
                'Haz iniciado sesion correctamente',
                'success'
            )

            // Redireccionamos
            props.history.push('/');

        } catch (error) {
            if(error.response){
                Swal.fire({
                    type: 'error',
                    title: 'Hubo un error',
                    text: error.response.data.mensaje
                })
            }else{
                Swal.fire({
                    type: 'error',
                    title: 'Hubo un error',
                    text: 'Hubo un error'
                })
            }
        }
    }

    const leerDatos = e => {
        guardarCredenciales({
            ...credenciales,
            [e.target.name] : e.target.value
        })
    }

    return (
        <Fragment>
            <div className="banner-login">
                <div className="container-login">
                    <div className="logo-login">
                        <img className="logotipo" alt="logotipo perufire" src={logotipo} />
                    </div>
                    <div className="titulo-login">
                        <h2>Perufire</h2>
                    </div>
                    <form
                    onSubmit={iniciarSesion}
                    >
                        <div className="campo-form">
                            <CssTextField
                                name="email"
                                label="Email"
                                margin="normal"
                                variant="outlined"
                                type="email"
                                required
                                onChange={leerDatos}
                            />
                        </div>
                        <div className="campo-form">
                            <CssTextField
                                name="password"
                                label="Password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                                required
                                onChange={leerDatos}
                            />
                        </div>
                        <div className="login-boton">
                            <Button variant="contained" className="boton-login"
                                type="submit"
                            >
                                Iniciar Sesión
                                        </Button>
                        </div>
                        <p className="link-up">¿Aun no tienes una cuenta?</p>
                        <div className="registrate-administrador">
                            <div className="link-signup">
                                <Link to="/login/admin" className="up-link">¿Eres administrador?</Link>
                            </div>
                            <div className="link-signup">
                                <Link to="/crear-cuenta" className="up-link">Registrarte</Link>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
        </Fragment>
    )
}

export default withRouter(Login);