const { Router } = require('express')
const router = Router();

//Arma la ruta para la carpeta que tiene los templates
const mainRoute =`${__dirname.replace('routes','')}static/templates/`;

//Servicio de prueba
router.get('/feature-Brayan-Gamboa-DeTodo',(req,res)=>{
    res.sendFile(`${mainRoute}brayan.html`);
})


module.exports = router;