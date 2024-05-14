const { productosModel } = require("../modelos/productosModel.js")

//9.1 se crea el objeto{} categoriasController coomo variable
let categoriasController = {}

//14.1 importar categoriasModel para vincular conexion entre achivos
let categoriasModel = require("../modelos/categoriasModel.js").categoriasModel


//11. crear la conexion con el controllador .Save
categoriasController.buscarcod_cat = function (request, response) {

    //16.1 se crear la captura de objetos con la variable post{} dentro de categoriasController.save
    let post = {
        cod_cat: request.body.cod_cat,
        nombre: request.body.nombre,
        estado: request.body.estado
        //16.1 agregar los objetos que sean necesarios para el ejercico Act_4
    }
    //18.1 aplicacion de las credenciales de validacion de espacios obligatorios cod_cat
    if (post.cod_cat == undefined || post.cod_cat == null || post.cod_cat.trim() == "") {
        response.json({ state: false, mensaje: "El campo cod_cat es obligatorio." })
        return false
    }
    //max 5 car.
    if(post.cod_cat.length >= 6){
        response.json({state: false, mensaje:"El cod_cat es de maximo 5 caracteres."})
    }
    //18.1 aplicacion de las credenciales de validacion de espacios obligatorios nombre
    if (post.nombre == undefined || post.nombre == null || post.nombre.trim() == "") {
        response.json({ state: false, mensaje: "El campo nombre es obligatorio." })
        return false
    }
    //max 50 
    if(post.nombre.length >= 51){
        response.json({state: false, mensaje:"El nombre es de maximo 50 caracteres."})
    }
    //min 3 
    if(post.nombre.length <=2 ){
        response.json({state: false, mensaje:"El nombre es de minimo 3 caracteres"})
    }
    //solo numeros



    //18.1 aplicacion de las credenciales de validacion de espacios obligatorios estado
    if (post.estado == undefined || post.estado == null || post.estado.trim() == "") {
        response.json({ state: false, mensaje: "El campo estado es obligatorio." })
        return false
    }
    //solo true o false
    if(post.estado.toString().toLocaleLowerCase() == "false"){
        post.estado = false

    }
    if(post.estado.toString().toLocaleLowerCase() == "true"){
        post.estado = true

    }
    
    if(typeof post.estado != "boolean"){
        response.json({state: false, mensaje:"el campo estado debe ser true o false"})
        return false
    }



    categoriasModel.buscarcod_cat(post, function (respuesta) {
        if (respuesta.posicion == -1) {
            
            categoriasModel.crear_cat(post, function (respuesta) {
                if (respuesta.state == true){
                    response.json({ state: true, mensaje: "categoria creada correctamente: "  })
                    return false
                }else {
                    response.json({ state: false, mensaje: "Error al crear el producto" })
                    return false
            }
            })

        } else {
            response.json({state: false, mensaje: "categoria existente con el siguiente nombre: " })
            return false
        }
    })

}

























//10 se crea el modelo exports ategoriasController
module.exports.categoriasController = categoriasController 