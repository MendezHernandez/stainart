import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Login () {
    return(
        <>
            <div>
                <img src="" alt="Logo_stainart" />
            </div>
            <div>
                <h1>Inicia sesion</h1>
                <form action="">
                    <FaUserCircle />
                    <input type="text" name="usuario" id="" />
                    <RiLockPasswordFill />
                    <input type="password" name="pw" id="" />
                    <button type="submit">Enviar</button> 
                </form>
                <hr />
                <h1>¿No tienes cuenta? Registrate <a href="">¡Aqui!</a></h1> 
            </div>    
        </>
    );
}

export default Login;