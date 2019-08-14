import React, { useEffect, useState, Fragment } from 'react'
import clienteAxios from '../../config/axios'
import {Link} from 'react-router-dom'
import Producto from '../productos/Producto'

/* Material UI */
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NoteAdd from '@material-ui/icons/NoteAdd';


function Productos() {

    // productos = State ; guardarProductos es la funcion para guardar el state
    const [productos, guardarProductos] = useState([])

    // UseEffect para consultar la API
    useEffect(() => {
        let mounted = true;
        const consultarAPI = async () => {
            const productosConsulta = await clienteAxios.get('/productos');
            if(mounted){
                guardarProductos(productosConsulta.data);
            }            
        }
        consultarAPI();

        return()=>{
            mounted = false;
        }

    }, [productos])

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