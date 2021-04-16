const mongoose= require("mongoose");
const regschema= new mongoose.Schema ({

name:{
   type:String 
},
past_incidence:{
    type:String
},
nin:{
    type:String
},
birthdate:{
    type:String
},
homeaddress:{
    type:String
},
driving_licence_no:{
    type:Number
},
gender:{
    type:String
},



})

module.exports = mongoose.model("Reg", regschema);
