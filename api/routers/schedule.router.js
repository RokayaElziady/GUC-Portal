const express = require('express')
const router = express.Router()
const scheduleModel = require('../../Models/schedule.model')


router.get('/viewSchedule',
async (req, res) => {
    try {
        const user=req.body.username;
        result = await scheduleModel
          .find({ username:user})
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
