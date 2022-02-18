const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const verifyToken = require('./middlewares/validate-token');
const verifyTokenStudent = require('./middlewares/validate-tokenStudent');



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
app.use('/api/student', require('./routes/student'));
app.use('/api/liststudent',verifyToken, require('./routes/listStudent'));
app.use('/api/user', require('./routes/auth'));
app.use('/api/usercreate', verifyToken,require('./routes/register'));
app.use('/api/studentaccept',require('./routes/studentAccept'));
app.use('/api/studentacc',require('./routes/studentAcceptForStu'));
app.use('/api/grade', require('./routes/grade'));
app.use('/api/course', require('./routes/course'));
app.use('/api/score', require('./routes/score'));

//Listen port
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor esta siendo ejecutado en el puerto ${port}`);
})