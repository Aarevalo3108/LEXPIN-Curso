const router = require('express').Router();

//mi primera ruta
router.get('/', (req,res) => {
  res.send('Hola Mundo');
});

//Ruta con query (Parametros opcionales)
router.get('/productos/:id/comentarios', (req,res) => {
  res.json({producto: req.params.id, comentarios: req.query.comentarios});
});

module.exports = router;