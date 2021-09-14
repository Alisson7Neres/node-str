'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect('mongodb+srv://balta:balta@ndstr.6alo8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carrega as Rotas
const indexRoute = require('./routes/index-routes')
const productRoute = require('./routes/product-routes')
const customerRoute = require('./routes/customer-routes')
const orderRoute = require('./routes/order-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;