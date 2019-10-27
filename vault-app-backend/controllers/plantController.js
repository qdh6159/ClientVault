const express = require('express');
// Next we set up the Router
const router = express.Router();

// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized
const Plant = require('../models/plant');
// Creating the index route
// index route should show all the fruits


 router.get('/', async (req, res, next) => {
  // req.body this is from the fetch request
  console.log(req.body, ' this is get all')
     try  {
        // res.send("this is the plant page")
      const allPlants = await Plant.find().populate('user');
      console.log(allPlants)
      // This is the response to react
      res.json({
        status: {
            code: 200,
            message: "Success"
          },
        data: allPlants
      });

    } catch (err){

      res.send(err)

    }
});


router.post('/', async (req, res) => {

  try {
    console.log(req.body, ' this is req.body');
    req.body.user = req.session.userId;
    const createdPlant = await Plant.create(req.body);
    console.log('response happening?')
    res.json({
      status: {
            code: 201,
            message: "Resource successfully created"
          },
      data: createdPlant
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});





// router.get('/:id', async (req, res, next) => {


//      try  {

//         const foundMovie = await Movie.findById(req.params.id);
//         res.json({
//           status: {
//             code: 200,
//             message: "Success"
//           },
//           data: foundMovie
//         });

//       } catch (err){
//         res.send(err);
//       }



// });

router.put('/:id', async (req, res) => {

  try {
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: {
            code: 201,
            message: "Resource successfully updated"
          },
      data: updatedPlant
    });
  } catch(err){
    res.send(err)
  }
});


// // Delete route
router.delete('/:id', async (req, res) => {

  try {
     const deletedPlant = await Plant.findByIdAndRemove(req.params.id);
      res.json({
        status:  {
            code: 200,
            message: "Resource successfully deleted"
          },
        data: deletedPlant
      });
  } catch(err){
    res.send(err);
  }
});



module.exports = router;
