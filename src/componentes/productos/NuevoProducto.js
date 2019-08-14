import React,{Fragment,useState} from 'react'
import clienteAxios from '../../config/axios';
import { withRouter } from 'react-router-dom'
import Swal from 'sweetalert2'

/* Material UI */

import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core/styles'
import { Paper, Grid, Button } from '@material-ui/core';
import NoteAdd from '@material-ui/icons/NoteAdd';

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

function NuevoProducto({history}){

    const[productos,gurdarProductos] = useState({
        codigo: '',
        producto: '',
        resistencia: '',
        obraProducto: ''
    });

    const[archivo,guardarArchivo] = useState('');

    const actualizarProducto = e => {
        gurdarProductos({
            ...productos,
            [e.target.name] : e.target.value
        })
        console.log(productos)
    }

    const actualizarArchivo = e => {
        guardarArchivo(e.target.files[0]);
    }

    const agregarProducto = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('codigo',productos.codigo);
        formData.append('producto',productos.producto);
        formData.append('resistencia',productos.resistencia);
        formData.append('obraProducto',productos.obraProducto);
        formData.append('imagen',archivo);

        // Enviando peticion a axios
        try {
            const res = await clienteAxios.post('/nuevo/producto',formData,{
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            });

            if(res.status === 200){
                Swal.fire(
                    'Buen trabajo',
                    res.data.mensaje,
                    'success'
                )
            }

            history.push('/productos')

        } catch (error) {
            Swal.fire({
                type: 'error',
                title: 'Hubo un error',
                text: 'Vuelve a intentarlo'
            })
        }
    }

    const validarFormulario = () =>{
        const {codigo,producto,resistencia,obraProducto} = productos;

        let valido = !codigo.length || !producto.length || !resistencia.length || !obraProducto.length 

        return valido;
    }

    

    return(
        <Fragment>
            <Paper className="contenedor-tabla medio">
                <div className="icono-tabla">
                    <NoteAdd className="icono-table-producto" />
                    <div className="titulo-tabla">
                        Nuevo Producto
                    </div>
                </div>
                <div>
                    <div className="contenedor-formulario">
                        <form 
                            onSubmit={agregarProducto}
                            >
                            <Grid container spacing={5}>
                                <Grid item xs={6}>
                                    <CssTextField 
                                    name="codigo"
                                    type="text"
                                    fullWidth={true}
                                    onChange={actualizarProducto} 
                                    id="custom-css-standard-input" 
                                    label="Codigo" 
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CssTextField 
                                    type="text"
                                    name="producto"
                                    fullWidth={true}
                                    onChange={actualizarProducto} 
                                    id="custom-css-standard-input" 
                                    label="Producto" 
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CssTextField 
                                    type="text"
                                    name="resistencia"
                                    fullWidth={true} 
                                    onChange={actualizarProducto} 
                                    id="custom-css-standard-input" 
                                    label="Resistencia" 
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CssTextField 
                                    type="text"
                                    name="obraProducto"
                                    fullWidth={true} 
                                    onChange={actualizarProducto} 
                                    id="custom-css-standard-input" 
                                    label="Obra del Producto" 
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button 
                                    className="boton-img-producto"
                                    variant="contained"
                                    fullWidth={true}
                                    >
                                        Imagen
                                        <input
                                        onChange={actualizarArchivo} 
                                        className="file-image"
                                        type="file"
                                        name="imagen"
                                        />
                                    </Button> 
                                    
                                </Grid>
                                <Grid item xs={12}>
                                <Button 
                                type="submit"
                                variant="contained" 
                                className="nuevo-cliente"
                                disabled={validarFormulario()}
                                >
                                    AGREGAR PRODUCTO
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

export default withRouter(NuevoProducto);