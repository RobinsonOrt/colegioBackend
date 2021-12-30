const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const verifyToken = require('./middlewares/validate-token');



//usar metodos de las librerias
const app = express();
require('dotenv').config();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//Base de datos
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( ()=> {console.log("Base de datos conectada")})

//Routes setup
app.get('/hey', (req, res) => res.send('ho!'));
app.use('/api/student', verifyToken, require('./routes/student'));
app.use('/api/user', require('./routes/auth'));

//Listen port
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor esta siendo ejecutado en el puerto ${port}`);
})