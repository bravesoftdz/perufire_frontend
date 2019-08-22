import React, {useContext} from 'react'
import {withRouter} from 'react-router-dom'

/* Estilos Material UI */
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import {PageContext} from '../../context/PageContext'

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  

const Header = (props) => {

  const [auth,guardarAuth] = useContext(PageContext);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const cerrarSesion = () => {
    // auth.auth = false, token se remueve
    guardarAuth({
      token: '',
      auth: false
    })

    localStorage.setItem('token','');

    // redirecionamos
    props.history.push('/login')
  }

  const perufire = () => {
    props.history.push('/')
  }

  if(!auth.token) return null

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={cerrarSesion}>Cerrar Sesion</MenuItem>
                <MenuItem onClick={perufire}>Perufire</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </header>
    );
}

export default withRouter(Header);