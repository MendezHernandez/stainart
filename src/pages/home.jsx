import Navbar from "../components/Navbar.jsx"
import MenuAmbitos from "../components/MenuAmbitos.jsx";
import Publicacion from "../components/Publicacion.jsx";

function Home() {
    return(
        <>
            <Navbar />
            <MenuAmbitos home = 'link-activo'  />
            <Publicacion />
        </>
    );
}

export default Home;