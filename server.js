const express = require('express');
const bodyParser = require('body-parser')

const userRoutes = require('./src/routes/user.routes');

const app = express();

const port = process.env.PORT || 4000;


app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


// using as middleware 
app.use('/api/users', userRoutes)



// configuring the database 
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');
const { use } = require('./src/routes/user.routes');
mongoose.Promise = global.Promise; 

// connecting to the database 
mongoose.connect(dbConfig.url,{
    useNewUrlParser: true
}).then(()=>{
    console.log('Successfully connected to the database');
}).catch(err=>{
    console.log('Could not connect to database', err);
    process.exit();
})


app.get('/',(req,res)=>{
    res.json({'message':'Hello world'});
})

app.listen(port,()=>{
    console.log(`Node server listening on port ${port}`);
})
