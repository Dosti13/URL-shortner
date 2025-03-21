const express = require("express")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 4000
const urlroute  = require('./route/url')
const staticroute  = require('./route/Static')
const Userroute = require('./route/User')
const path = require("path")
const connect = require ('./db/db')
const cookieparser = require("cookie-parser")
const {checkForAuthentication,restrict} = require("./middlewear/Auth")


app.set("view engine","ejs")
app.set("views", path.join(__dirname, "views"));
connect()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieparser())
app.use(checkForAuthentication)

app.use('/url', restrict(['Normal','Admin']), urlroute)

app.use('/user',Userroute)

app.use('/',staticroute)
app.listen(port,()=>console.log(`Server listen in this ${port}`))
