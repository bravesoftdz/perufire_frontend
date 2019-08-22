import React, { Fragment, useContext } from 'react';
import { PageContext, PageProvider } from './context/PageContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

/*** Layout */
import Header from './componentes/layout/Header'
import Sidebar from './componentes/layout/Sidebar'

/*** Pricipal */
import Principal from './componentes/main/Principal'

/*** Dashboard */
import Clientes from './componentes/clientes/Clientes'
import NuevoCliente from './componentes/clientes/NuevoCliente'
import EditarCliente from './componentes/clientes/EditarCliente';

import Productos from './componentes/productos/Productos'
import NuevoProducto from './componentes/productos/NuevoProducto';
import EditarProducto from './componentes/productos/EditarProducto'

import Obras from './componentes/obras/Obras'
import NuevaObra from './componentes/obras/NuevaObra';
import ObrasCliente from './componentes/obras/ObrasCliente'

import Login from './componentes/auth/Login'
import LoginAdmin from './componentes/auth/LoginAdmin'
import CrearCuenta from './componentes/auth/CrearCuenta';

function App() {

  // Utulizando context en el componente
  const [auth, guardarAuth] = useContext(PageContext)

  return (
    <Router>
      <Fragment>
        <PageProvider value={[auth,guardarAuth]}>
              <div id="root">
            <div className="principal">
                 <div>
                 <div className="sidebar color-sidebar">
                   <Sidebar />
                   <div className="img-sidebar"></div>
                 </div>
               </div>  
                <div className="principal-wrapper">
                <Header />
                </div>          
                <div className="wrapper">
                  <div className="contenedor-wrapper">
                    <Switch>
                      <Route exact path="/" component={Principal} />
                      <Route exact path="/clientes" component={Clientes} />
                      <Route exact path="/clientes/nuevo" component={NuevoCliente} />
                      <Route exact path="/clientes/editar/:id" component={EditarCliente} />

                      <Route exact path="/productos" component={Productos} />
                      <Route exact path="/productos/nuevo" component={NuevoProducto} />
                      <Route exact path="/productos/editar/:id" component={EditarProducto} />

                      <Route exact path="/obras" component={Obras} />
                      <Route exact path="/cliente/obra/nuevo/:id" component={NuevaObra} />
                      <Route exact path="/obras/cliente/:id" component={ObrasCliente} />        
                      <Route exact path="/login" component={Login} /> 
                      <Route exact path="/login/admin" component={LoginAdmin} />
                      <Route exact path="/crear-cuenta" component={CrearCuenta} />            
                    </Switch>
                  </div>
                </div>
            </div>
          </div>     
        </PageProvider>
      </Fragment>
    </Router>
  );
}

export default App;
