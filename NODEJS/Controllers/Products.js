const Productos = require('../Models/Products');

const options = {
  page: 1,
  limit: 10,
  collation: {
    locale: 'es'
  }
}

//traer todos los productos paginados
exports.getProducts = async (req,res) => {
  try{
    const productos = await Productos.paginate({}, options);
    res.json(productos);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

exports.searchProducts = async (req,res) => {
  try{
    const nombre = req.query.nombre || '';
    const precio = req.query.precio || 1;
    //Traer productos por nombre o precio
    const productos = await Productos.find({$or: [{nombre: {$regex: nombre, $options: 'i'}}, {precio: precio}]});
    res.json(productos);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

exports.getProduct = async (req,res) => {
  try{
    const producto = await Productos.findById(req.params.id);
    res.json(producto);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

exports.createProduct = async (req,res) => {
  try{
    if(!req.body.nombre || !req.body.precio){
      return res.status(400).json({error: 'nombre y precio son requeridos'});
    }
    const producto = new Productos(req.body);
    await producto.save();
    res.status(201).json(producto);
  }
  catch (error) {
    res.status(500).json({error: error.message});
  }
}

exports.deleteProduct = async (req,res) => {
  try{
    const producto = await Productos.findByIdAndDelete(req.params.id);
    res.json(producto);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

exports.updateProduct = async (req,res) => {
  try{
    const producto = await Productos.findByIdAndUpdate
    (req.params.id, req.body, {new: true});
    res.json(producto);
  }
  catch (error) {
    res.status(500).json({error: error.message});
  }
}

exports.updateProduct = async (req,res) => {
  try{
    if(!req.body.nombre || !req.body.precio){
      return res.status(400).json({error: 'nombre y precio son requeridos'});
    }
    const producto = await Productos.findByIdAndUpdate
    (req.params.id, req.body, {new: true});
    res.json(producto);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

exports.replaceProduct = async (req,res) => {
  try{
    if(!req.body.nombre || !req.body.precio){
      return res.status(400).json({error: 'nombre y precio son requeridos'});
    }
    const producto = await Productos.findByIdAndUpdate
    (req.params.id, req.body, {new: true});
    res.json(producto);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}
