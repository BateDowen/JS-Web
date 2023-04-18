const express = require('express')
const initHandleBars = require('./config/handleBars.js');
const app = express();

initHandleBars(app);

app.all('/', (req,res) => {
    res.render('home')

})
app.listen(5000, ()=>{console.log('Server is listening on port 5000...')});
