const express = require('express'); //requerir express
const mongoose = require('mongoose'); //requerir mongoose
const cors = require('cors'); //requerir cors
const app = express(); //ejecutar express
const port = 3001; //crear un puerto
app.use(express.json()); //usar json

app.use(cors());


//conectar a la base de datos
mongoose.connect('mongodb://localhost:27017/nodejs');

//Traer ruta de productos
const productos = require('./Routes/Products');
const pruebas = require('./Routes/pr_Test');

//usar la ruta de productos
app.use(
  productos,
  pruebas
);

//escucho al puerto que cree
app.listen(port, () => {
    console.log('Me ejecuto en el puerto ' + port);
});

/*
  Ejercicio:
  - Crear una ruta para obtener un producto por su nombre
  - Crea  una ruta con una query para obtener los productos gratis
  - Crea una ruta con una query para traer solo un limite de productos
*/
