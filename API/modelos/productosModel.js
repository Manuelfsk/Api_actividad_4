const { productosController } = require("../controladores/productosController")

//12 crear el objeto productosModel como variable
let productosModel = {}

//21. creacion de las variables de busqueda en bases de datos categorias[] => "debe ser un código existente en la lista de categoría, no se acepta un código de categoría no existente"

productosModel.busca_cod_cat = function(post, callback){
    let ubicacion = categorias.findIndex((item) => item.cod_cat == post.cod_cat)
    return callback({ ubicacion : ubicacion })
}
productosModel.buscarCod_prod =function(post, callback){
    let buscar_prod = productos.findIndex((item) => item.cod_prod == post.cod_prod)
    return callback ({ buscar_prod : buscar_prod })
}

productosModel.crearCod_prod = function(post, callback){
    productos.push({ cod_prod: post.cod_prod, nombre: post.nombre })
    return callback({ state: true})
}




//13 exportar el model productosModel
module.exports.productosModel = productosModel