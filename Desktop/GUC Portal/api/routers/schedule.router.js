<<<<<<< HEAD
const express = require('express');
const requestsModel = require('../../Models/requests.model');
=======
const express = require('express')
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b
const router = express.Router()
const scheduleModel = require('../../Models/schedule.model')


router.get('/viewSchedule',
async (req, res) => {
    try {
<<<<<<< HEAD
        const user=req.body.member_email;
        // const r=await requestsModel.find({_id:"5fd73a543ca2134a584d4d54"})
        // console.log(r[0].dateSubmitted)
        result = await scheduleModel
          .find({ member_email:user})
        if(!result || result.length==0){
=======
        const user=req.body.username;
        result = await scheduleModel
          .find({ username:user})
        if(!result){
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b
            return res.json({
                error: 'You donnot have a schedule ',
              })
        }
        else{
            return res.json({
<<<<<<< HEAD
                msg:"success",
=======
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b
                result
            })
        }  

    } catch (exception) {
      return res.json({
        error: 'Something went wrong',
<<<<<<< HEAD
        exception
=======
>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b
      })
    }
  }
   
  )



module.exports = router
