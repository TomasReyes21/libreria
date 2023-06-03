const { leerJSON, escribirJSON } = require("../data");
const productos_db = leerJSON();
const listar = function (productos = productos_db) {
    console.log("\n***************LISTA DE PRODUCTOS *****************\n".yellow);
    productos.forEach(({id, nombre, marca, precio, stock},i) => {
        console.log(
          `${id} - ${nombre} ${marca} $${precio} | ${stock ? 'OK' : 'SIN STOCK'}`
        );
    });
    console.log("\n***************************************************\n".yellow);

    return null
  }
  module.exports = listar;