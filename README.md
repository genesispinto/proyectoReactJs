Bienvenidos a mi PetShop

Este sitio se ofrece al publico productos para el cuidado e higiene de mascotas, utilizando una base de datos creada en firebase
------------------------------------------------------------------------------
**Instalacion y archivo .env** 

Este proyecto esta realizado utilizando ReactJs por lo cual se instala utilizando el comando:
-npm install- 
y para levantar el proyecto se utiliza:
-npm start- 

Tambien es necesario crear un archivo .env en el cual se van a guardar las credenciales emitidas por firebass con este formato:

REACT_APP_apiKey= apiKey
REACT_APP_authDomain= authDomain
REACT_APP_projectId= projectId
REACT_APP_storageBucket= storageBucket
REACT_APP_messagingSenderId= messagingSenderId
REACT_APP_appId= appId
-------------------------------------------------------------------------------
**Formato en firebase del producto:**

Existen dos colecciones:
1. coleccion 'products': Contiene la informacion de cada producto, para llenarla se deben agregar los siguientes campos
    -id: Generado directamente desde firebase
    -categoryId: Este campo debe identificar categoria del producto. Ejemplo: 'perros' o 'gatos'
    -description: Este campo contiene una descripcion del producto
    -pictureUrl: La imagen del producto 
    -price: Precio
    -stock: Unidades disponibles
    -title: Nombre del producto
2. coleccion 'category': Contiene las categorias de los productos que se mostraran en la ruta, para llenarla se deben agregar los siguientes campos:
    -id: categoria de los productos
    - description: mismo nombre de categorias 
    **Ejemplo** id: 'perros' description: 'perros
---------------------------------------------------------------------------------
**Componentes del proyecto**

1. **NavBar** Se traen las categorias desde firebase de la coleccion Category y se crean los links con todas estas para tener una barra de navegacion; tambien se incluye el CarWidget y una imagen representativa de la marca.
2. **CarWidget** Componente en el cual se puede visualizar la imagen del carrito y el nro de productos que estan en el siemmpre y cuando este numero sea mayor que cero.
3. **ItemListContainer** Componente que se encarga de hacer la peticion de la informacion de los productos a firebase y enviarlas al componente ItemList
4. **ItemList** Componente que renderiza los productos y los envia a componente Item
5. **Item** Componente que muestra la tarjeta de cada producto, mostrando su imagen, el nombre y un boton con un link que envia al usuario al detalle de el producto.
6. **ItemDetailContainer** Componente que hace una nueva consulta a firebase para buscar el producto clickeado por el usuario y enviarlo al componente ItemDetail
7. **ItemDetail** Recibe la informacion del producto y lo muestra con el detalle correspondiente a este, permite al usurio colocar las unidades que necesita del producto y agregarlas al carrito
8. **ItemCount** Se encarga de incrementar o decrementar el valor de los productos que el usuario este manipulando.
9. **Cart** Componente que recorre el carrito y envia contenido a CartItem, de no tener ningun producto muestra un link para ir al inicio, tambien contiene un boton para limpiar el carrito y uno para seguir al siguiente paso de la compra
10. **CartItem** Componente que se encarga de mostrar cada producto que esta en el corrito con una breve descripcion de los datos mas importantes de este. Tambien tiene un boton que permite eliminar el producto del carro
11. **BuyerData** Componente que por medio de un formulario pide al usuario los datos sus datos.
12. **Order** Genera numero de orden de compra, graba en firebase en la colleccion Orden los datos de la compra y devuelve al usuario el codigo de la transaccion.
13. **CartContext** Se utiliza para almacenar funciones o datos que puedan ser ocupados por todos los componentes.


