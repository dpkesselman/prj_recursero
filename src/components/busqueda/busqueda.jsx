import React from "react";
import './busqueda.css';

function Busqueda(){
    return(
        <div className='formBusqueda'>
            <h2>Búsqueda</h2>
            <form>
                <div className='datos'>
                    <div className='datos1'>
                        <h3>País</h3>
                        &nbsp;&nbsp;
                            <select>
                                <option value="Argentina">Argentina</option>
                                <option value="Chile">Chile</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Mexico">México</option>
                            </select>
                            &nbsp;&nbsp;
                        <h3>Ciudad</h3>
                            &nbsp;&nbsp;
                            <select>
                            </select>
                    </div>
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <div className='datos2'>
                        <h3>Profesión</h3>
                            &nbsp;&nbsp;
                            <select>
                                <option value="Nutrición">Nutrición</option>
                                <option value="Psicología">Psicología</option>
                                <option value="Sexología">Sexología</option>
                            </select>
                        &nbsp;&nbsp;
                        <h3>Especialidad</h3>
                            &nbsp;&nbsp;
                            <select>
                            </select>
                    </div>
                </div>
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                <div>
                    <button className='boton'>Registrar</button>
                </div>
            </form>
        </div>
    )
}

export default Busqueda;