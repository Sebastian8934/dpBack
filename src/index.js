const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config({path:'./.env'});

//Esto me toco ponerlo por que me estaba mandando un problema con la conexion a la base de datos
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const app = express(); 
const PORT = process.env.PORT || 3010;
app.use(express.json());

const v1UsersRoutes = require('./routes/usersRoutes');

const database = require('./database/database');

//morgan es algo opcional
app.use(morgan('dev'));

//cors para no tener problemas con peticiones
app.use(cors());

app.use('/api/v1/users/',v1UsersRoutes);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT} 🚀`); 
});