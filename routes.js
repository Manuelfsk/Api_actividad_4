//11 importar comunicacion con productosController,js 
let productosController = require("./API/controladores/productosController.js").productosController
//11.1 importar comunicacion con categoriasController,js
let categoriasController = require("./API/controladores/categoriasController.js").categoriasController



//8.1 se crea la ruta tipo post con el tipo de ruta que se quiere especificar: ej. "/categorias/save"
app.post("/categorias/save", function (request, response) {
    // 15.1 iniciar proceso de captura de datos
    categoriasController.buscarcod_cat(request, response)
})
//8 se crea la ruta tipo post con el tipo de ruta que se quiere especificar: ej. "/productos/save"
app.post("/productos/save", function (request, response) {
    // 15 iniciar proceso de captura de datos. debe ser igual al punto 11 .save
    productosController.save(request, response)

})
app.get("/productos/listar", function (request, response) {
    productosController.listar(request, response)
})