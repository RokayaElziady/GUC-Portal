const express = require('express')
const locatinRouter = express.Router()
const locationModel = require('../../Models/location.model');
locatinRouter.route('/')
//add new location and does the validation to check if correct data format
.post(
  async (req, res) => {
    const newLocation= new locationModel({
        name: req.body.name, 
        type: req.body.type,
        capacity: req.body.capacity,
    }) 
    try{ const result= await newLocation.save()
        res.send(result)} 
        catch(err){
          console.log(err);
          res.status(500).json({
            error: err
          });
      }
    }
    );
locatinRouter.route('/:locationName')
.delete(async (req, res)=>{ 
  try{
        const result= await locationModel.deleteOne({name : req.params.locationName})
        res.status(200).json({
          message: 'location deleted',
      });
     
     }
        catch(err){    console.log(err);
          res.status(500).json({
            error: err
          });}});
 

module.exports = locatinRouter;
