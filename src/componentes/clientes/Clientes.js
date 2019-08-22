import React, { useEffect, useState, useContext, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom';

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

/* Importar Context */
import { PageContext } from '../../context/PageContext'

function Clientes(props) {

    // Trabajamos con el State
    // clientes = state ; guardarClientes = funcion para guardar el state
    const [clientes, guardarClientes] = useState([]);

    // Utilizar valores del context
    const [auth, guardarAuth] = useContext(PageContext);

    useEffect(() => {
        if (auth.token !== '') {
            let mounted = true;
            const consultarAPI = async () => {
               try {
                    const clientesConsulta = await clienteAxios.get('/clientes', {
                        headers: {
                            Authorization: `Bearer ${auth.token}`
                        }
                    });
                    if (mounted) {
                        guardarClientes(clientesConsulta.data);
                    }
               } catch (error) {
                   // Error 
                   if(error.response.status = 500){
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
    }, [clientes])

    // Si el state esta en false
    if(!auth.auth) {
        props.history.push('/login');
    }

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
                                    <TableCell>Obra(+)</TableCell>
                                    <TableCell>Obras</TableCell>
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

export default withRouter(Clientes);