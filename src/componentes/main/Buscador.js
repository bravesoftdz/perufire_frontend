import React, { Fragment } from 'react'

/*Material UI*/
import {Button} from '@material-ui/core'
import Domain from '@material-ui/icons/Domain';
import Puerta from '@material-ui/icons/MeetingRoomOutlined';
import Seguridad from '@material-ui/icons/VerifiedUser';
import Contacto from '@material-ui/icons/ContactPhone';

const Buscador = () => {
    return (
        <Fragment>
            <section className="buscador">
                <div className="contenedor">
                    <div className="contenedor-buscador">
                        <div className="info-buscador">
                                <p className="subtitulo-buscador">Rápido y seguro</p>
                                <h2 className="titulo-buscador">Nuestro buscador</h2>
                                <p>lo mejor de nosotros para ti,siempre por la eternidad lo mejor de nosotros para ti,siempre por la eternidad lo mejor de nosotros para ti,siempre por la eternidad lo mejor de nosotros para ti,siempre por la eternidad,lo mejor de nosotros para ti,siempre por la eternidad lo mejor de nosotros para ti,siempre por la eternidad lo mejor de nosotros para ti,siempre por la eternidad lo mejor de nosotros para ti,siempre por la eternidad </p>

                                <div className="boton-emprendiendo">
                                <Button className="bg-emprendiendo">
                                    Ir al buscador
                                </Button>   
                                </div>
                            </div>
                        <div className="boxs-buscador">
                            <div className="box-buscador">
                                <Domain className="icono-buscador" />
                                <p>lo mejor de nosotros para ti,siempre por la eternidad</p>
                            </div>
                            <div className="box-buscador">
                                <Puerta className="icono-buscador" />
                                <p>lo mejor de nosotros para ti,siempre por la eternidad</p>
                            </div>
                            <div className="box-buscador">
                                <Seguridad className="icono-buscador" />
                                <p>lo mejor de nosotros para ti,siempre por la eternidad</p>
                            </div>
                            <div className="box-buscador">
                                <Contacto className="icono-buscador" />
                                <p>lo mejor de nosotros para ti,siempre por la eternidad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
            );
       }
        
export default Buscador;