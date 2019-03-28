const {Router} = require('express')
const route = Router()
var Voter = require('../models/db');

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
  
    // Info from aadhaar server  
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
    // 
    // database work
    // will find if aadhaar given is in the database or not if present will not add and return with new Error message:" previously added "
    // if not will add it to table 
    // 
    //json (sample)  
    //   {
    //	"voter":{
   //    "name":"akshay",
   //     "age":20
  //      }
  //    }
  //  to access req.body.voter.
  

    
    // seed data 
    var aadhaar = req.body.Voter.aadhaar;
    var votername = req.body.Voter.votername;
    var age = req.body.Voter.age;
    var phone = req.body.Voter.phone;
    var voterID = req.body.Voter.voterID;
    
    try{
        db.collection('Voter').find({aadhaar:aadhaar}).toArray( (err, result) => {
        if (err) {
            console.log('Search error');
        } else if (_.isEmpty(result)) {
            console.log('Voter is not present in the data base')
            result.save()
                .then(item => {
                    res.send("Voter is saved to the database");
                 })
                 .catch(err => {
                    res.status(400).send("Unable to save the voter to the  database");
              });
        } else {
            console.log('Voter is present in the database')
       };
            
      });
     }
    )}
    catch (err) {
    //console.error("error");
}                                                           
    

module.exports = route
