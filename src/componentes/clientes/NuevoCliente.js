import React,{Fragment,useState} from 'react'
import clienteAxios from '../../config/axios';
import { withRouter } from 'react-router-dom'
import Swal from 'sweetalert2'

/* Material UI */

import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core/styles'
import { Paper, Grid, Button } from '@material-ui/core';
import AddClient from '@material-ui/icons/PersonAdd';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#5DB461',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#5DB461',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#5DB461',
        },
        '&:hover fieldset': {
          borderColor: '#5DB461',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#5DB461',
        },
      },
    },
  })(TextField);

function NuevoCliente({history}){

    const[cliente,guardarClientes] = useState({
        nombre: '',
        apellido: '',
        empresa: '',
        telefono: '',
        email: ''
    });

    const actualizarCliente = e => {
        guardarClientes({
            ...cliente,
            [e.target.name] : e.target.value
        })
        console.log(cliente)
    }

    const agregarCliente = e => {
        e.preventDefault();

        // Enviando peticion a axios
        clienteAxios.post('/nuevo/cliente',cliente)
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
                history.push('/');
            });
    }

    const validarFormulario = () =>{
        const {nombre,apellido,empresa,email,telefono} = cliente;

        let valido = !nombre.length || !apellido.length || !empresa.length || !email.length || !telefono.length

        return valido;
    }

    

    return(
        <Fragment>
            <Paper className="contenedor-tabla medio">
                <div className="icono-tabla">
                    <AddClient className="icono-table" />
                    <div className="titulo-tabla">
                        Nuevo Cliente
                    </div>
                </div>
                <div>
                    <div className="contenedor-formulario">
                        <form 
                            onSubmit={agregarCliente}
                            >
                            <Grid container spacing={5}>
                                <Grid item xs={6}>
                                    <CssTextField 
                                    name="nombre"
                                    type="text"
                                    fullWidth={true}
                                    onChange={actualizarCliente} 
                                    id="custom-css-standard-input" 
                                    label="Nombre" 
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CssTextField 
                                    type="text"
                                    name="apellido"
                                    fullWidth={true}
                                    onChange={actualizarCliente} 
                                    id="custom-css-standard-input" 
                                    label="Apellido" 
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CssTextField 
                                    type="text"
                                    name="empresa"
                                    fullWidth={true} 
                                    onChange={actualizarCliente} 
                                    id="custom-css-standard-input" 
                                    label="Empresa" 
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CssTextField 
                                    type="text"
                                    name="telefono"
                                    fullWidth={true} 
                                    onChange={actualizarCliente} 
                                    id="custom-css-standard-input" 
                                    label="Teléfono" 
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField 
                                    type="email"
                                    name="email"
                                    fullWidth={true} 
                                    onChange={actualizarCliente} 
                                    id="custom-css-standard-input" 
                                    label="Email" 
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <Button 
                                type="submit"
                                variant="contained" 
                                className="nuevo-cliente"
                                disabled={validarFormulario()}
                                >
                                    AGREGAR CLIENTE
                                </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </div>
            </Paper>
        </Fragment>
    )
}

export default withRouter(NuevoCliente);