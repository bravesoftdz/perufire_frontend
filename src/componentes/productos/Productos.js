import React, { useEffect, useState, Fragment, useContext } from 'react'
import clienteAxios from '../../config/axios'
import { Link } from 'react-router-dom'
import Producto from '../productos/Producto'

/* Material UI */
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NoteAdd from '@material-ui/icons/NoteAdd';

/* Importar Context */
import { PageContext } from '../../context/PageContext'

function Productos(props) {

    // productos = State ; guardarProductos es la funcion para guardar el state
    const [productos, guardarClientes] = useState([])

    // Utilizar valores del context
    const [auth, guardarAuth] = useContext(PageContext);

    // UseEffect para consultar la API
    useEffect(() => {
        if (auth.token !== '') {
            let mounted = true;
            const consultarAPI = async () => {
                try {
                    const clientesConsulta = await clienteAxios.get('/productos', {
                        headers: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    });
                    if (mounted) {
                        guardarClientes(clientesConsulta.data);
                    }
                } catch (error) {
                    // Error 
                    if (error.response.status = 500) {
                        props.history.push('/login')
                    }
                }
            }
            consultarAPI();
            return () => {
                mounted = false;
            }
        } else {
            props.history.push('/login');
        }
    }, [productos])

    // Si el state esta en false
    if(!auth.auth) {
        props.history.push('/login');
    }


    return (
        <Fragment>
            <Paper className="contenedor-tabla">
                <div className="icono-tabla">
                    <div>
                        <Link to="/productos/nuevo"><NoteAdd className="icono-table-producto" /></Link>
                    </div>
                    <div className="titulo-tabla">
                        Tablas de Productos
                    </div>
                </div>
                <div>
                    <div className="responsive-table">
                        <Table className="tabla">
                            <TableHead className="cabecera-tabla">
                                <TableRow>
                                    <TableCell>Producto</TableCell>
                                    <TableCell>Codigo</TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Resistencia</TableCell>
                                    <TableCell>Obra del Producto</TableCell>
                                    <TableCell>Editar</TableCell>
                                    <TableCell>Eliminar</TableCell>
                                </TableRow>
                            </TableHead>
                            {productos.map(producto => {
                                return (
                                    <Producto
                                        key={producto._id}
                                        productos={producto}
                                    />
                                )
                            })}
                        </Table>
                    </div>
                </div>
            </Paper>
        </Fragment>
    )
}

export default Productos;