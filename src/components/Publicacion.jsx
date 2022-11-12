function Publicacion() {
    return(
        <div>
            <img src="" alt="foto_publicador" />
            <h3>fecha de creacion</h3>
            <img src="" alt="foto_publicacion" />
            <h2>Nombre de obra</h2>
            <hr />
            <div>
                <h3>ambito de arte</h3>
                <span>|</span>
                <img src="" alt="icono_venta" />
                <h3><span>Estatus venta: </span>$Precio</h3>    
            </div>
            <div>
                <button>Me gusta</button>
                <button>Comentar</button>
                <button>Favoritos</button>
            </div>
        </div>
    );
}

export default Publicacion;