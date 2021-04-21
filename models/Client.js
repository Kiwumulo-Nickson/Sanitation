const mongoose= require("mongoose");
const clieschema= new mongoose.Schema ({
name :{
    type:String
},
location :{
    type:String
},
service_requested :{
    type:String,
},
no_trucks:{
    type:String
},
nin :{
    type:String
},
request_duration :{
    type:String
},
type_of_request :{
    type:String,
},
contact:{
    type:String
}
})

module.exports = mongoose.model("Client", clieschema);
