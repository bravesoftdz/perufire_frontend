import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core';

/* Material UI */
import Bussines from '@material-ui/icons/Business';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';

function ResumenObra({ obra }) {


    return (
        <Fragment>
            <Paper className="contenedor-tabla">
                <div className="icono-tabla">
                    <div>
                        <Bussines className="icono-tabla-obra" />
                    </div>
                    <div className="titulo-tabla">
                        {obra.cliente.empresa}
                    </div>
                </div>
                <Grid container spacing={3}>
                    <Grid item sm={4}>
                        <div className="info">
                            <p className="bold-info">OBRA:</p>
                            {obra.obra}
                        </div>
                    </Grid>
                    <Grid item sm={4}>
                        <div className="info">
                            <p className="bold-info">FECHA DE INICIO:</p>
                            {obra.inicio}
                        </div>
                    </Grid>
                    <Grid item sm={4}>
                        <div className="info">
                            <p className="bold-info">FECHA DE ENTREGA:</p>
                            {obra.final}
                        </div>
                    </Grid>
                    <Grid item sm={12}>
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
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {obra.productos.map(articulos => (
                                            <TableRow className="fila" key={obra._id + articulos.product._id}>
                                                <TableCell className="celdas">{articulos.product.codigo}</TableCell>
                                                <TableCell className="celdas">{articulos.product.producto}</TableCell>
                                                <TableCell className="celdas">{articulos.product.resistencia}</TableCell>
                                                <TableCell className="celdas">{articulos.ambiente}</TableCell>
                                                <TableCell className="celdas">{articulos.cantidad}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Fragment>
    )
}

export default ResumenObra;