const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({
  name: String,
  value: String,
  rating: String,
  retirement: String,


  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User"
  // }
});

module.exports = mongoose.model('Client', clientSchema);
