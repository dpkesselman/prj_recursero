import React from 'react';
import './App.css';
import Busqueda from './components/busqueda/busqueda';
import Carga from './components/carga/carga';
import reddiversidad1edit from './imgs/reddiversidad1edit.jpg';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <div className='container'>
          <h1>Recursero Diversidad</h1>
          <div className='imagen' align="center">
            <img src={ reddiversidad1edit } height='200' width='200'/>
          </div>
          <br/>
          <NavLink to='/'>Inicio</NavLink>
          &nbsp;&nbsp;
          <NavLink to='/busqueda' activeStyle= {{color: 'white'}}>Búsqueda</NavLink>
          &nbsp;&nbsp;
          <NavLink to='/carga' activeStyle= {{color: 'white'}}>Carga</NavLink>
          &nbsp;&nbsp;

          <Switch>
            <Route path='/busqueda' component={Busqueda}/>
            <Route path='/carga' component={Carga}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
