//imagenes
import rompiendo from '../imgs/rompiendo_el_tiempo.jpg'
import Springtrap from '../imgs/Springtrap.jpg'
import prisas from '../imgs/prisas.jpg'
import noche from '../imgs/noche.jpg'
import ojito from '../imgs/ojito.jpg'

//Foto perfil
import ojo from '../imgs/ojo.jpg'
import lenin from '../imgs/lennin.jpg'
import Van from '../imgs/Van.jpg'

export const PublicacionesData = [
    {
        id: 1,
        foto_artista: ojo,
        autor: 'Jonathan Méndez',
        fecha:  '15/12/2019',
        img: rompiendo,
        nombreObra: 'Rompiendo el tiempo',
        ambito: 'Dibujo',
        statusVenta: 1,
        precio: '$2000'
    },
    {
        id: 2,
        foto_artista: lenin,
        autor: 'Lenin Alberto',
        fecha:  'No se la verdad',
        img: prisas,
        nombreObra: 'El prisas',
        statusVenta: 0,
        ambito: 'Dibujo',
    },
    {
        id: 3,
        foto_artista: ojo,
        autor: 'Jonathan Méndez',
        fecha:  '13/11/2022',
        img: Springtrap,
        nombreObra: 'Springtrap sin terminar',
        ambito: 'Dibujo',
        ventaS: 1,
        precio: '$5000'
    },
    {
        id: 4,
        foto_artista: Van,
        autor: 'vincent van gogh',
        fecha:  '1889',
        img: noche,
        nombreObra: 'Noche estrellada',
        statusVenta: 0,
        ambito: 'Pintura',
    },
    {
        id: 5,
        foto_artista: ojo,
        autor: 'Jonathan Méndez',
        fecha:  '15/10/2021',
        img: ojito,
        nombreObra: 'Ojito nocturno',
        statusVenta: 0,
        ambito: 'Dibujo',
    },
]
