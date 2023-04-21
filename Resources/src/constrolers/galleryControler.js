const express = require('express');
const router = express.Router();
const artService = require('../services/createService');

const gallery = (req,res) =>{
    let arts = artService.getAll();

    res.render('gallery', { arts })
    

};
router.get('/gallery', gallery);
module.exports = router;

