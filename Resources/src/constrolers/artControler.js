const express = require('express');
const router = express.Router();
const artService = require('../services/createService');


const renderCreateArtPage = (req,res) =>{
    let arts = artService.getAll();
    console.log(arts);
    res.render('create');

};
const createArt = (req,res) =>{

    let {title, paintingTech, picture, certificate} = req.body;
    artService.create(title, paintingTech, picture, certificate)
    res.redirect('/')
};

router.get('/create',renderCreateArtPage);
router.post('/create',createArt);

module.exports = router;

