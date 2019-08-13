import React from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import clienteAxios from '../../config/axios'

/* Material UI */
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Brush from '@material-ui/icons/Brush';
import Delete from '@material-ui/icons/Delete';

function Cliente({cliente}){
    const {_id,nombre,apellido,empresa,email,telefono} = cliente;

    // Eliminar Cliente
    const eliminarCliente = idCliente => {
        Swal.fire({
            title: '¿Estás seguro de eliminar el Cliente?',
            text: "Piensalo muy bien",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.value) {
             clienteAxios.delete(`/clientes/${idCliente}`)
                .then(res => {
                    Swal.fire(
                        'Eliminado!',
                        res.data.mensaje,
                        'success'
                    )
                })
            }
        })

    }

    return(
        <TableBody>
            <TableRow className="fila">
                <TableCell className="celdas">{nombre}</TableCell>
                <TableCell className="celdas">{apellido}</TableCell>
                <TableCell className="celdas">{empresa}</TableCell>
                <TableCell className="celdas">{email}</TableCell>
                <TableCell className="celdas">{telefono}</TableCell>
                <TableCell className="celdas"><Link to={`/clientes/editar/${_id}`}><Brush className="boton-editar"/></Link></TableCell>
                <TableCell className="celdas">
                <Link to=""
                onClick={() => eliminarCliente(_id)}
                >
                <Delete className="boton-eliminar"/>
                </Link>
                </TableCell>
            </TableRow>
        </TableBody>
    )
}

export default Cliente;