const { Router } = require('express')
const router = Router();

//Arma la ruta para la carpeta que tiene los templates
const mainRoute =`${__dirname.replace('routes','')}static/templates/`;

//Servicio de prueba
router.get('/prueba/',(req,res)=>{
    res.sendFile(`${mainRoute}prueba.html`);
})
router.get('/sindy-silva-sanchez/',(req,res)=>{
    res.sendFile(`${mainRoute}sindy.html`)

})
module.exports = router;