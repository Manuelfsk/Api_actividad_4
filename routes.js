//11 importar comunicacion con productosController,js 
let productosController = require("./API/controladores/productosController.js").productosController


//8 se crea la ruta tipo post con el tipo de ruta que se quiere especificar: ej. "/productos/save"
app.post("/producto/save", function(request,response){
// 15 iniciar proceso de captura de datos
    productosController.save(request,response)

})
