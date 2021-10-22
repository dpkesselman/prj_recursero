import React from "react";
import './busqueda.css';

function Busqueda(){
    return(
        <div className='.formBusqueda'>
            <form>
            <h2>Búsqueda</h2>
            <h3>País</h3>
                <select>
                    <option value="Argentina">Argentina</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Mexico">México</option>
                </select>
            <h3>Ciudad</h3>
                <select>
                </select>
            <h3>Profesión</h3>
                <select>
                    <option value="Nutrición">Nutrición</option>
                    <option value="Psicología">Psicología</option>
                    <option value="Sexología">Sexología</option>
                </select>
            <h3>Especialidad</h3>
                <select>
                </select>
            </form>
        </div>
    )
}

export default Busqueda;