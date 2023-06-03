const { leerJSON, escribirJSON } = require("../data");
const productos_db = leerJSON()

const filtrar = function(categoria){
    const productosFiltrados = productos_db.filter(producto => producto.categoria == categoria)
    return productosFiltrados
}

module.exports = filtrar