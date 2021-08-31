'use strict'
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect('mongodb+srv://balta:balta@ndstr.6alo8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// Carrega as Rotas
const indexRoute = require('./routes/index-routes')
const productRoute = require('./routes/product-routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;