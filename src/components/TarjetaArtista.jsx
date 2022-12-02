import '../styles/tarjetaArtista.css'
import { ArtistasData } from './ArtistasData';

const TarjetaArtista = () => {
    return(
        <section className="seccion-tarjetas-artistas">
            {ArtistasData.map((item) => {
                return(
            <div className="tarjeta-artista">
                <div className='contenedor-img'>
                    <img src={item.fotoArtista} alt="imagen_artista" />
                </div>
                <h2>{item.autorNombre}</h2>
                <div className='contenedor-boton-seguir'>
                    <button>Seguir</button>
                    <p>Obras: {item.obras}</p>
                </div>
            </div>
            );
        })}
        </section>
    );
}

export default TarjetaArtista;