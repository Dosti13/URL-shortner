const express = require("express")
const router = express.Router('/url')
const {shorturl,redirect,getanlaytics} = require('../controller/url')


router.post('/',shorturl)
router.get('/:Shortid',redirect)
router.get('/analytics/:Shortid',getanlaytics)
module.exports=router