import Navbar from "../components/Navbar";
import MenuAmbitos from "../components/MenuAmbitos";
import EncabezadoArtistas from "../components/EncabezadoArtistas";
import TarjetaArtista from "../components/TarjetaArtista";


function Artistas() {
    return(
        <>
            <Navbar /> 
            <MenuAmbitos artistas = 'link-activo'/>
            <EncabezadoArtistas />
            <h3 className="resultados">Resultados: 3</h3>
            <TarjetaArtista />
        </>
        
    );
}


export default Artistas;