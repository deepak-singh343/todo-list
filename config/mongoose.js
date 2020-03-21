//requiring the mongoose library
const mongoose=require('mongoose');

//connecting to the database
mongoose.connect('mongodb://localhost/todo_db');

//acquiring the connection
const db=mongoose.connection;

//if error
db.on('error',console.error.bind(console,'error connecting to db'));

//Running successfully
db.once('open',function(){
    console.log("Successfully connected to database");
});