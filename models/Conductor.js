const mongoose= require("mongoose");
const conschema= new mongoose.Schema ({

name:{
   type:String 
},
birthdate:{
    type:String
},
nin:{
    type:String
},
home_address:{
    type:String
},


})

module.exports = mongoose.model("Conductor", conschema);
