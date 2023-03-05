const express = require('express');
const app =  express();  
const path = require("path");
const PORT = process.env.PORT || 3000;
require("./db/conn");
const hbs =  require("hbs");
const User= require("./models/usermessage")

const publi = path.join(__dirname,"../public");

const viepath = path.join(__dirname,"../templates/views");
const vieparti = path.join(__dirname,"../templates/partials");

// this method use when hbs used and all hbs files is in views folder
app.set("view engine","hbs");
app.set("views",viepath);
hbs.registerPartials(vieparti);
app.use(express.urlencoded({ extended:false}));

// this method use when all file code in public directirei(folder)
// app.use(express.static(publi))

app.get("/",(req,res)=>{
     res.render("index");
})
app.get("/contact",(req,res)=>{
     res.render("contact");
})

app.post("/contact", async(req,res)=>{
        try {
          console.log("good sing");
          const data = await new User(req.body);
          await data.save()
          res.status(201).render("index");
          console.log("good sing");
          // res.send(req.body);
        } catch (err) {
           res.status(500).send("Errodfsdfsr" + err)
        }

})
app.listen(PORT,()=>{
     console.log("Server started on port: http://localhost:" + PORT);
})
