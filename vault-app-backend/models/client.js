const mongoose = require('mongoose');


const clientSchema = new mongoose.Schema({
  name: String,
  value: String,
   

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model('Client', clientSchema);
