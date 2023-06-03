const {leerJSON,escribirJSON} = require('../data');
const productos_db = leerJSON()


const buscar = function(nombre){
    const producto = productos_db.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase())
    return producto 
  }
  
module.exports = buscar;