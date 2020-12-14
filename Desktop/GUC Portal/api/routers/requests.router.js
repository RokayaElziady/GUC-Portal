const express = require('express')
const router = express.Router()
const requestsModel = require('../../Models/requests.model')
const academicMemberModel = require('../../Models/academicMember.model')
const  slotsModel = require('../../Models/slots.model')
const courseModel=require('../../Models/course.model')
const departementModel=require('../../Models/department.model')
const { requestStatus,requestType } = require('../enums')
const { request } = require('express')


router.post('/sendReplacementRequest',
async (req, res) => {
    try {
        const sender=req.body.from;
        const reciever=req.body.to;
        const course=req.body.course;

        reciever1 = await academicMemberModel.find({email:reciever})
        sender1 = await academicMemberModel.find({email:sender})
        //console.log(sender1[0].courses)
        senderCourses=sender1[0].courses.filter((c)=>{

         if(c===course){
           return course
         }
        })
        recieverCourses=reciever1[0].courses.filter((c)=>{
          if(c===course){
            return course
          }
        })
       console.log(senderCourses)
        if(!reciever1){
            return res.json({
                error: 'The email you are sending to doesnot exist ',
              })
        }

        else{
          if(senderCourses.length === 0){
            return res.json({
              error: 'You donot teach this course ',
            })
          }
            else{

            if(recieverCourses.length === 0){
            return res.json({
              error: 'You should send request to someone teaching this course ',
            })  
          }
          else{
            const request=new requestsModel({
              from:req.body.from,
              to:req.body.to,
              type:requestType.REPLACEMENT,
              reason:req.body.reason,
              status:requestStatus.PENDING,
              course:req.body.course
            })
                 request.save();
                  return res.json({
                   msg:'request created successfully',
                         request
                  })  
          }

          }
          
        }  

    } catch (exception) {
      return res.json({
        error: 'Something went wrong',
        exception
      })
    }
  }
   
  )
  
  router.get('/viewSentReplacementRequest',
  async (req, res) => {
    try {
       const email=req.body.email;
         requestsModel.find({to:email})
    } catch (exception) {
      return res.json({
        error: 'Something went wrong',
        exception
      })
    }
  }
   
  )


  router.get('/viewSentReplacementRequest',
  async (req, res) => {
    try {
       const email=req.body.email;
         requestsModel.find({from:email})
    } catch (exception) {
      return res.json({
        error: 'Something went wrong',
        exception
      })
    }
  }
  )



router.post('/sendSlotLinkingRequest',
async (req, res) => {
    try {
        const sender=req.body.email;
        const slot=req.body.slot;
        const slot1=await slotsModel.find({_id:slot});
        const sender1= await academicMemberModel.find({email:sender})
        console.log(slot1)
        if(slot1.length===0){
          return res.json({
            error: 'this slot does not exist',
          })
        }
          else{
            senderCourses=sender1[0].courses.filter((c)=>{
              if(c===slot1[0].course){
                //console.log("lallala")
                return c
              }
             })
            // console.log(slot1[0].course)
             //console.log(senderCourses)
            if(senderCourses.length===0){
              return res.json({
                error: 'you donot teach this course',
              })
            }
            else{
            const course= await courseModel.find({name:slot1[0].course})
               //     console.log(course)
            const request=new requestsModel({
              from:sender,
              to:course[0].coordinator,
              type:requestType.SLOT_LINKING,
            //  reason:req.body.reason,
              status:requestStatus.PENDING,
              slot:slot,
            })
              request.save();
                  return res.json({
                   msg:'request created successfully',
                         request
                  })  
          }
        }

    } catch (exception) {
      return res.json({
        error: 'Something went wrong',
        exception
      })
    }
  }
   
  )



  router.post('/sendChangeDayOffRequest',
async (req, res) => {
    try {
        const sender=req.body.email;
        const dayOff=req.body.day;
        const sender1= await academicMemberModel.find({email:sender})
        const dep=await departementModel.find({_id:sender1[0].departement})

            const request=new requestsModel({
              from:sender,
              to:dep[0].HOD,
              type:requestType.CHANGE_DAY_OFF,
              reason:req.body.reason,
              status:requestStatus.PENDING,
              dayOff:dayOff,
            })
              request.save();
                  return res.json({
                   msg:'request created successfully',
                         request
                  })  

    } catch (exception) {
      return res.json({
        error: 'Something went wrong',
        exception
      })
    }
  }
   
  )



  router.post('/sendAnnualLeaveRequestWithoutReplacement',
async (req, res) => {
    try {
        const sender=req.body.email;
        const reason=req.body.reason;
        const sender1= await academicMemberModel.find({email:sender})
        const dep=await departementModel.find({_id:sender1[0].departement})

            const request=new requestsModel({
              from:sender,
              to:dep[0].HOD,
              type:requestType.ANNUAL_LEAVE,
              reason:reason,
              status:requestStatus.PENDING,
              replacementMember:"not available"
            })
              request.save();
                  return res.json({
                   msg:'request created successfully',
                         request
                  })  

    } catch (exception) {
      return res.json({
        error: 'Something went wrong',
        exception
      })
    }
  }
   
  )

router.get('/viewAllSubmittedRequests',
async (req, res) => {
    try {
        const sender=req.body.email;
        const requests= await requestsModel.find({from:sender})
        if(requests.length===0){
          return res.json({
            error:'you havenot submitted any requests',
           })  

        }
        else{
                  return res.json({
                   msg:'success',
                         requests
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


  router.get('/viewAllAcceptedRequests',
async (req, res) => {
    try {
        const sender=req.body.email;
        var requests= await requestsModel.find({from:sender})

        requests=requests.filter((r)=>{
          if(r.status===requestStatus.ACCEPTED){
          return r;
          }
        })

        if(requests.length===0){
          return res.json({
            error:'you donot have accepted requests',
           })  

        }
        else{
                  return res.json({
                   msg:'success',
                         requests
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


  router.get('/viewAllRejectedRequests',
async (req, res) => {
  try {
    const sender=req.body.email;
    var requests= await requestsModel.find({from:sender})

    requests=requests.filter((r)=>{
      if(r.status===requestStatus.REJECTED){
      return r;
      }
    })

    if(requests.length===0){
      return res.json({
        error:'you donot have rejected requests',
       })  

    }
    else{
              return res.json({
               msg:'success',
                     requests
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



  router.get('/viewAllPendingRequests',
  async (req, res) => {
    try {
      const sender=req.body.email;
      var requests= await requestsModel.find({from:sender})
  
      requests=requests.filter((r)=>{
        if(r.status===requestStatus.PENDING){
        return r;
        }
      })
  
      if(requests.length===0){
        return res.json({
          error:'you donot have pending requests',
         })  
  
      }
      else{
                return res.json({
                 msg:'success',
                       requests
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

    router.put('/CancelRequests',
    async (req, res) => {
      try {
              const sender=req.body.email;
              const request=req.body.request;
              const request1=await requestsModel.find({_id:request})
              const reqSender=request1[0].from

              if(sender!=email){
                return res.json({
                  error: 'You Canot cancel a request not sent by you',
                })
              }

              if(request1[0].status===requestStatus.PENDING){
                requestsModel.update({ _id: request }, request1, { satus: requestStatus.CANCELED })
              //     , function(err) {
              //     if(err) { throw err; }
      
              //     console.log('updated visit: '+ req.body.id);
      
              //     res.redirect('/');
              // });
          
                return res.json({
                  error: 'req
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
