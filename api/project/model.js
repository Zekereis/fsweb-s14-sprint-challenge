const db = require("../../data/dbConfig")

exports.getByProjectId = async project_id =>{
    const row = await db("project as p")
    
}
