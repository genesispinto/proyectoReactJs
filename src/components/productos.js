const products = [{
    id: 1,
    title: 'Toallas absorventes',
    description: 'Paño con tela súper absorbente para perros y gatos, el poder de absorción máxima en un espacio mínimo. En sólo 0,2 centímetros de espesor, esta tela de fibra sintética proporciona la potencia máxima absorción. ',
    price: 14000,
    pictureUrl:'/imagenes/producto1.jpeg',
    categoryId: 'perros'

},
{
    id: 2,
    title: 'Alimento para perro',
    description: 'Producto libre de cereales, mono proteico, con carne siempre como primer ingrediente, solo con antioxidantes, hipo alergénico y con productos 100% naturales.',
    price: 20000,
    pictureUrl:'/imagenes/producto2.jpeg',
    categoryId: 'perros'
},
{
    id: 3,
    title: 'Shampoo',
    description: 'Shampoo formulado con aloe vera y vitamina E que entregan hidratación y protegen la piel de tu gato, dejando su pelaje limpio por más tiempo y con un agradable aroma',
    price: 12000,
    pictureUrl:'/imagenes/producto3.jpeg',
    categoryId: 'gatos'

},
{
    id: 4,
    title: 'Cepillo',
    description: 'Cepillo profesional para mascotas: el peine de alta calidad está equipado con un botón de autolimpieza para que la depilación sea más fácil y eficiente. La cuchilla de corte de acero inoxidable puede eliminar los nudos de forma segura y cómoda, no rayará el pelo de su cachorro, a su mascota le encantará cepillarlo y hará que el pelaje de su perro/gato sea brillante y saludable. No solo para mantener a su mascota limpia, sino también para proporcionar un ambiente limpio e higiénico en el hogar. ',
    price: 5000,
    pictureUrl:'/imagenes/producto4.jpeg',
    categoryId: 'gatos'

},
]

const categories =[
    {id : 'gatos' , description : 'Gatos'},
    {id : 'perros' , description : 'Perros'}
]

export const getCategories = () =>{
    return new Promise (resolve =>{
        setTimeout(()=>
            resolve(categories))
    }, 500)
}

export const getProducts = (categoryId) =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(categoryId ? products.filter(prod => prod.categoryId == categoryId) : products)
        }, 500)
    })
}

export const getProductsById = (props) =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id == props))
        }, 500)
    })
}

