const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
    origin: '*'
}


// Middlewares
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));


// Routers
const router = require('./routes/userRouter.js');
app.use('/api/users', router);
    //other router examples
//app.use('/api/comments', router);

// Testing api
app.get('/',(req, res) => {
    res.json({message:'hello from api'});
});

// Port

const PORT = process.env.PORT || 8080;

// Server
app.listen(PORT, () =>{
    console.log(`********** SERVER IS RUNNING ON  ${PORT} *******************`);
})