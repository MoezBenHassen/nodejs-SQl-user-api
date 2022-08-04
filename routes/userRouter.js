const userController = require('../controllers/userController.js')

const router = require('express').Router();

//Model view architecture nrmlment
// Add single product
router.post('/addUser', userController.addUser);

// Get ALL products
router.get('/allUsers', userController.getAllUsers);

// GET PUBLISHED products
router.get('/published', userController.getPublishedProduct);

// GET product by ID
router.get('/:id', userController.getUserById);

// UPDATE product
router.put('/:id', userController.updateUser);
// DELETE product
router.delete('/:id', userController.deleteUser);


module.exports = router;
