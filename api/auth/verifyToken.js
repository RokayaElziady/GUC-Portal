const jwt = require('jsonwebtoken')


const verify=(req, res,next)=>{
    //const token= req.headers.token
    //if(!token)  
    //{
      //  return res.status(401).status('Access deined')
    //}
 //   try{
     //   const verified= jwt.verify(token, process.env.TOKEN_SECRET)
  //       req.user.id="20"
  // req.user.role = "HOD"
  req.user={id:"1",role:"HOD"}
        next()
    //}
    //catch(err){
      //  res.status(400).send('Invalid Request')
       // err
    //}
}
module.exports = {verify}