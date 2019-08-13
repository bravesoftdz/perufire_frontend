import React, { useEffect, useState, Fragment } from 'react'
import {Link} from 'react-router-dom';

/* Axios */
import clienteAxios from '../../config/axios'

/* Componentes */
import Cliente from './Cliente'

/* Material UI */
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddClient from '@material-ui/icons/PersonAdd';

function Clientes() {

    // Trabajamos con el State
    // clientes = state ; guardarClientes = funcion para guardar el state
    const [clientes, guardarClientes] = useState([]);

    const consultarAPI = async () => {
        const clientesConsulta = await clienteAxios.get('/clientes');
        // console.log(clientesConsulta);
        guardarClientes(clientesConsulta.data)

    }

    useEffect(() => {
        consultarAPI();
    }, [clientes]);

    return (
        <Fragment>
            <Paper className="contenedor-tabla">
                <div className="icono-tabla">
                    <div>
                    <Link to="/clientes/nuevo"><AddClient className="icono-table" /></Link>
                    </div>
                    <div className="titulo-tabla">
                        Tablas de Clientes
                    </div>
                </div>
                <div>
                   <div className="responsive-table">
                   <Table className="tabla">
                        <TableHead className="cabecera-tabla">
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Apellido</TableCell>
                                <TableCell>Empresa</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Telefono</TableCell>
                                <TableCell>Editar</TableCell>
                                <TableCell>Eliminar</TableCell>
                            </TableRow>
                        </TableHead>
                        {clientes.map(cliente => {
                            return (
                                <Cliente
                                    key={cliente._id}
                                    cliente={cliente}
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

export default Clientes;