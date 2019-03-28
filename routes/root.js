const {Router} = require('express')
const route = Router()

route.post('/aadhaar_auth',(req,res)=>{
    // res.send('/aadhaar_auth route')
    res.send(
        {
            name:"akshay",
            ph_no:"9582312294",
            age:19,
            otp:2294 
        }
    )
})

route.get('/verified_user',(req,res)=>{
    // res.send('/verified_user route')
    
})

module.exports = route
