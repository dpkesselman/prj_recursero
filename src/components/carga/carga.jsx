import React from "react";
import './carga.css';

function Carga(GrabarRegistro, GrabarPais, GrabarCiudad, GrabarProfesion, GrabarEspecialidad, GrabarNombre, GrabarContacto, GrabarComentario){
    return(
        <div className='.formCarga'>    
            <h2>Carga de datos</h2>    
            <form onSubmit={GrabarRegistro}>
                <h3>País</h3>
                <input type='text' onChange={GrabarPais} placeholder='Ingrese país' required/>
                <h3>Ciudad</h3>
                <input type='text' onChange={GrabarCiudad} placeholder='Ingrese ciudad' required/>
                <h3>Profesión</h3>
                <input type='text' onChange={GrabarProfesion} placeholder='Ingrese profesión' required/>
                <h3>Especialidad</h3>
                <input type='text' onChange={GrabarEspecialidad} placeholder='Ingrese especialidad' required/>
                <h3>Nombre</h3>
                <input type='text' onChange={GrabarNombre} placeholder='Ingrese nombre completo o nombre de la organización' required/>
                <h3>Contacto</h3>
                <textarea type='text' onChange={GrabarContacto} placeholder='Ingrese modo de contacto' required/>
                <h3>Comentarios</h3>
                <textarea type='text' onChange={GrabarComentario} placeholder='Ingrese comentario adicional' required/>
                <br/>
                <br/>
                <button>Registrar</button>
            </form>
        </div>
    )
}

export default Carga;