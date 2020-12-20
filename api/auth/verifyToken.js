const jwt = require('jsonwebtoken')
const logoutModel = require('../../Models/logout.model')




const verify=async (req, res,next)=>{
    const token= req.headers.token
    const s=await logoutModel.find({token:token})
    if(s!=null || s.length>0){
      return res.status(401).status('Access deined, you are not loggod in') 
    }
    if(!token)  
    {
        return res.status(401).status('Access deined')
    }
   try{
       
        const verified= await jwt.verify(token,"HS256")
         req.user=verified
         console.log(req.user)
         req.id="ac-2"
        
         //return res.send("SUCCESS")
         next()
    }
    catch(err){
      res.status(400).send('Invalid Request')
        err
    }
}
module.exports = {verify}