const express = require('express');
const router = express.Router();

const createArt = (req,res) =>{
    res.render('create');

};
router.get('/create',createArt);
module.exports = router;

