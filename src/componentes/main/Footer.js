import React, { Fragment } from 'react'
import { Button } from '@material-ui/core'
import logotipo from '../img/logotipo.png'

import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer" id="inicio">
                <div className="perufire">
                    <h1>PERUFIRE DATABASE</h1>
                </div>
                <div className="contenedor">
                    <div className="contenedor-footer">
                        <div className="contenedor-contacto">
                            <p className="subtitulo-contacto">Mas cerca de ti</p>
                            <h2 className="titulo-contacto">Contactenos</h2>
                            <div className="informacion-contacto">
                                <p>lo mejor de nosotros para ti,siempre por la eternidad lo mejor de nosotros para ti,siempre por la eternidad lo mejor de nosotros para ti,siempre por la eternidad lo mejor de nosotros para ti,siempre por la eternidad </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-contacto">
                    <div className="contenedor">
                        <form className="formulario">
                            <div className="campo-contacto">
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="campo-contacto">
                                <input type="text" placeholder="Empresa" />
                            </div>
                            <div className="campo-contacto">
                                <input type="text" placeholder="Celular" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="boton-contacto">
                    <Button className="bg-contacto">
                        Proximamente
                    </Button>
                </div>
                <div className="footer-principal">
                    <div className="contenedor">
                        <div className="contenedor-footer">
                            <div className="logo-footer">
                                <div className="img-footer">
                                    <img src={logotipo} alt="" />
                                </div>
                                <div className="titulo-footer">
                                    PERUFIRE
                                </div>
                            </div>
                            <div className="footer-menu">
                                <ul>
                                    <li>Honestidad</li>
                                    <li>Seguridad</li>
                                    <li>Progreso</li>
                                    <li>Eventos</li>
                                </ul>
                            </div>
                            <div className="footer-contacto">
                                <ul>
                                    <Email className="icon-footer" /><li>rhaegarcode@gmail.com</li>
                                    <Phone className="icon-footer" /><li>930465230</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="contenedor">
                        <div className="contenedor-footer">
                            <div className="mensaje-footer">
                                Siempre emprendedores
                                </div>
                            <div className="footer-contacto">
                                <div className="copy-footer">
                                  2019 / Todos los derechos reservados
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;