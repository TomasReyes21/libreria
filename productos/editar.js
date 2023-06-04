const { leerJSON, escribirJSON } = require("../data");
const productos_db = leerJSON();
const editar = function (id) {
    let  productoAModificar = productos_db.find(producto => producto.id === id)
    if (!productoAModificar) {
        return `NOT FOUND, 404`
    }
    let {nombre, marca} = productoAModificar

    let productosModificados = productos_db.map(producto => {
        if(producto.id === id) {
            producto.stock = !producto.stock
        }
        return producto
    })
    escribirJSON(productosModificados)

    return `El producto "${nombre}" | ${marca} se modifico satisfactoriamente`
}

module.exports = editar;