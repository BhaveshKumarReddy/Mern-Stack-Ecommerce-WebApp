const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  id: { type: String, required: true },
  title : { type: String, required: true },
  cost : { type: Number, required: true },
  rating : { type: Number, required: true },
  img : { type: String, required: true },
  reviews : [{
    review : { type: String, required: true },
    points : { type: Number, required: true },
    by : {type : String, required : true}
  }]
});

const Items = mongoose.model('Items', itemSchema);
module.exports = Items;