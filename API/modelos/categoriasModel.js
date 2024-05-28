

//12.1 crear el objeto categoriasModel como variable
let categoriasModel = {}


//21.1 creacion de las variables de busqueda en bases de datos categorias[] 

categoriasModel.buscarcod_cat = function(post, callback){
    let posicion = categorias.findIndex((item)=> item.cod_cat == post.cod_cat)
    return callback({posicion : posicion})
}
categoriasModel.crear_cat= function(post,callback){
    categorias.push({cod_cat: post.cod_cat, nombre: post.nombre, estado: post.estado})
    return callback({state: true})//nota: el mesanje de respuesta se establecerá en categoriasController
}










//13 exportar el categoriasModel
module.exports.categoriasModel = categoriasModel