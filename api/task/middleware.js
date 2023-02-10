const db = require("../../data/dbConfig");

// exports.checkTaskId = async (req, res, next) => {
//   try {
//     const presentTask = await db("tasks")
//       .where("task_id", req.params.task_id)
//       .first();

//     if (!presentTask) {
//       next({
//         status: 404,
//         message: `task_id ${req.params.task_id} id li task bulunamadı`,
//       });
//     } else {
//       req.task = presentTask;
//       next();
//     }
//   } catch (error) {
//     next(error);
//   }
// };

exports.checkPayload = (req, res, next) => {
  try {
    const { task_description } = req.body;

    if (!task_description) {
      next({
        status: 400,
        message: "task_description zorunlu",
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
