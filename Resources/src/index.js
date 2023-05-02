const express = require('express')
const initHandleBars = require('./config/handleBars.js');
const app = express();
const path = require('path')
const routes = require('./routes.js');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];

app.use(express.urlencoded({extended: true}))
initHandleBars(app);

app.use(express.static(path.resolve(__dirname,'./public')));
app.use(routes)


app.listen(config.PORT, ()=>{console.log(`'Server is listening on port ${config.PORT}...'`)});
