import React from 'react';

/* Material UI */
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }));

function FormBuscarProducto(props){
    const classes = useStyles();
    return(
        <form className="busqueda-form"
            onSubmit = {props.buscarProducto}
        >
             <div className={classes.search}>
                <div>
                <Button type="submit" variant="outlined" className="boton-busqueda">
                    <SearchIcon className="icon-buscar" />
                </Button>
                </div>
                <InputBase
                type="text"
                placeholder="Buscar producto"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                name="productos"
                onChange={props.leerDatosBusqueda}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        </form>
    )
}

export default FormBuscarProducto;