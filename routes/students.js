const { Router } = require('express')
const router = Router();

//Arma la ruta para la carpeta que tiene los templates
const mainRoute =`${__dirname.replace('routes','')}static/templates/`;

//Servicio de prueba
router.get('/prueba/',(req,res)=>{
    res.sendFile(`${mainRoute}prueba.html`);
})

router.get('/David-Giraldo-Cerveza', (req, res) => {
    res.sendFile(`${mainRoute}davidGiraldo.html`);
})

module.exports = router;