//14 importar productosModel para vincular conexion entre achivos
let productosModel= require("../modelos/productosModel.js").productosModel
//9 se crea el objeto{} productosController coomo variable
let productosController={}
//11 crear la conexion con el controllador .Save
productosController.save = function(request,response){

    //16 se crear la captura de objetos con la variable post{} dentro de prodController.save
    let post = {
        cod_prod: request.body.cod_prod,
        nombre: request.body.nombre
        //16.1 agregar los objetos que sean necesarios para el ejercico Act_4
    }
}













//10 modelo de exportar prductoscontroller
module.exports.productosController = productosController