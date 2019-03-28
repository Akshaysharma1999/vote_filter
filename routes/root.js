const {Router} = require('express')
const route = Router()
var Voter = require('../models/db');

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
    
    // seed data 
    var aadhaar = req.body.aadhaar;
    var votername = req.body.votername;
    var age = req.body.age;
    var phone = req.body.phone;
    var voterID = req.body.voterID;
    
    try{
        db.collection('Voter').find({aadhaar:aadhaar}).toArray((err, result) => {
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
     }
    catch (err) {
    //console.error("error");
}                                                           
});
    
})

module.exports = route
