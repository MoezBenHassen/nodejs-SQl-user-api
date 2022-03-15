const productController = require('../controllers/productController.js')

const router = require('express').Router();

//Model view architecture nrmlment
// Add single product
router.post('/addProduct', productController.addProduct);

// Get ALL products
router.get('/allProducts', productController.getAllProducts);

// GET PUBLISHED products
router.get('/published', productController.getPublishedProduct);

// GET product by ID
router.get('/:id', productController.getProductById);

// UPDATE product
router.put('/:id', productController.updateProduct);
// DELETE product
router.delete('/:id', productController.deleteProduct);


module.exports = router;
