const express = require('express');
const router = express.Router();
const artService = require('../services/createService');


const renderCreateArtPage = (req,res) =>{
    
    res.render('create');

};
const createArt = async(req,res) =>{

    let {title, paintingTech, picture, certificate} = req.body;
    try {
       await artService.create(title, paintingTech, picture, certificate)
        res.redirect('/')
        
    } catch (error) {
        res.status(400).send(error.message).end();

    }
};

router.get('/create',renderCreateArtPage);
router.post('/create',createArt);

module.exports = router;

