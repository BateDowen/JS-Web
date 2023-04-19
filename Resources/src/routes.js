const express = require('express')
const artController = require('./constrolers/artControler.js');
const homeController = require('./constrolers/homeControler.js');
const router = express.Router();




router.use(homeController)
router.use('/cube',artController);
module.exports = router;
