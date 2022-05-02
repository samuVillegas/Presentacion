const { Router } = require('express')
const router = Router();

//Arma la ruta para la carpeta que tiene los templates
const mainRoute =`${__dirname.replace('routes','')}static/templates/`;

//Servicio de prueba
router.get('/prueba/',(req,res)=>{
    res.sendFile(`${mainRoute}prueba.html`);
})
router.get('/wilmer-perez-tortilla/',(req,res)=>{
    let Objeto={
        "conocimientos aprendidos":"hapi,express,swagger,and others",
        "lo que más me ha gustado":"hapi ",
        "lo que más me ha retado":"hapi consumir el servicio",
        "que espero lograr con lo que he aprendido":" ganar mucha plata"
    }
    res.status(200).json(Objeto)
})






module.exports = router;