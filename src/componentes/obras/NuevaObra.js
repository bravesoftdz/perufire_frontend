import React, { useState, Fragment } from 'react'
import FormBuscarProducto from '../obras/FormBuscarProducto'
import ObraRealizada from '../obras/ObraRealizada'
import ResultadoBusqueda from '../obras/ResultadoBusqueda'
import { withRouter } from 'react-router-dom'
import clienteAxios from '../../config/axios'
import Swal from 'sweetalert2'
import { Grid } from '@material-ui/core';


// Material UI

import Paper from '@material-ui/core/Paper';
import Bussines from '@material-ui/icons/Business';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';


function NuevaObra(props) {

    // Extraemos el ID
    // const {id} = props.match.params;

    // State

    const [obras, guardarObras] = useState({
        obra: '',
        inicio: '',
        final: '',
        empresa: ''
    });

    const actualizarObra = e => {
        guardarObras({
            ...obras,
            [e.target.name]: e.target.value
        })
    }

    const [busqueda, guardarBusqueda] = useState('')
    const [productos, guardarProductos] = useState([])


    const buscarProducto = async e => {
        e.preventDefault();

        // Obtener los productos de la busqueda
        const resultadoBusqueda = await clienteAxios.post(`/productos/busqueda/${busqueda}`)

        // Si no hay resultado la alerta se muestra, si no agregarlo al state
        if (resultadoBusqueda.data[0]) {
            let productoResultado = resultadoBusqueda.data[0];
            // Agregar la llave producto, copia del id
            productoResultado.product = resultadoBusqueda.data[0]._id;
            productoResultado.cantidad = 0;
            productoResultado.ambiente = '';

            // Agregarlo al state
            guardarProductos([...productos, productoResultado]);
            
        } else {
            Swal.fire({
                type: 'error',
                title: `No se encontraron resultados para : ${busqueda}`,
                text: 'Intente otra busqueda'
            })
        }
    }

    // Almacena la busqueda en el state
    const leerDatosBusqueda = e => {
        guardarBusqueda(e.target.value);
    }

    const actualizarCantidad = (cantidad, i) => {
        const todosProductos = [...productos];
        todosProductos[i].cantidad = Number(cantidad);

        guardarProductos(todosProductos);
    }

    const actualizarAmbiente = (ambiente, i) => {
        const todosProductos = [...productos];
        todosProductos[i].ambiente = ambiente;

        guardarProductos(todosProductos);
    }

    // Eliminamos un producto de la tabla

    const eliminarProducto = id => {
        const todosProductos = productos.filter(producto => producto.producto !== id);
        guardarProductos(todosProductos)
    }

    // Almacenando la obra en la base de datos

    const realizarObra = async e => {
        e.preventDefault();

        // Extraer el id del cliente
        const { id } = props.match.params;

        const obraFinal = {
            "cliente": id,
            "productos": productos,
            "obra" : obras.obra,
            "inicio" : obras.inicio,
            "final" : obras.final,
            "empresa": obras.empresa
        }

        // Almacenando en la base de datos
        const resultado = await clienteAxios.post(`/nuevo/obra/${id}`, obraFinal);
        if (resultado.status === 200) {
            //Alerta todo bien
            Swal.fire({
                type: 'success',
                title: 'Buen trabajo',
                text: 'La obra se agrego correctamente'
            })
        } else {
            //Alerta de error
            Swal.fire({
                type: 'error',
                title: 'Hubo un error',
                text: 'Vuelva a intentarlo'
            })
        }

        props.history.push(`/cliente/obras/${id}`);
    }

    return (
        <Fragment>
            <Paper className="contenedor-info-obra">
                <Grid container >
                <Grid item sm={3}>
                    <TextField className="number-text-field"
                        id="outlined-number"
                        label="Obra"
                        type="text"
                        name="obra"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={actualizarObra}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <TextField className="number-text-field"
                        id="outlined-number"
                        label="Empresa o Cliente"
                        type="text"
                        name="empresa"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={actualizarObra}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <TextField className="number-text-field"
                        id="outlined-number"
                        label="Fecha Inicio."
                        type="text"
                        name="inicio"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={actualizarObra}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item sm={3}>
                    <TextField className="number-text-field"
                        id="outlined-number"
                        label="Fecha Entrega"
                        type="text"
                        name="final"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={actualizarObra}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                </Grid>
            </Paper>
            <Grid container spacing={4}>
                <Grid item sm={12} className="busqueda-productos">
                    <FormBuscarProducto
                        buscarProducto={buscarProducto}
                        leerDatosBusqueda={leerDatosBusqueda}
                    />
                </Grid>
                <Grid item sm={12}>
                    <Fragment>
                        <Paper className="contenedor-tabla">
                            <div className="icono-tabla">
                                <div>
                                    <Bussines className="icono-table-obra" />
                                </div>
                                <div className="titulo-tabla">
                                    Productos de la Obra
                            </div>
                            </div>
                            <div>
                                <div className="responsive-table">
                                    <Table className="tabla">
                                        <TableHead className="cabecera-tabla">
                                            <TableRow>
                                                <TableCell>Codigo</TableCell>
                                                <TableCell>Producto</TableCell>
                                                <TableCell>Resistencia</TableCell>
                                                <TableCell>Ambiente</TableCell>
                                                <TableCell>Cantidad</TableCell>
                                                <TableCell>Eliminar</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        {productos.map((producto, index) => (
                                            <ResultadoBusqueda
                                                key={producto._id}
                                                producto={producto}
                                                actualizarCantidad={actualizarCantidad}
                                                actualizarAmbiente={actualizarAmbiente}
                                                eliminarProducto={eliminarProducto}
                                                index={index}
                                            />
                                        ))}
                                    </Table>
                                </div>
                            </div>
                        </Paper>
                    </Fragment>
                </Grid>
                <Grid item sm={12}>
                    <ObraRealizada
                        realizarObra={realizarObra}
                        productos={productos}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default withRouter(NuevaObra);