

const jwt = require('jsonwebtoken')
const verify=async (req, res, next) => {
  const token = req.headers.token
  // TODO deny access if token does not exist
  req.user = await jwt.verify(token,"HS256" )
  next()
};
   

module.exports = {verify}