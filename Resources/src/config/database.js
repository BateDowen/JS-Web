const mongoose = require('mongoose');

function iniitDB(connectionStr) {
   return mongoose.connect(connectionStr);
};
module.exports = iniitDB;
