import React, { Fragment } from 'react'

/*Material UI*/
import {Button} from '@material-ui/core'

import emprendiendo from '../img/emprendiendo.png'

const Emprendiendo = () => {
    return (
        <Fragment>
            <section className="emprendiendo">
                <div className="contenedor">
                    <div className="contenedor-emprendiendo">
                        <div className="img-emprendiendo">
                            <img src={emprendiendo} alt="emprendiendo" />
                        </div>
                        <div className="info-emprendiendo">
                            <p className="subtitulo-emprendiendo">Lento pero seguros</p>
                            <h2 className="titulo-emprendiendo">Emprendemos</h2>
                            <p>lo mejor de nosotros para ti,siempre por la eternidad lo mejor de nosotros para ti,siempre por la eternidad lo mejor de nosotros para ti,siempre por la eternidad lo mejor de nosotros para ti,siempre por la eternidad </p>

                            <div className="boton-emprendiendo">
                                <Button className="bg-emprendiendo">
                                    Proximamente
                                </Button>   
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
            );
       }
        
export default Emprendiendo;