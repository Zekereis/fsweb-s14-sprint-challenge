const express = require("express");
const Project = require("./model")

const router = express.Router();

const md = require("./middleware");

router.get("/project:id", md.checkProjectId,(req,res,next) => {
    try{
        Project.getProjectId(req.params.id)
        .then( projects  => {
            res.json(projects)
        })
    }catch(err){
        next(err)
    }
})

router.post("/project", md.checkPayload,async (req,res,next) => {
    try{

    }catch(err){
        next(err)
    }
})

module.exports = router;