const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addAccSchema = new Schema({
  name : { type: String, required: true },
  email : { type: String, required: true },
  password : { type: String, required: true },
  orders : [{
    id: { type: String, required: true },
    title : { type: String, required: true },
    cost : { type: Number, required: true },
    rating : { type: Number, required: true },
    img : { type: String, required: true }
  }],
  cart : [{
    id: { type: String, required: true },
    title : { type: String, required: true },
    cost : { type: Number, required: true },
    rating : { type: Number, required: true },
    img : { type: String, required: true }
  }]
});

const Accounts = mongoose.model('Accounts', addAccSchema);
module.exports = Accounts; 