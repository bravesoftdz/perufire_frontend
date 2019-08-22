import React, { Fragment } from 'react'
import Header from './Header'
import Banner from './Banner'
import Servicios from './Servicios'
import Emprendiendo from './Emprendiendo'
import Buscador from './Buscador';
import Footer from './Footer';

const Principal = () => {
    return ( 
        <Fragment>
            <div className="principal-perufire">
                <Header />
                <Banner />
                <Servicios />
                <Emprendiendo />
                <Buscador />
                <Footer />
            </div>
        </Fragment>
     );
}
 
export default Principal;