function Navbar() {

    const ActiveSidebar = () => {
        alert('hola')
    };

    return(
        <nav>
            <section>
                <img src="" alt="logo_stainart" />
                <form action="">
                    <input type="text" />
                    <select name="" id=""></select>
                    <input type="submit" />
                </form>
            </section>
            <section>
                <h1>Nombre del usuario</h1>
                <img src="" alt="foto_perfil_usuario"/>
                <img src="" alt="Sidebar" onClick={ActiveSidebar}></img>
            </section>
        </nav>
    );
}

export default Navbar;