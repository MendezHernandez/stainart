import { BiSearchAlt } from "react-icons/bi";
import { HiMenu } from "react-icons/hi"

//imagenes 
import Logo from '../imgs/logo_stainart.png';
import FotoPerfil from '../imgs/ojo.jpg';

//Estilos
import '../styles/navbar.css';

function Navbar() {

    const ActiveSidebar = () => {
        alert('hola')
    };

    return(
        <nav className='navbar'>
            <section>
                <img src={Logo} alt="logo_stainart" className='logo-stainart'/>
                <form action="">
                    <input type="text" placeholder='Una obra, un artista, ¡Buscalo!' />
                    <select name="select" id="1">
                        <option value="value1">Obra</option>
                        <option value="value2">Artista</option>
                    </select>
                    <button type='submit'><BiSearchAlt className="icon-busqueda" /> <span className="buscar-p">Buscar</span></button>
                </form>
            </section>
            <section>
                <h1 className="nombre-usuario">Jonathan Méndez</h1>
                <img src={FotoPerfil} alt="Foto_perfil" className="foto-usuario" />
                <HiMenu className="menu-hamburguesa" onClick={ActiveSidebar} />
            </section>
        </nav>
    );
}

export default Navbar;