import React from "react";

export default function Articulos({titulo,fecha,descripcion,imagen}){
    console.log(titulo,fecha,descripcion,imagen);
    return (
        <div className="w3-third w3-container w3-margin-bottom">
            <img src={imagen} alt="Norway" style={{width:"300px",height:"200px"}} className="w3-hover-opacity"/>
                <div className="w3-container w3-white">
                    <h2 className="titulo">{titulo.slice(0,50)+"..."}</h2>
                    <p className="fecha-articulo"><b>{fecha}</b></p>
                    <p>{descripcion.slice(0,50)}</p>
                </div>
        </div>
    );
}