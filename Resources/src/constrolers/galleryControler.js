const express = require('express');
const router = express.Router();
const artService = require('../services/createService');

const gallery = async(req,res) =>{
    let arts = await artService.getAll();
    // console.log(arts);
    res.render('gallery', { arts })

};
const details = async(req,res) =>{
    let art = await artService.getOne(req.params.id);
    res.render('details', {...art})
}
router.get('/gallery', gallery);
router.get('/details/:id', details)
module.exports = router;

