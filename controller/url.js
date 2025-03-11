const Url = require('../model/Url')
const shortId = require("shortid")

async function handleviews (req,res){
        
    const  Urldata = await Url.find({createdBy: req.user._id }).populate("createdBy")
    res.render('index',{ urls:Urldata})
}
async function hadleadmin (req,res){
        
    const  Urldata = await Url.find({}).populate("createdBy")    
    res.render('index',{urls:Urldata})
}

async function shorturl(req,res) {
    const body = req.body;
    
    if(!body.Url) return res.status(400).json({error:"url dede "})
        const ShortId = shortId()
    await Url.create ({

        redirecturl:body.Url,
        Shortid:ShortId,
        visithistor:[],
        createdBy: req.user._id,

    }  )  

    return res.render("index",{
        id:ShortId,
    })
    
}
async function redirect(req,res) {
    const Shortid = req.params.Shortid
    
    const entry = await Url.findOneAndUpdate(
    {
        Shortid,
    },
    {
        $push:{
            visithistor:{
                timestamp: Date.now(),
            },
        },
    })
    
    res.redirect(entry.redirecturl)
}

async function getanlaytics (req,res){
    const Shortid = req.params.Shortid
    if (!shortId) return res/JSON({error:"something "})
    const result = await Url.findOne({Shortid})
    
    return res.json({
        totalclicks:result.visithistor.length,
        analytics:result.visithistor })
}

module.exports = {shorturl,redirect,getanlaytics,handleviews,hadleadmin}