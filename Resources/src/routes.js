const express = require('express')
const artController = require('./constrolers/artControler.js');
const homeController = require('./constrolers/homeControler.js');
const galleryControler = require('./constrolers/galleryControler.js');

const router = express.Router();




router.use(homeController)
router.use('/art',artController);
router.use(galleryControler)
module.exports = router;
