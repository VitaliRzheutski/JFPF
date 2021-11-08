const router = require("express").Router();
const { Student, Campus } = require("../db");

//GET/api/students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    // console.log("students:", students);
    res.json(students);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    // consolex.log("req.params:", req.params);
    const singleStudent = await Student.findByPk(req.params.id, {
      include: [Campus],
    });
    // console.log("singleStudent:", singleStudent);
    res.json(singleStudent);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const addStudent = await Student.create(req.body);
    res.json(addStudent);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updateStudent = await Student.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updateStudent) res.sendStatus(404);
    else res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    // console.log("req.params:", req.params);
    const deleteStudent = await Student.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteStudent) res.sendStatus(404);
    else res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});



module.exports = router;
