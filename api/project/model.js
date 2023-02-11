const db = require("../../data/dbConfig");

exports.getAll = async (project_id) => {
  const rows = await db("projects");

exports.getByProjectId = async project_id =>{
    const row = await db("project as p")
    
}
