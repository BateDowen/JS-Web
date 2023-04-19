const express = require('express')
const initHandleBars = require('./config/handleBars.js');
const app = express();
const path = require('path')
const routes = require('./routes.js');

app.use(express.urlencoded({extended: true}))
initHandleBars(app);

app.use(express.static(path.resolve(__dirname,'./public')));
app.use(routes)


app.listen(5000, ()=>{console.log('Server is listening on port 5000...')});
