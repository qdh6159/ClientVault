const mongoose = require('mongoose');


const plantSchema = new mongoose.Schema({
  name: String,
  scientificName: String,
  water: String, 
  sun: String,
  description: String,
  imageOne: String, 
  imageTwo: String, 

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});


// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Plant', plantSchema);
