import { FaUserCircle } from "react-icons/fa";
import { BsCoin } from "react-icons/bs"

//imagenes
import rompiendo from '../imgs/rompiendo_el_tiempo.jpg'

import '../styles/publicacion.css'

const Publicacion = () => {
    return(
        <section className="section-publicaciones">
            <div className='contenedor-publicacion'>
                <div className='header-publicacion'>
                    <div className="div-icon-autor">
                        <FaUserCircle className="icon-autor" />
                    </div>
                    <h3 className="nombre-autor"><a href="">Jonathan Méndez</a></h3>
                    <h3 className="fecha-publicacion">Creacion: 15/12/2019</h3>
                </div>
                <img src={rompiendo} alt="foto_publicacion" className="foto-obra"/>
                <h1 className="titulo-obra">Rompiendo el tiempo</h1>
                <hr />
                <div className="contenedor-ambito-precio">
                    <h3>Ambito de arte: <span className="ambito-art">Dibujo</span></h3>
                    <h3 className="venta"><BsCoin className="icon-moneda" /><span>En venta: </span>$2000</h3>    
                </div>
                <hr />
                <div className="footer-publicacion">
                    <button className="btn-fav">Favoritos</button>
                    <button className="btn-com">Comentar</button>
                </div>
            </div>
        </section>
    );
}

export default Publicacion;