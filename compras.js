class Producto {


  /**
   * Creates an instance of Producto.
   * @param {*} nombre
   * @param {*} precio
   * @param {*} cantidad
   * @memberof Producto
   */
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  } 
  /**
   *
   *
   * @return {*} 
   * @memberof Producto
   */
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

class Carrito {

  /**
   * Creates an instance of Carrito.
   * @memberof Carrito
   */
  constructor() {
    this.productos = [];
  }

  /**
   *
   *
   * @param {*} producto
   * @memberof Carrito
   */

  agregarProducto(producto) {
    this.productos.push(producto);
  }
 /**
   * Calcula el total del carrito sumando los totales de cada producto.
   * @returns {number} El total del carrito.
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }
/**
   * Vacía el carrito, eliminando todos los productos.
   */
  vaciarCarrito() {
    this.productos = [];
  }
}
/**
 *
 *
 * @class Usuario
 */
class Usuario {
  /**
   * Creates an instance of Usuario.
   * @param {*} nombre
   * @param {*} correo
   * @memberof Usuario
   */
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }

  /**
   *
   *
   * @param {*} producto
   * @memberof Usuario
   */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  /**
   *
   *
   * @memberof Usuario
   */
  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}

// Crear una instancia de Producto para una Laptop
const producto1 = new Producto("Laptop", 1200, 1);

/** 
 * Crear una instancia de Producto para un Mouse.
 * @type {Producto}
 */
const producto2 = new Producto("Mouse", 20, 2);

// Crear una instancia de Usuario con nombre y correo electrónico
const usuario = new Usuario("Juan", "juan@example.com");

// Agregar el producto1 al carrito del usuario
usuario.agregarProductoAlCarrito(producto1);

// Agregar el producto2 al carrito del usuario
usuario.agregarProductoAlCarrito(producto2);

// Finalizar la compra del usuario
usuario.finalizarCompra();
