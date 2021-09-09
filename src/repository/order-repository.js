'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('order');

exports.get = async (data) => {
    const res = await Order
        .find({}, 'number status customer items')
        .populate('customer', 'name')
    return res;
}

exports.create = async(data) => {
    const order = new Order(data);
    await order.save();
}

