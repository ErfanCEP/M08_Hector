Clases

1. Producto
Descripción: Representa un producto con un nombre, precio y cantidad.
Constructor:
nombre: Nombre del producto.
precio: Precio unitario del producto.
cantidad: Cantidad del producto.
Métodos:
calcularTotal(): Calcula el total del producto multiplicando el precio por la cantidad.

2. Carrito
Descripción: Representa un carrito de compras que puede contener múltiples productos.
Constructor: Inicializa una lista vacía de productos.
Métodos:
agregarProducto(producto): Agrega un producto al carrito.
calcularTotalCarrito(): Calcula el total del carrito sumando los totales de cada producto.
vaciarCarrito(): Vacía el carrito eliminando todos los productos.

3. Usuario
Descripción: Representa un usuario que puede agregar productos a su carrito y finalizar compras.
Constructor:
nombre: Nombre del usuario.
correo: Correo electrónico del usuario.
Crea una instancia de Carrito asociada al usuario.

Métodos:
agregarProductoAlCarrito(producto): Agrega un producto al carrito del usuario.
finalizarCompra(): Calcula el total del carrito, muestra un mensaje con el total de la compra y vacía el carrito.
Funcionamiento Final del Código
Se crean dos instancias de Producto: una para una Laptop y otra para un Mouse.
Se crea una instancia de Usuario con un nombre y un correo electrónico.
Se agregan los productos (Laptop y Mouse) al carrito del usuario.
El usuario finaliza la compra, lo que calcula el total del carrito, imprime un mensaje con el total de la compra y vacía el carrito.
Este sistema permite gestionar productos y realizar compras de manera sencilla y estructurada.
