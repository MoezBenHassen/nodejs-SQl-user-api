const db = require('../models')

// Create main model
const User = db.users;
//const Review = db.reviews;

//MAIN WORK --- Query basics docs : https://sequelize.org/v6/manual/model-querying-basics.html 
// ===>
/* login email mdp nom prenom*/
// 1. create product
const addUser = async(req, res) =>{
    let info = {
        login: req.body.login,
        email: req.body.email,
        mdp: req.body.mdp,
        nom: req.body.nom,
        prenom: req.body.prenom,
    }
    console.log(info)
    const user = await User.create(info)
    res.status(200).send(user)
}

// 2. get all users  -----> findAll docs : https://sequelize.org/v6/class/src/model.js~Model.html#static-method-findAll
const getAllUsers = async (req, res) =>{
    let users = await User.findAll({
      /*  attributes: [
            'title',
            'price'
        ]*/
    });
    res.status(200).send(users);
}

// 3. get SINGLE user
const getUserById = async (req, res) =>{
    let id =req.params.id;
    let user = await User.findOne({
        //can write logic here ex: title = some title
        where: {id: id}
    });
    res.status(200).send(user);
}

// 4. Update user
const updateUser = async (req, res) =>{
    let id =req.params.id;
    
    const user = await User.update(req.body, {
        where: {id: id}
    });

    res.status(200).send(user);
}

// 5. Delete user by id 
const deleteUser = async (req, res) =>{
    let id =req.params.id;
    await User.destroy({
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
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getPublishedProduct
}