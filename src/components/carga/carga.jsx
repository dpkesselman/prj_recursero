import React from "react";
import './carga.css';

function Carga(GrabarRegistro, GrabarPais, GrabarCiudad, GrabarProfesion, GrabarEspecialidad, GrabarNombre, GrabarContacto, GrabarComentario){
    return(
        <div className='formCarga'>    
            <h2>Carga de datos</h2>    
            <form onSubmit={GrabarRegistro}>
                <div className='datos1'>
                    <h3>País</h3>               
                    &nbsp;&nbsp;
                    <input type='text' onChange={GrabarPais} placeholder='Ingrese país' required/>
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <h3>Ciudad</h3>
                    &nbsp;&nbsp;
                    <input type='text' onChange={GrabarCiudad} placeholder='Ingrese ciudad' required/>
                </div>
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                <div className='datos2'>
                    <h3>Profesión</h3>
                    &nbsp;&nbsp;
                    <input type='text' onChange={GrabarProfesion} placeholder='Ingrese profesión' required/>
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <h3>Especialidad</h3>
                    &nbsp;&nbsp;
                    <input type='text' onChange={GrabarEspecialidad} placeholder='Ingrese especialidad' required/>
                </div>
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                <div className='datos3'>
                    <h3>Nombre</h3>
                    &nbsp;&nbsp;
                    <input type='text' onChange={GrabarNombre} placeholder='Ingrese nombre completo o nombre de la organización' required/>
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    <h3>Contacto</h3>
                    &nbsp;&nbsp;
                    <textarea type='text' onChange={GrabarContacto} placeholder='Ingrese modo de contacto' required/>
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                </div>
                <div className='datos4'>
                    <h3>Comentarios</h3>
                    <textarea type='text' onChange={GrabarComentario} placeholder='Ingrese comentario adicional' required/>
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;
                </div>
                &nbsp;&nbsp;
                <div>
                    <button className='boton'>Registrar</button>
                </div>
            </form>
        </div>
    )
}

export default Carga;