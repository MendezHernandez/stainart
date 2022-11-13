import '../styles/menuAmbitos.css'

const MenuAmbitos = (props) => {
    return (
        <div className='scroll-ambitos'>
            <a href="" id={props.home}>Home</a>
            <a href="">Artistas</a>
            <a href="">En venta</a>
            <a href="">Pintura</a>
            <a href="">Dibujo</a>
            <a href="">Acuarela</a>
            <a href="">Escultura</a>
            <a href="">Serigrafia</a>
            <a href="">Mixto</a>
        </div>
    );
}

export default MenuAmbitos;