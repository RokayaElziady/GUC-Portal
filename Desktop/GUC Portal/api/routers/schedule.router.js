const express = require('express')
const router = express.Router()
const scheduleModel = require('../../Models/schedule.model')


router.get('/viewSchedule',
async (req, res) => {
    try {
        const user=req.body.member_email;
        result = await scheduleModel
          .find({ member_email:user})
        if(!result){
            return res.json({
                error: 'You donnot have a schedule ',
              })
        }
        else{
            return res.json({
                result
            })
        }  

    } catch (exception) {
      return res.json({
        error: 'Something went wrong',
      })
    }
  }
   
  )



module.exports = router
