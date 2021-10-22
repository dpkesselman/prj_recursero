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
        <div className='imagen'>
          <img src={ reddiversidad1edit } height='200' width='200'/>
        </div>
        <div className='header'>
          <h1>Recursero Diversidad</h1>
        </div>
        <br/>
        <div className='menu'>
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
        <div className='body'>
          <p>Bienvenides al recursero de Red Diversidad Ase Arro! <br/><br/>
          Si sos une profesionale y querés cargar tus datos en nuestra red, usá la opción de "Carga". <br/><br/>
          Si sos une paciente en búsqueda de une profesionale de la salud adecuade a tus necesidades, usá la opción de "Búsqueda".<br/>
          También podés dejarnos comentarios sobre les profesionales ya existentes en la base de datos, si ya tuviste contacto con elles.
          </p>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
