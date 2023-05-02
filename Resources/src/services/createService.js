const Art = require('../../models/Art');

const artDB = [
    {
        id: 'djwhdhqdw',
        title: 'Levski',
        painting: 'Oil',
        picture: 'https://cdncloudcart.com/22136/product_categories/images/176/176_600x600.jpeg?1671204321',
        certificate: 'NoName'
      }
];
const getAll = () => Art.find({}).lean();
const getOne = (id) => Art.findById(id).lean();

const create = (title, paintingTech, picture, certificate) =>{
    let art = new Art({
        title,
        paintingTech,
        picture, 
        certificate
        });

    return art.save();
};
const artService = {
    create,
    getAll,
    getOne
};
module.exports = artService;

