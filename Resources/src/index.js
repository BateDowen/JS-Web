const express = require('express')
const initHandleBars = require('./config/handleBars.js');
const app = express();
const path = require('path')

initHandleBars(app);

app.use(express.static(path.resolve(__dirname,'./public')))
app.all('/', (req,res) => {
    res.render('home')

})
app.listen(5000, ()=>{console.log('Server is listening on port 5000...')});
