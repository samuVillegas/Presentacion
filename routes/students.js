const { Router } = require('express')
const router = Router();

//Arma la ruta para la carpeta que tiene los templates
const mainRoute =`${__dirname.replace('routes','')}static/templates/`;

//Servicio de prueba
router.get('/samuel-villegas-hotdog/',(req,res)=>{
    res.sendFile(`${mainRoute}samuelvillegas.html`);
})


module.exports = router;