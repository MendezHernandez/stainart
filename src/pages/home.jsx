import Navbar from "../components/Navbar.jsx"
import MenuAmbitos from "../components/MenuAmbitos.jsx";

function Home() {
    return(
        <>
            <Navbar />
            <MenuAmbitos home = 'link-activo'  />
        </>
    );
}

export default Home;