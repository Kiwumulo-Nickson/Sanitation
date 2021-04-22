const mongoose= require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const regischema= new mongoose.Schema ({
firstname :{
    type:String
},
lastnamee :{
    type:String
},
username :{
    type:String,
    unique:true
},
password :{
    type:String
}
})

regischema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Signup", regischema);
