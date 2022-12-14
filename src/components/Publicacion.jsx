import { BsCoin } from "react-icons/bs"
import { PublicacionesData } from "./PublicacionesData";

import '../styles/publicacion.css'

const Publicacion = () => {
    return (
    <section className="section-publicaciones">
    {PublicacionesData.map((item) =>  {

    const StatusVenta = () => {
        if (item.statusVenta === 1) {
            return(     
                 
                <h3 className="venta"><BsCoin className="icon-moneda" /><span>En venta: </span>{item.precio}</h3>  
            );
        } else {
            <></>
        }
    }   

        return (
            <div key={item.id} className='contenedor-publicacion'>
                <div className='header-publicacion'>
                    <div className="div-icon-autor">
                        <img alt="foto_perfil" src={item.foto_artista} className="icon-autor" />
                    </div>
                    <h3 className="nombre-autor"><a href={'/home'}>{item.autor}</a></h3>
                    <h3 className="fecha-publicacion">Creacion: {item.fecha}</h3>
                </div>
                <img src={item.img} alt="foto_publicacion" className="foto-obra"/>
                <h1 className="titulo-obra">{item.nombreObra}</h1>
                <hr />
                <div className="contenedor-ambito-precio">
                    <h3>Ambito de arte: <span className="ambito-art">{item.ambito}</span></h3>
                    <StatusVenta />
                </div>
                <hr />
                <div className="footer-publicacion">
                    <button className="btn-fav">Favoritos</button>
                    <button className="btn-com">Comentar</button>
                </div>
            </div>
        )
    })}  
    </section>
    )
}

export default Publicacion;