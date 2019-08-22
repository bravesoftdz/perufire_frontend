import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../../config/axios'
import { withRouter } from 'react-router-dom'

/* Material UI */
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import logotipo from '../img/logotipo.png'
import Swal from 'sweetalert2'; 

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

    const[usuario,guardarUsuarios] = useState({
        email: '',
        nombre: '',
        apellido: '',
        empresa: '',
        celular: '',
        password: '',
        repetirPassword: ''
    });

    const actualizarUsuario = e => {
        guardarUsuarios({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const agregarUsuario = e => {
        e.preventDefault();

        // Enviando peticion a axios
        clienteAxios.post('/crear-cuenta',usuario)
            .then(res => {
                if(res.data.code === 11000){
                    Swal.fire({
                        type: 'error',
                        title: 'Hubo un error',
                        text: 'Ya hay un cliente registrado con este email'
                    })
                }else{
                    Swal.fire(
                        'Buen trabajo',
                        res.data.mensaje,
                        'success'
                    )
                }
                // Redireccionando
                props.history.push('/login');
            });
    }

    const validarForm = () => {
        const { nombre, apellido, empresa, celular, email, password, repetirPassword } = usuario

        let valido = !nombre.length || !apellido.length || !empresa.length || !celular.length || !email.length || !password || password !== repetirPassword

        return valido
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
                    onSubmit={agregarUsuario}
                    >
                       <div className="contenedor-campo-form">
                        <div className="campo-form-cuenta">
                                <CssTextField
                                    name="nombre"
                                    label="Nombre"
                                    margin="normal"
                                    variant="outlined"
                                    type="text"
                                    required
                                    onChange={actualizarUsuario}
                                />
                        </div>
                        <div className="campo-form-cuenta">
                            <CssTextField
                                name="apellido"
                                label="Apellido"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                required
                                onChange={actualizarUsuario}
                            />
                        </div>
                       </div>
                       <div className="contenedor-campo-form">
                        <div className="campo-form-cuenta">
                            <CssTextField
                                name="empresa"
                                label="Empresa"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                required
                                onChange={actualizarUsuario}
                            />
                        </div>
                        <div className="campo-form-cuenta">
                            <CssTextField
                                name="celular"
                                label="Celular"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                required
                                onChange={actualizarUsuario}
                            />
                        </div>
                        </div>
                        <div className="contenedor-campo-form">
                        <div className="campo-form">
                            <CssTextField
                                name="email"
                                label="Email"
                                margin="normal"
                                variant="outlined"
                                type="email"
                                required
                                onChange={actualizarUsuario}
                            />
                        </div>
                        </div>
                        <div className="contenedor-campo-form">
                            <div className="campo-form-cuenta">
                                <CssTextField
                                    name="password"
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    variant="outlined"
                                    required
                                    onChange={actualizarUsuario}
                                />
                            </div>
                            <div className="campo-form-cuenta">
                                <CssTextField
                                    name="repetirPassword"
                                    label="Repetir Password"
                                    type="password"
                                    margin="normal"
                                    variant="outlined"
                                    required
                                    onChange={actualizarUsuario}
                                />
                            </div>
                        </div>
                        <div className="login-boton">
                            <Button variant="contained" className="boton-login"
                                type="submit"
                                disabled={validarForm()}
                            >
                                Registrarte
                            </Button>
                        </div>
                        <p className="link-up">¿Ya tienes una cuenta?</p>
                        <div className="registrate-administrador">
                            <div className="link-signup">
                                <Link to="/login/admin" className="up-link">¿Eres administrador?</Link>
                            </div>
                            <div className="link-signup">
                                <Link to="/login" className="up-link">Inicia sesion</Link>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
        </Fragment>
    )
}

export default withRouter(Login);