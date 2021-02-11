const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require('hbs')
const staticPath = path.join(__dirname,"../public")
console.log(staticPath);
app.use(express.static(staticPath));
app.set("view engine","hbs");
const template_path = path.join(__dirname,"../templates/views")
app.set("views",template_path)
const partials_path = path.join(__dirname,"../templates/partials")
hbs.registerPartials(partials_path)

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/signup",(req,res)=>{
    res.render("checkweather");
})


app.listen(port,()=>{
    console.log(`serve is running succesfully at ${port}`)
})