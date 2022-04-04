const products = [{
    id: 1,
    title: 'Toallas absorventes',
    description: 'Paño con tela súper absorbente para perros y gatos, el poder de absorción máxima en un espacio mínimo. En sólo 0,2 centímetros de espesor, esta tela de fibra sintética proporciona la potencia máxima absorción. ',
    price: 14000,
    pictureUrl:'./imagenes/producto1.jpeg',

},
{
    id: 2,
    title: 'Alimento para perro',
    description: 'texto',
    price: 20000,
    pictureUrl:'./imagenes/producto2.jpeg',

},
{
    id: 3,
    title: 'Shampu',
    description: 'texto',
    price: 12000,
    pictureUrl:'./imagenes/producto3.jpeg',

},
{
    id: 4,
    title: 'Cepillo',
    description: 'texto',
    price: 5000,
    pictureUrl:'./imagenes/producto4.jpeg',

},
{
    id: 5,
    title: 'Cepillo',
    description: 'texto',
    price: 5000,
    pictureUrl:'./imagenes/producto4.jpeg',

},
{
    id: 6,
    title: 'Cepillo',
    description: 'texto',
    price: 5000,
    pictureUrl:'./imagenes/producto4.jpeg',

},
{
    id: 7,
    title: 'Cepillo',
    description: 'texto',
    price: 5000,
    pictureUrl:'./imagenes/producto4.jpeg',

},


]

const getProducts = () =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}

export default getProducts