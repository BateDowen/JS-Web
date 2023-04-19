const Art = require('../../models/Art');

const artDB = [];
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

