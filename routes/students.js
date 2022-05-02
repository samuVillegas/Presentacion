const { Router } = require('express')
const router = Router();

//Arma la ruta para la carpeta que tiene los templates
const mainRoute =`${__dirname.replace('routes','')}static/templates/`;

//Servicio de prueba
router.get('/prueba/',(req,res)=>{
    res.sendFile(`${mainRoute}prueba.html`);
})

router.get('/ingrid-argote-pizza',(req,res)=>{
    res.sendFile(`${mainRoute}ingrid.html`)
})
module.exports = router;