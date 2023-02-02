const jwt = require("jsonwebtoken");
const Registration = require("../model/registration");

const auth = async (req, res, next)=>{
    try{
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        console.log(verifyUser);
        const user = Registration.findOne({_id:verifyUser._id});
        // console.log(user);
        req.token = token;
        req.user = user;
        next();
    }catch(e){
        // throw new Error (e); 
        res.send("Please log in to access this page")
        
    }
}

module.exports = auth;