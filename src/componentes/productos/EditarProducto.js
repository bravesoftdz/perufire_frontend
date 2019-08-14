import React, { useState, useEffect, Fragment } from 'react';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import { withRouter } from 'react-router-dom';

/* Material UI */

import { Paper, Grid,Button } from '@material-ui/core';
import NoteAdd from '@material-ui/icons/NoteAdd';


function EditarProducto(props) {

    // obtener el ID
    const { id } = props.match.params;

    // producto = state, y funcion para actualizar
    const [productos, guardarProducto] = useState({
        codigo: '',
        producto: '',
        resistencia: '',
        obraProducto: '',
        imagen: ''
    });

    // archivo = state, guardarArchivo = setState
    const [archivo, guardarArchivo] = useState('');

    // cuando el componente carga
    useEffect(() => {
        // consultar la api para traer el producto a editar
        const consultarAPI = async () => {
            const productoConsulta = await clienteAxios.get(`/productos/editar/${id}`);
            guardarProducto(productoConsulta.data);
        }

        consultarAPI();
    }, [id])

    // Edita un Producto en la base de datos
    const editarProducto = async e => {
        e.preventDefault();

        // crear un formdata
        const formData = new FormData();
        formData.append('codigo', productos.codigo);
        formData.append('producto', productos.producto);
        formData.append('resistencia', productos.resistencia);
        formData.append('obraProducto', productos.obraProducto);
        formData.append('imagen', archivo);

        // almacenarlo en la BD
        try {
            const res = await clienteAxios.put(`/productos/editar/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Lanzar una alerta
            if (res.status === 200) {
                Swal.fire(
                    'Editado Correctamente',
                    res.data.mensaje,
                    'success'
                )
            }

            // redireccionar
            props.history.push('/productos');

        } catch (error) {
            console.log(error);
            // lanzar alerta
            Swal.fire({
                type: 'error',
                title: 'Hubo un error',
                text: 'Vuelva a intentarlo'
            })
        }
    }

    // leer los datos del formulario
    const leerInformacionProducto = e => {
        guardarProducto({
            // obtener una copia del state y agregar el nuevo
            ...productos,
            [e.target.name]: e.target.value
        })
        console.log(productos)
    }

    // coloca la imagen en el state
    const leerArchivo = e => {
        guardarArchivo(e.target.files[0]);
    }

    // extraer los valores del state
    const { codigo, producto, resistencia, obraProducto, imagen } = productos;

    return (
        <Fragment>
            <Paper className="contenedor-tabla medio">
                <div className="icono-tabla">
                    <NoteAdd className="icono-table-producto" />
                    <div className="titulo-tabla">
                        Editar Producto
                   </div>
                </div>
                <div>
                    <div className="contenedor-formulario">
                        <form
                            onSubmit={editarProducto}
                        >
                            <Grid container spacing={5}>
                            <Grid item xs={6}>  
                                    <div className="campo">
                                        <input
                                            type="text"
                                            placeholder="Codigo"
                                            name="codigo"
                                            onChange={leerInformacionProducto}
                                            defaultValue={codigo}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>  
                                <div className="campo">
                                    <input
                                        type="text"
                                        placeholder="Nombre Producto"
                                        name="producto"
                                        onChange={leerInformacionProducto}
                                        defaultValue={producto}
                                    />
                                </div>
                                </Grid>
                                <Grid item xs={6}>  
                                <div className="campo">
                                    <input
                                        type="text"
                                        placeholder="Nombre Producto"
                                        name="resistencia"
                                        onChange={leerInformacionProducto}
                                        defaultValue={resistencia}
                                    />
                                </div>
                                </Grid>
                                <Grid item xs={6}>  
                                <div className="campo">
                                    <input
                                        type="text"
                                        placeholder="Nombre Producto"
                                        name="obraProducto"
                                        onChange={leerInformacionProducto}
                                        defaultValue={obraProducto}
                                    />
                                </div>
                                </Grid>
                                <Grid item xs={12}>
                                <div className="centrar-boton">
                                    { imagen ? (
                                        <img src={`http://localhost:5000/${imagen}`} alt="imagen" width="300" />
                                    ) : null }
                                </div>
                                <Button 
                                    className="boton-img-producto"
                                    variant="contained"
                                    fullWidth={true}
                                    >
                                        Imagen
                                    <input
                                        type="file"
                                        className="file-image"
                                        name="imagen"
                                        onChange={leerArchivo}
                                    />
                                </Button> 

                                </Grid>
                                <Grid item xs={12}>
                                    <div className="centrar-boton">
                                        <Button 
                                        type="submit"
                                        variant="contained" 
                                        className="editar-producto"
                                        >
                                            EDITAR PRODUCTO
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
export default withRouter(EditarProducto);


