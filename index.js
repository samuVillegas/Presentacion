const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const path = require('path');
require('dotenv').config();


//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')))

app.use('/api/', require('./routes/students'))

app.set('port', process.env.PORT || 8000);

app.get('/prueba/', (req, res) => {
    res.sendFile(`${__dirname}/static/templates/prueba.html`)
})
app.get('/api/sindy-silva-Mariscos/', (req,res)=>{
    res.sendFile(`${__dirname}/static/templates/sindy.html`)
})

app.get('/jorge-tarifa-beer/', (req,res)=>{
    res.sendFile(`${__dirname}/static/templates/jorge.html`)
})


app.listen(app.get('port'), () => {
    console.log(`Server running ${app.get('port')}`);
})

