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

app.use('/api/',require('./routes/students'))

app.get('/prueba/', (req,res)=>{
    res.sendFile(`${__dirname}/static/templates/prueba.html`)
})

app.set('port', process.env.PORT || 6000);

app.listen(app.get('port') , () => {
    console.log(`Server running ${app.get('port')}`);
})

