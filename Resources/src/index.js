const express = require('express')
const handlebars  = require("express-handlebars");


const app = express();
app.all('/', (req,res) => {
    res.write('Hello world');
    res.end();

})
app.listen(5000, ()=>{console.log('Server is listening on port 5000...')});
