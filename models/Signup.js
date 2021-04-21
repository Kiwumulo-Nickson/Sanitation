const mongoose= require("mongoose");
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

module.exports = mongoose.model("Signup", regischema);
