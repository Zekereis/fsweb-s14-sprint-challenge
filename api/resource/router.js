const express = require("express");
const Resource = require("./model")

const router = express.Router();

const md = require("./middleware");

router.get("/resource:id", md.checkResourceId,(req,res,next) => {
    try{
        Resource.getResourceId(req.params.id)
        .then( resources  => {
            res.json(resources)
        })
    }catch(err){
        next(err)
    }
})

router.post("/resource",md.checkPayload,async (req,res,next) => {
    try{

    }catch(err){
        next(err)
    }
})

module.exports = router;
