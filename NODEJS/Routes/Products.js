const Productos = require('../Models/Products');
const router = require('express').Router();
const {getProducts, searchProducts, getProduct, createProduct, deleteProduct, updateProduct, replaceProduct} = require('../Controllers/Products');

//Traer todos los productos
router.get('/productos', getProducts);

//Traer un producto por un nombre similar, igual o precio
router.get('/busqueda/', searchProducts);

//Traer un producto por su id
router.get('/productos/:id', getProduct);

//Crear un producto
router.post('/productos', createProduct);

//Eliminar un producto
router.delete('/productos/:id', deleteProduct);

//Remplazar un producto
router.put('/productos/:id', replaceProduct);

//Actualizar un producto
router.patch('/productos/:id', updateProduct);

module.exports = router;