const express = require("express")
const router = express.Router('')
const { restrict } = require('../middlewear/Auth')

const {handleviews,hadleadmin} = require('../controller/url')

router.get('/',restrict(['Normal','Admin']),handleviews)

router.get('/admin/urls',restrict(['Admin']),hadleadmin)
router.get('/login',(req,res)=>{
    return res.render("Login")
})
router.get('/signup',(req,res)=>{
    return res.render("signup")
})

module.exports = router