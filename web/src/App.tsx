import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import Inicio from './componentes/inicio';
import Produtos from './componentes/produtos';
import Formulario from './componentes/formulario';
import Suporte from './componentes/suporte';
import Erro404 from './componentes/404'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <Breadcrumb>
          <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to='/produtos'>Produtos</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to='/suporte'>Suporte</Link></Breadcrumb.Item>
        </Breadcrumb>

        
        <Switch>
          <Route path='/' exact={true} component={Inicio}/>
          <Route path='/formulario' component={Formulario}/>
          <Route path='/produtos' component={Produtos}/>
          <Route path='/suporte' component={Suporte}/>
          <Route path='*' component={Erro404}/>
        </Switch>       

      </div>
    </BrowserRouter>
  );
}

export default App;
