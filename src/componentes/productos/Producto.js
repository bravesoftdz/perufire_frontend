import React from 'react';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import clienteAxios from '../../config/axios'

/* Material UI */
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Brush from '@material-ui/icons/Brush';
import Delete from '@material-ui/icons/Delete';


function Producto({productos}){

    const {_id,codigo,producto,resistencia,obraProducto,imagen} = productos

        // Eliminar Cliente
        const eliminarProducto = idProducto => {
            Swal.fire({
                title: '¿Estás seguro de eliminar el producto?',
                text: "Un producto eliminado, no se puede recuperar",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Eliminar'
              }).then((result) => {
                if (result.value) {
                 clienteAxios.delete(`/productos/${idProducto}`)
                    .then(res => {
                        if(res.status === 200){
                            Swal.fire(
                                'Eliminado!',
                                res.data.mensaje,
                                'success'
                            )
                        }
                    })
                }
            })
        }


    return(
        <TableBody>
            <TableRow className="fila">
                <TableCell className="celdas"><img width="35px" src={`${process.env.REACT_APP_BACKEND_URL}/${imagen}`} alt='imagen'/></TableCell>
                <TableCell className="celdas">{codigo}</TableCell>
                <TableCell className="celdas">{producto}</TableCell>
                <TableCell className="celdas">{resistencia}</TableCell>
                <TableCell className="celdas">{obraProducto}</TableCell>
                <TableCell className="celdas"><Link to={`/productos/editar/${_id}`}><Brush className="boton-editar"/></Link></TableCell>
                <TableCell className="celdas">
                <Link to="/productos"
                onClick={() => eliminarProducto(_id)}
                >
                <Delete className="boton-eliminar"/>
                </Link>
                </TableCell>
            </TableRow>
        </TableBody>
    )
}

export default Producto;