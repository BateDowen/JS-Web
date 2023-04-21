const express = require('express');
const router = express.Router();
const artService = require('../services/createService');

const gallery = (req,res) =>{
    let arts = artService.getAll();

    res.render('gallery', { arts })

};
const details = (req,res) =>{
    let art = artService.getOne(req.params.id);
    res.render('details', {...art})
}
router.get('/gallery', gallery);
router.get('/details/:id', details)
module.exports = router;

