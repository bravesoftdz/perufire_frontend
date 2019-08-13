import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import logotipo from '../img/logotipo.png'

/* Material UI */

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Dashboard from '@material-ui/icons/Dashboard';
import Supervised from '@material-ui/icons/SupervisorAccountRounded';
import Business from '@material-ui/icons/Business';
import Product from '@material-ui/icons/Style';

const Sidebar = () => {
    return (
        <Fragment>
            <div className="cabecera-sidebar">
                <Link className="logo" to="/"><img className="logo-img" alt="" src={logotipo} /></Link>
                <Link className="texto-logo" to="/">PERUFIRE</Link>
            </div>
            <div className="contenedor-sidebar">
                    <MenuList className="padding">
                        <Link className="link-button" to="/">
                        <MenuItem className="fuego">
                                <ListItemIcon>
                                    <Dashboard className="blanco" />
                                </ListItemIcon>
                                <Typography className="link" variant="inherit">Dashboard</Typography>
                    
                        </MenuItem>
                        </Link>
                        <Link className="link-button" to="/clientes">
                        <MenuItem className="fuego">
                                <ListItemIcon>
                                    <AssignmentInd className="blanco" />
                                </ListItemIcon>
                                <Typography className="link" variant="inherit">Clientes</Typography>
                        </MenuItem>
                        </Link>
                        <Link className="link-button" to="/productos">
                        <MenuItem className="fuego">
                                <ListItemIcon>
                                    <Product className="blanco" />
                                </ListItemIcon>
                                <Typography className="link" variant="inherit">Productos</Typography>
                        </MenuItem>
                        </Link>
                        <Link className="link-button" to="/obras">
                        <MenuItem className="fuego">
                                <ListItemIcon>
                                    <Business className="blanco" />
                                </ListItemIcon>
                                <Typography className="link" variant="inherit">Obras</Typography>
                        </MenuItem> 
                        </Link>
                        <Link className="link-button" to="/usuarios">
                            <MenuItem className="fuego">
                            
                                    <ListItemIcon>
                                        <Supervised className="blanco" />
                                    </ListItemIcon>
                                    <Typography className="link" variant="inherit">Usuarios</Typography>   
                            </MenuItem>
                        </Link>
                    </MenuList>
            </div>
        </Fragment>
    );
}

export default Sidebar;