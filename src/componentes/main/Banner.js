import React, { Fragment } from 'react'
import compuDashboard  from '../img/compu-dashboard.png'

const Header = () => {
    return (
        <Fragment>
            <div className="banner" id="inicio">
                <div className="contenedor">
                    <div className="contenedor-banner">
                        <div className="imagen-banner">
                            <img src={compuDashboard} alt=""/>
                        </div>  
                        <div className="informacion-banner">
                            <p>Tus proyectos estan más seguros ahora y siempre, gracias a nuestro data center!</p>
                        </div>      
                    </div>
                </div>
            </div>
        </Fragment>
            );
       }
        
export default Header;