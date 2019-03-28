var mongoose = require('mongoose');
mongoose.connect('localhost:27017/root');

var Voter = require('../models/db');

var voter = [

    new Voter({
      aadhaar: "444433332222",
      votername: "Nilesh Singh",
      age: 30,
      phone: "9971124287",
      voterID: "ABC1234567"     
    }),
    
    new Voter({
      aadhaar: "555578963333",
      votername: "Mamta Rawat",
      age: 36,
      phone: "8795862347",
      voterID: "ABC5896247"     
    }),
    
    new Voter({
      aadhaar: "999900001523",
      votername: "Mohit Rana",
      age: 46,
      phone: "8957896325",
      voterID: "ABC8956742"     
    })

]; 

var countvoter=0;

for(var i=0; i<voter.length; i++ ){
  voter[i].save(function(err,result){
      countvoter++;
      if(countvoter === voter.length){
          exit();
      }
  });
}

function exit(){
  mongoose.disconnect();
}
