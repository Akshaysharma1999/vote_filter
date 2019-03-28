const {Router} = require('express')
const route = Router()

//function to generate random names
function random_string(n)
{
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzUVWXYZabcdefghijklm" 
    
    let i=0 , num;
    
    while( i == 0 )
    {
         num = Math.random()*10 ;
       
        if(num >= 1 && num <= 60 )
        {
            i=1 ;
        }
    }

   return possible.substr(num,n)
}


route.post('/aadhaar_auth',(req,res)=>{
    // res.send('/aadhaar_auth route')
    let name  = random_string(6)
    
    res.send(
        {
            name:name,
            ph_no:"9582312294",
            aadhaar_no:"1121232322",
            otp:2294 
        }
    )
})

route.get('/verified_user',(req,res)=>{
    // res.send('/verified_user route')
    
})

module.exports = route
