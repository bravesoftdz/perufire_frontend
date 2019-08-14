import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

/*** Layout */
import Header from './componentes/layout/Header'
import Sidebar from './componentes/layout/Sidebar'

import Clientes from './componentes/clientes/Clientes'
import NuevoCliente from './componentes/clientes/NuevoCliente'
import EditarCliente from './componentes/clientes/EditarCliente';

import Productos from './componentes/productos/Productos'
import NuevoProducto from './componentes/productos/NuevoProducto';
import EditarProducto from './componentes/productos/EditarProducto'

import Obras from './componentes/obras/Obras'


function App() {
  return (
    <Router>
      <Fragment>
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
              <div className="wrapper">
                  <div className="contenedor-wrapper">
                    <Switch>
                        <Route exact path="/clientes" component={Clientes} />
                        <Route exact path="/clientes/nuevo" component={NuevoCliente} />
                        <Route exact path="/clientes/editar/:id" component={EditarCliente} />

                        <Route exact path="/productos" component={Productos} />
                        <Route exact path="/productos/nuevo" component={NuevoProducto} />
                        <Route exact path="/productos/editar/:id" component={EditarProducto} />

                        <Route exact path="/obras" component={Obras} />
                    </Switch>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
