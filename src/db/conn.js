const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Dynamic").then(()=>{
     console.log("Mongodb Connected........")
}).catch(()=>{
     console.log("Connection failed....");
})
