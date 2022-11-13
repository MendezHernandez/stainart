import { Link } from "react-router-dom";

//Estilos 
import "../styles/login.css"

//Imagenes
import Logo_stainart from "../imgs/logo_stainart.png"

function Login () {
    return(
        <div className="contenedor-login">
            <div className="login-left">
                <img src={Logo_stainart} alt="Logo_stainart" className="logo-stainart" />
            </div>
            <div className="login-right">
                <div className="tarjeta-login">
                    <h1>Inicia sesion</h1>
                    <form action="">
                        <input type="text" name="usuario" id="" placeholder="Usuario"/>  
                        <input type="password" name="pw" id="" placeholder="Contraseña" />
                        <button className="btn-ingresar">
                            <Link to={'/Home'} type="submit" className="link">Ingresar</Link> 
                        </button>   
                    </form>
                    <hr />
                    <h3 className="txt-registro">¿No tienes cuenta? Registrate <span>¡Aqui!</span></h3>
                </div> 
            </div>    
        </div>
    );
}


export default Login;