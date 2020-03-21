const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());
app.use(express.static('Assets'));
app.use('/',require('./routes'));

app.listen(port,function(err)
{
    if(err)
        console.log(`Error:${err}`);
    console.log(`Server is running on port:${port}`);    
});