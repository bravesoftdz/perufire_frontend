import React,{Fragment,useState} from 'react'
import clienteAxios from '../../config/axios';
import { withRouter } from 'react-router-dom'
import Swal from 'sweetalert2';

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

function EditarCliente(props){

    const {id} = props.match.params

    const[cliente,datosCliente] = useState({
        nombre: '',
        apellido: '',
        empresa: '',
        telefono: '',
        email: ''
    });

    const consultarAPI = async () => {
        const clienteConsulta = await clienteAxios.get(`/clientes/${id}`);
        datosCliente(clienteConsulta.data);
    }

    // useEffect 
    useState(()=>{
        consultarAPI();
    },[]);

    const actualizarState = e => {
        datosCliente({
            ...cliente,
            [e.target.name] : e.target.value
        })
    }

    const actualizarCliente = e => {
        e.preventDefault();

        // enviar petición por axios
        clienteAxios.put(`/clientes/editar/${cliente._id}`, cliente) 
            .then(res => {
                // validar si hay errores de mongo 
                if(res.data.code === 11000) {
                    Swal.fire({
                        type: 'error',
                        title: 'Hubo un error',
                        text: 'Ese cliente ya esta registrado'
                    })
                } else {
                    Swal.fire(
                        'Correcto',
                        'Se actualizó Correctamente',
                        'success'
                    )
                }

                // redireccionar
                props.history.push('/clientes');
            })
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
                        Editar Cliente
                    </div>
                </div>
                <div>
                    <div className="contenedor-formulario">
                        <form 
                            onSubmit={actualizarCliente}
                            >
                            <Grid container spacing={5}>
                                <Grid item xs={6}>
                                    <CssTextField 
                                    name="nombre"
                                    type="text"
                                    fullWidth={true}
                                    onChange={actualizarState} 
                                    id="custom-css-standard-input" 
                                    label="Nombre" 
                                    value={cliente.nombre}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CssTextField 
                                    type="text"
                                    name="apellido"
                                    fullWidth={true}
                                    onChange={actualizarState} 
                                    id="custom-css-standard-input" 
                                    label="Apellido" 
                                    value={cliente.apellido}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CssTextField 
                                    type="text"
                                    name="empresa"
                                    fullWidth={true} 
                                    onChange={actualizarState} 
                                    id="custom-css-standard-input" 
                                    label="Empresa" 
                                    value={cliente.empresa}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CssTextField 
                                    type="text"
                                    name="telefono"
                                    fullWidth={true} 
                                    onChange={actualizarState} 
                                    id="custom-css-standard-input" 
                                    label="Teléfono" 
                                    value={cliente.telefono}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField 
                                    type="email"
                                    name="email"
                                    fullWidth={true} 
                                    onChange={actualizarState} 
                                    id="custom-css-standard-input" 
                                    label="Email" 
                                    value={cliente.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <div className="centrar-boton">
                                <Button 
                                type="submit"
                                variant="contained" 
                                className="nuevo-cliente"
                                disabled={validarFormulario()}
                                >
                                    EDITAR CLIENTE
                                </Button>
                                </div>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </div>
            </Paper>
        </Fragment>
    )
}

export default withRouter(EditarCliente);