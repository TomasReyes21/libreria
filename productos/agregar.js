const Producto = require('./Producto')
const { leerJSON, escribirJSON } = require("../data");
const productos_db = leerJSON()
const agregar = function(nombre,marca,precio,descuento){
    let productos = productos_db;
    let ultimoId = productos[productos.length - 1] ? productos[productos.length - 1].id : 0;
    
    let nuevoProducto = new Producto(ultimoId + 1,nombre,marca,precio,descuento);

    productos.push(nuevoProducto)
    
    escribirJSON(productos)

    return `El producto "${nuevoProducto.nombre} | ${nuevoProducto.marca}"  se registró satisfactoriamente`
  }
  module.exports = agregar;