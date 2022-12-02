import { Link } from 'react-router-dom';
import '../styles/menuAmbitos.css'

const MenuAmbitos = (props) => {
    return (
        <div className='scroll-ambitos'>
            <Link to="/Home" id={props.home}>Home</Link>
            <Link to="/Artistas" id={props.artistas}>Artistas</Link>
            <a href="/Home">En venta</a>
            <a href="/Home">Pintura</a>
            <a href="/Home">Dibujo</a>
            <a href="/Home">Acuarela</a>
            <a href="/Home">Escultura</a>
            <a href="/Home">Serigrafia</a>
            <a href="/Home">Mixto</a>
        </div>
    );
}

export default MenuAmbitos;