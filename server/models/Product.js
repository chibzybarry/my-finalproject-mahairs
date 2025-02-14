const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    image: String,
    title: String,
    description: String,
    price: Number,
    category: String,
    salePrice: Number,
    totalStock:Number,
},{timestamps: true})




module.exports = mongoose.model('product', ProductSchema)