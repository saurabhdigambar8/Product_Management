const express = require('express');
const mongoose = require('mongoose');
const route = require("../src/route/route")
const app = express()
const multer = require('multer')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://saurabhdigambar8:X1UED3V4eKh2u9M4@cluster0.tlt0rzr.mongodb.net/Product_Management" , {useNewUrlParser: true})
.then(()=> console.log("MongoDB is connected"))
.catch((err)=> err.message)

app.use(multer().any())
app.use("/", route)

app.listen(process.env.PORT || 8000, ()=>{
    console.log("Express app running on PORT ", process.env.POR ||  8000)
})