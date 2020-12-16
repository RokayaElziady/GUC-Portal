const express = require('express');
const requestsModel = require('../../Models/requests.model');
const router = express.Router()
const scheduleModel = require('../../Models/schedule.model')


router.get('/viewSchedule',
async (req, res) => {
    try {
        const user=req.body.member_email;
        // const r=await requestsModel.find({_id:"5fd73a543ca2134a584d4d54"})
        // console.log(r[0].dateSubmitted)
        result = await scheduleModel
          .find({ member_email:user})
        if(!result || result.length==0){
            return res.json({
                error: 'You donnot have a schedule ',
              })
        }
        else{
            return res.json({
                msg:"success",
                result
            })
        }  

    } catch (exception) {
      return res.json({
        error: 'Something went wrong',
        exception
      })
    }
  }
   
  )



module.exports = router
