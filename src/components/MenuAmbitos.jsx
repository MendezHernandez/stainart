import '../styles/menuAmbitos.css'

const MenuAmbitos = (props) => {
    return (
        <div className='scroll-ambitos'>
            <a href="/Home" id={props.home}>Home</a>
            <a href="/Home">Artistas</a>
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