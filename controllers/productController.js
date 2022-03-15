const db = require('../models')

// Create main model
const Product = db.products;
const Review = db.reviews;

//MAIN WORK --- Query basics docs : https://sequelize.org/v6/manual/model-querying-basics.html 
// ===>

// 1. create product
const addProduct = async(req, res) =>{
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
}

// 2. get all products  -----> findAll docs : https://sequelize.org/v6/class/src/model.js~Model.html#static-method-findAll
const getAllProducts = async (req, res) =>{
    let products = await Product.findAll({
      /*  attributes: [
            'title',
            'price'
        ]*/
    });
    res.status(200).send(products);
}

// 3. get SINGLE product
const getProductById = async (req, res) =>{
    let id =req.params.id;
    let product = await Product.findOne({
        //can write logic here ex: title = some title
        where: {id: id}
    });
    res.status(200).send(product);
}

// 4. Update product
const updateProduct = async (req, res) =>{
    let id =req.params.id;
    
    const product = await Product.update(req.body, {
        where: {id: id}
    });

    res.status(200).send(product);
}

// 5. Delete product by id 
const deleteProduct = async (req, res) =>{
    let id =req.params.id;
    await Product.destroy({
        where: {id: id}
    })
    res.status(200).send('Product is deleted ! ');
}

// 6. Published product
const getPublishedProduct = async (req, res) =>{
    
    const products = await Product.findAll({
        where: {published: true}
    })
    res.status(200).send(products);
}

// Module exports 
module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}