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
const getAll = () => artDB.slice()
const create = (title, paintingTech, picture, certificate) =>{
    let cube = new Art(title, paintingTech, picture, certificate);

    artDB.push(cube);
};
const artService = {
    create,
    getAll
};
module.exports = artService;

