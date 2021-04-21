const mongoose= require("mongoose");
const drschema= new mongoose.Schema ({

name:{
   type:String 
},
nin:{
    type:String
},
home_address:{
    type:String
},
birthdate:{
    type:String
},
driving_licence_no:{
    type:Number
},
past_incidence:{
    type:String
},
gender: [{type:String}],



})

module.exports = mongoose.model("Driver", drschema);
