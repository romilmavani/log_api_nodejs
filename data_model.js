const mongoose = require('mongoose');

const customObjectSchema = new mongoose.Schema({

  },{strict: false},
  );
  

  module.exports = mongoose.model('harsh_log',customObjectSchema);

  
  