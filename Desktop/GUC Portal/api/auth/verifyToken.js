const jwt = require('jsonwebtoken')


const verify=(req, res, next)=>{
    const token= req.headers.token
    if(!token)  
    {
        return res.status(401).status('Access deined')
    }
    try{
        const verified= jwt.verify(token, process.env.TOKEN_SECRET)
        req.user= verified
        next()
    }
    catch(err){
        res.status(400).send('Invalid Request')
    }
}

<<<<<<< HEAD
=======


>>>>>>> e2aa3f7038320e3b1d1c5bd7d02e12819358942b
module.exports = {
    verify
}