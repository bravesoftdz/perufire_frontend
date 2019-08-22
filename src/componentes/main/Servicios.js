import React, { Fragment } from 'react'

/*Material Icons*/
import Domain from '@material-ui/icons/Domain';
import Puerta from '@material-ui/icons/MeetingRoomOutlined';
import Seguridad from '@material-ui/icons/VerifiedUser';
import Contacto from '@material-ui/icons/ContactPhone';

const Servicios = () => {
    return (
        <Fragment>
            <section className="servicios">
                <div className="contenedor">
                    <p className="subtitulo-servicios">Lo mejor de nosotros</p>
                    <h2 className="titulo-servicios">Nuestros servicios</h2>
                    <div className="contenedor-servicios">
                        <div className="box-servicio">
                            <Domain className="icono-servicio" />
                            <p>lo mejor de nosotros para ti,siempre por la eternidad</p>
                        </div>
                        <div className="box-servicio">
                            <Puerta className="icono-servicio" />
                            <p>lo mejor de nosotros para ti,siempre por la eternidad</p>
                        </div>
                        <div className="box-servicio">
                            <Seguridad className="icono-servicio" />
                            <p>lo mejor de nosotros para ti,siempre por la eternidad</p>
                        </div>
                        <div className="box-servicio">
                            <Contacto className="icono-servicio" />
                            <p>lo mejor de nosotros para ti,siempre por la eternidad</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
            );
       }
        
export default Servicios;