const express = require('express')
const router = express.Router()
const requestsModel = require('../../Models/requests.model')
const academicMemberModel = require('../../Models/academicMember.model')
const  slotsModel = require('../../Models/slots.model')
const courseModel=require('../../Models/course.model')
const departementModel=require('../../Models/department.model')
const locationModel=require('../../Models/location.model')
const { requestStatus,requestType } = require('../enums')
const notificationModel = require('../../Models/notification.model')
//const { request } = require('express')



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
              course:req.body.course,
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
      //  console.log(slot1)
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
             console.log("hahahahahaha")
            if(senderCourses.length===0){
              return res.json({
                error: 'you donot teach this course',
              })
            }
            else{
            const course= await courseModel.find({_id:slot1[0].course})
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



  router.post('/sendAnnualLeaveRequest',
async (req, res) => {
    try {
        const sender=req.body.email;
        const reason=req.body.reason;
        const replacement=req.body.replacement
        const day=req.body.day;
        const sender1= await academicMemberModel.find({email:sender})
        const dep=await departementModel.find({_id:sender1[0].departement})
        if(day<Date.now()){
          return res.json({
            error: 'annual leave should be submitted before targeted day',
          })
        }

            const request=new requestsModel({
              from:sender,
              to:dep[0].HOD,
              type:requestType.ANNUAL_LEAVE,
              reason:reason,
              status:requestStatus.PENDING,
              replacementMember:replacement,
              dateOfRequest:day,
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


  router.post('/sendAccidentalLeaveRequest',
  async (req, res) => {
      try {
          const sender=req.body.email;
          const reason=req.body.reason;
          const day=req.body.day;
          const sender1= await academicMemberModel.find({email:sender})
          const dep=await departementModel.find({_id:sender1[0].departement})
  
              const request=new requestsModel({
                from:sender,
                to:dep[0].HOD,
                type:requestType.ACCIDENTAL_LEAVE,
                reason:reason,
                status:requestStatus.PENDING,
                dateOfRequest:day,
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

    router.post('/sendSickLeaveRequest',
async (req, res) => {
    try {
        const sender=req.body.email;
        const reason=req.body.reason;
        const day=req.body.day;
        const sender1= await academicMemberModel.find({email:sender})
        const dep=await departementModel.find({_id:sender1[0].departement})

        if(day.get<Date.now()){ //ZABATEEEHA
          return res.json({
            error: 'sick leave should be sumbitted within 3 days  of the day you were sick',
          })
        }

            const request=new requestsModel({
              from:sender,
              to:dep[0].HOD,
              type:requestType.SICK_LEAVE,
              reason:reason,
              status:requestStatus.PENDING,
              dateOfRequest:day,
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


  router.post('/sendMaternityLeaveRequest',
async (req, res) => {
    try {
        const sender=req.body.email;
        const reason=req.body.reason;
        const replacement=req.body.replacement
        const day=req.body.day;
        const sender1= await academicMemberModel.find({email:sender})
        const dep=await departementModel.find({_id:sender1[0].departement})

        if(sender1[0].gender!='female'){
          return res.json({
            error: 'maternity leaves should only be submitted by female staff members',
          })
        }

            const request=new requestsModel({
              from:sender,
              to:dep[0].HOD,
              type:requestType.MATERNITY_LEAVE,
              reason:reason,
              status:requestStatus.PENDING,
              dateOfRequest:day,
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

  router.post('/sendCompensationLeaveRequest',
async (req, res) => {
    try {
        const sender=req.body.email;
        const reason=req.body.reason;
        const day=req.body.day;
        const sender1= await academicMemberModel.find({email:sender})
        const dep=await departementModel.find({_id:sender1[0].departement})

        if(!reason ||reason===''|| reason.length===0){
          return res.json({
            error: 'you should submit a reason for you compensation leave',
          })
        }

            const request=new requestsModel({
              from:sender,
              to:dep[0].HOD,
              type:requestType.COMPENSATION_LEAVE,
              reason:reason,
              status:requestStatus.PENDING,
              dateOfRequest:day,
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
        console.log(Date.now().getDate())
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

    router.put('/cancelRequest',
    async (req, res) => {
      try {
              const sender=req.body.email;
              const request=req.body.request;
              const request1=await requestsModel.find({_id:request})
            
              if(request1.length===0){
                return res.json({
                  error: 'there is no request with this id',
                })
              }
              const reqSender=request1[0].from
              if(reqSender!=sender){
                return res.json({
                  error: 'You Canot cancel a request not sent by you',
                })
              }
              if(request1[0].status===requestStatus.PENDING){
                console.log("pending")
               request1[0].status=requestStatus.CANCELED
                await requestsModel.findByIdAndUpdate(request, {status:requestStatus.CANCELED})
                return res.json({
                  msg: 'cancelled successfully',
                  request1
                })
              }

                if(request1[0].dateOfRequest> Date.now()){
                  console.log("hahaha")
                  request1[0].status=requestStatus.CANCELED
                  await requestsModel.findByIdAndUpdate(request, {status:requestStatus.CANCELED})
                return res.json({
                  msg: 'cancelled successfully',
                  request1
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


////////////////////////////////////////////////////////////////COORDINATOR ROLES/////////////////////////////////////////////////////////////



router.get('/viewAllSlotLinkingRequests',
  async (req, res) => {
    try {
      const sender=req.body.email;
      const sender1=await  academicMemberModel.find({email:sender})
       console.log(sender1)
      if( sender1.length===0||sender1[0].role!='coordinator'){
        return res.json({
          error:'you cannot view slot linking request as you are not a coordinator',
         })  
      }
      var requests= await requestsModel.find({to:sender,type:requestType.SLOT_LINKING})
  
                return res.json({
                 msg:'success',
                       requests
                })  

  } catch (exception) {
        return res.json({
          error: 'Something went wrong',
          exception
        })
      }
    }
     
    )




  router.post('/addSlot',
  async (req, res) => {
    try {
      const sender=req.body.email;
      const startTime=req.body.startTime
      const endTime=req.body.endTime
      const day=req.body.day
      const location=req.body.location
      const order=req.body.order

      const loc=await  locationModel.find({_id:location})
      if(!loc || loc.length===0){
        return res.json({
          error:'this is not a valid location in the university',
         })  
      }

      const sender1=await  academicMemberModel.find({email:sender,role:"coordinator"})

      if(sender1.length===0||sender1[0].role!='coordinator'){
        return res.json({
          error:'you cannot add slots as you are not a coordinator',
         })  
      }
     
      const course=await  courseModel.find({coordinator:sender})
      if(course.length===0){
        return res.json({
          error:'there is no courses that you are currently coordinating ',
         })  
      }
      const courseId=course[0]._id

      const slot=await  slotsModel.find({day:day,location:location,order:order})
      if(slot.length!=0){
        return res.json({
          error:'there is a slot in this time in this location please choose valid location or different time ',
         })  
      }


      var slot1=new slotsModel({
        startTime:startTime,
        endTime:endTime,
        day:day,
        course:courseId,
        location:location,
        order:order
      })
      slot1.save();
  
                return res.json({
                 msg:'slot added successfully',
                       slot1
                })  

  } catch (exception) {
        return res.json({
          error: 'Something went wrong',
          exception
        })
      }
    }
     
    )





    router.put('/updateSlot',
  async (req, res) => {
    try {
      const sender=req.body.email;
      const startTime=req.body.startTime
      const endTime=req.body.endTime
      const day=req.body.day
      const location=req.body.location
      const order=req.body.order
      const slotId=req.body.slot

      const loc=await  locationModel.find({_id:location})
      if(!loc || loc.length===0){
        return res.json({
          error:'this is not a valid location in the university',
         })  
      }

      const sender1=await  academicMemberModel.find({email:sender,role:"coordinator"})

      if(sender1.length===0||sender1[0].role!='coordinator'){
        return res.json({
          error:'you cannot update slots as you are not a coordinator',
         })  
      }
     
      const course=await  courseModel.find({coordinator:sender})
      if(course.length===0){
        return res.json({
          error:'there is no courses that you are currently coordinating ',
         })  
      }
      const courseId=course[0]._id
     // console.log("nannananna")

      const slot=await slotsModel.find({day:day,location:location,order:order})
     // console.log(slot)
      if(slot.length!=0){
        return res.json({
          error:'there is a slot in this time in this location please choose valid location or different day ',
         })  
      }

      await slotsModel.findByIdAndUpdate(slotId, {startTime:startTime,endTime:endTime,day:day,course:courseId,location:location,order:order})

             //   console.log("slot")
                return res.json({
                 msg:'slot updated successfully',
                })  

  } catch (exception) {
        return res.json({
          error: 'Something went wrong',
          exception
        })
      }
    }
     
    )


    router.delete('/deleteSlot',
  async (req, res) => {
    try {
      const sender=req.body.email
      const slotId=req.body.slot


      const sender1=await  academicMemberModel.find({email:sender,role:"coordinator"})

      if(sender1.length===0||sender1[0].role!='coordinator'){
        return res.json({
          error:'you cannot update slots as you are not a coordinator',
         })  
      }
     
      const course=await  courseModel.find({coordinator:sender})
      if(course.length===0){
        return res.json({
          error:'there is no courses that you are currently coordinating ',
         })  
      }

      await slotsModel.findByIdAndDelete(slotId)
                return res.json({
                 msg:'slot deleted successfully',
                })  

  } catch (exception) {
        return res.json({
          error: 'Something went wrong',
          exception
        })
      }
    }
     
    )

    router.post('/acceptSlotLinkingRequest',
    async (req, res) => {
      try {
        const sender=req.body.email;
        const request=req.body.request


        const request1=await requestsModel.find({_id:request})
        const sender1=await  academicMemberModel.find({email:sender,role:"coordinator"})


        if(!request1 || request1.length===0){
          return res.json({
            error:'this is not a valid request id',
           })  
        }
        if(sender1.length===0||sender1[0].role!='coordinator'){
          return res.json({
            error:'you cannot  accept slotlinking requests  as you are not a coordinator',
           })  
        }
       
        const course=await  courseModel.find({coordinator:sender})
        if(course.length===0){
          return res.json({
            error:'there is no courses that you are currently coordinating ',
           })  
        }

        await requestsModel.findByIdAndUpdate(request, {status:requestStatus.ACCEPTED})
        var notification=new notificationModel({
          academicMember:request1[0].from,
          request:request
        })
        notification.save()
        
                  return res.json({
                   msg:'succefully accepted request',
                  })  

        
  
    } catch (exception) {
          return res.json({
            error: 'Something went wrong',
            exception
          })
        }
      }
       
      )


      router.post('/rejectSlotLinkingRequest',
    async (req, res) => {
      try {
        const sender=req.body.email;
        const request=req.body.request

        const request1=await requestsModel.find({_id:request})
        const sender1=await academicMemberModel.find({email:sender,role:"coordinator"})

        if(!request1 || request1.length===0){
          return res.json({
            error:'this is not a valid request id',
           })  
        }
  
        if(sender1.length===0||sender1[0].role!='coordinator'){
          return res.json({
            error:'you cannot reject slotlinking requests as you are not a coordinator',
           })  
        }
       
        const course=await  courseModel.find({coordinator:sender})
        if(course.length===0){
          return res.json({
            error:'there is no courses that you are currently coordinating ',
           })  
        }
        await requestsModel.findByIdAndUpdate(request, {status:requestStatus.REJECTED})
        var notification=new notificationModel({
          academicMember:request1[0].from,
          request:request
        })
        notification.save()
        
                  return res.json({
                   msg:'succefully rejected request',
                  })  

                
  
    } catch (exception) {
          return res.json({
            error: 'Something went wrong',
            exception
          })
        }
      }
       
      )








module.exports = router
