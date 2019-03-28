 var mongoose = require('mongoose');
 
var  VoterSchema = mongoose.Schema({
    aadhaar: {
        type: String,
        requried:true,
        unique: true
    },
    votername: {
        type: String,
        required: true
    },
    age: {
        type: integer,
        required: true
    },
    phone: {
      type: String,
      required: true
    },
    voterID:{
      type: String,
      required: true
    }   
});

var Voter = module.exports = mongoose.model('Voter',VoterSchema);
