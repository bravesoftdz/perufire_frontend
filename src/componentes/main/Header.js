import React, { Fragment,useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logotipo from '../img/logotipo.png'

import { PageContext } from '../../context/PageContext'

const Header = (props) => {

    // Utilizar valores del context
    const [auth, guardarAuth] = useContext(PageContext);

    const usuario = auth.credenciales.email

    const cerrarSesion = () => {
        // auth.auth = false, token se remueve
        guardarAuth({
          credenciales: '',
          token: '',
          auth: false
        })
    
        localStorage.setItem('token','');
    
        // redirecionamos
        props.history.push('/login')
      }

    return (
        <Fragment>
            <div className="navegacion">
                <div className="contenedor">
                    <div className="contenedor-menu">
                        <div className="principal-logo">
                            <img src={logotipo} alt="" />
                            <div className="text-logo">
                                <span>PERUFIRE</span>
                            </div>
                        </div>
                        {!auth.auth ? (
                        <nav className="mynav">
                            <ul>
                                <li><Link to="/login">Iniciar Sesion</Link></li>
                                <li><Link to="/crear-cuenta">Registrate</Link></li>
                            </ul>
                        </nav>
                        ) : null }
                        {auth.auth && usuario !== 'enriquecutisaca@gmail.com' ? (
                        <nav className="mynav">
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/">Buscador</Link></li>
                                <li><Link to="/">Emprendemos</Link></li>
                                <li><Link to="/">Contacto</Link></li>
                                <li><Link onClick={cerrarSesion} to="/clientes">Cerrar Sesion</Link></li>
                            </ul>
                        </nav>
                        ) : null }
                       {usuario === 'enriquecutisaca@gmail.com' ? (
                            <nav className="mynav">
                            <ul>
                                <li><Link>Inicio</Link></li>
                                <li><Link>Buscador</Link></li>
                                <li><Link>Emprendemos</Link></li>
                                <li><Link>Contacto</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link onClick={cerrarSesion} to="/clientes">Cerrar Sesion</Link></li>
                            </ul>
                            </nav>
                       ) : null }
                        <div className="hamburger hamburger--collapse" type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </div>
                        <span className="target"></span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(Header);