
//14 importar productosModel para vincular conexion entre achivos
let productosModel= require("../modelos/productosModel.js").productosModel

//9 se crea el objeto{} productosController coomo variable
let productosController={}

//11 crear la conexion con el controllador .Save
productosController.save = function(request,response){

    //16 se crear la captura de objetos con la variable post{} dentro de prodController.save
    let post = {
        cod_cat: request.body.cod_cat,
        cod_prod: request.body.cod_prod,
        nombre: request.body.nombre
        //16.1 agregar los objetos que sean necesarios para el ejercico Act_4
    }


//18 aplicacion de las credenciales de validacion de espacios obligatorios cod_cat
if(post.cod_cat == undefined || post.cod_cat == null || post.cod_cat.trim() == ""){
    response.json({state: false, mensaje: "el campo cod_cat es obligatorio", campo: "cod_cat"})
    return false
}
//max 5 car.
if(post.cod_cat.length >= 6){
    response.json({state: false, mensaje: "el campo cod_cat debe tener maximo 5 caracteres" ,campo: "cod_cat"})
}
//18 aplicacion de las credenciales de validacion de espacios obligatorios cod_prod
if(post.cod_prod == undefined || post.cod_prod == null || post.cod_prod.trim() == ""){
    response.json({state: false, mensaje:"El campo cod_prod es obligatorio."})
    return false
}
//max 15 car.
if(post.cod_prod.length >= 16){
    response.json({state: false, mensaje:"El cod_prod es de maximo 15 caracteres."})
}
//18 aplicacion de las credenciales de validacion de espacios obligatorios nombre
if(post.nombre == undefined || post.nombre == null || post.nombre.trim() == ""){
    response.json({state: false, mensaje:"El campo nombre es obligatorio."})
    return false
}
 //max 50 
if(post.nombre.length >= 51){
    response.json({state: false, mensaje:"El nombre es de maximo 50 caracteres."})
}
//min 3 
if(post.nombre.length <=3 ){
    response.json({state: false, mensaje:"El nombre es de minimo 4 caracteres"})
}
productosModel.buscarCod_prod(post, function(respuesta_cod_prod){
    if (respuesta_cod_prod.buscar_prod == -1){
        productosModel.crearCod_prod(post, function(resp_Guardar_prod){
            if (resp_Guardar_prod.state == true ){
                response.json({ state: true, mensaje: " El cod_prod se ha creado correctamente. "   })
                return false
            }else{
                response.json({ state: false, mensaje: " El cod_prod no se ha podido guardar correctamente. "   })
                return false
            }
        })
    }else{
        response.json({ state: false, mensaje: " El cod_prod  ya se encuentra registrado, intenta con otro códigpo. "   })
                return false

    }
})
productosModel.busca_cod_cat(post, function(busqueda_cod_cat) {
    if(busqueda_cod_cat.ubicacion >= 0){
        response.json({ state: true, mensaje:"Código cod_cat, existente en la lista de categoría" })
        return false
    }else{
        response.json({state: false, mensaje:"No se acepta cod_cat no existente el la lista categorias"})
        return false
        
    }
})




}

// productosController.listar = function(request,response){
//     let post = {
//         cod_cat: request.params.cod_cat ,
//         cod_prod: request.params.cod_prod,
//         nombre: request.params.nombre

//     }

// //     response.send(<p>+ +</p>)
// productosModel.listar(post, function(resuesta){
//     if(mostrar_prod.busca_cod_cat >= 0){
//         response.json({productos : productos})
//         return false
//     }
    

// })

// }



//10 se crea el modelo exports productosController
module.exports.productosController = productosController




















//10 modelo de exportar prductoscontroller
module.exports.productosController = productosController