// 1 cargar libreria express
const express = require("express")
global.app =express()
//6. se crea el vinculo de comunicacion entre config y app.js
global.config = require("./config.js").config

//7 se crea la conunicacion entre el arcgivo app.js y routes.js
require("./routes.js")




//2 crear el servidor 
app.listen(config.puerto, function(){
    console.log("servidor funcionando en el "+ config.puerto)
})
