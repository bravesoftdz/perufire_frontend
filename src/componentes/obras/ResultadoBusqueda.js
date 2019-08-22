import React, { Fragment } from 'react';

/* Material UI */

import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Delete from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';


function ResultadoBusqueda({ producto, actualizarCantidad, index, eliminarProducto, actualizarAmbiente }) {
    return (

        <Fragment>
            <TableBody>
                <TableRow className="fila">
                    <TableCell className="celdas">{producto.codigo}</TableCell>
                    <TableCell className="celdas">{producto.producto}</TableCell>
                    <TableCell className="celdas">{producto.resistencia}</TableCell>
                    <TableCell className="celdas">
                        <TextField className="number-text-field"
                            id="outlined-number"
                            label="Ambiente"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => actualizarAmbiente(e.target.value, index)}
                            margin="normal"
                            variant="outlined"
                        />
                    </TableCell>
                    <TableCell className="celdas">
                        <TextField className="number-text-field"
                            id="outlined-number"
                            label="Cantidad"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => actualizarCantidad(e.target.value, index)}
                            margin="normal"
                            variant="outlined"
                        />
                    </TableCell>
                    <TableCell className="celdas">
                        <Button className="boton-eliminarProducto"
                            type="submit"
                            onClick={() => eliminarProducto(producto.producto)}
                        >
                            <Delete className="boton-eliminar" />
                        </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Fragment>


    )
}

export default ResultadoBusqueda;