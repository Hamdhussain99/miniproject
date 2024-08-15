const { Schema, model } = require('../connection');

const mySchema = new Schema({
    title: String,
    description: String,
    image: String,
    area: String,
    price: String,
    address: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('properties', mySchema);