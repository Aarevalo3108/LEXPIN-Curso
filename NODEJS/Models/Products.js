const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const productosSchema = new mongoose.Schema({
  nombre: {type: String, required: true, unique: true, min: 3, max: 50},
  precio: {type: Number, required: true},
  gratis: {type: Boolean, default: false},
});

//paginación
productosSchema.plugin(mongoosePaginate);

//crear un modelo (La colección en la base de datos)
const Productos = mongoose.model('Productos', productosSchema);

//Usar la paginación
Productos.paginate().then({});

module.exports = Productos;