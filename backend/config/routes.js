const express = require('express');
const router = express.Router();
const winesController = require('../controllers/wines');

//Wine Routes
router.get('/api/wines', winesController.index);
router.get('/api/wines/page', winesController.indexByPage);
router.post('/api/wines', winesController.create);
router.get('/api/wines/:wine_id', winesController.show);
router.put('/api/wines/:wine_id', winesController.update);
router.delete('/api/wines/:wine_id', winesController.destroy);

module.exports = router;