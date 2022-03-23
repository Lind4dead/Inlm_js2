const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({

  name:     { type: String, required: true, unique: true},
  desc:     { type: String, required: true},
  short:     { type: String, required: true},
  price:    { type: Number, required: true},
  imageUrl:    { type: String, required: true}



}, {timestamps: true})


module.exports = mongoose.model('product', productsSchema)