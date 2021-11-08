const router = require("express").Router();
const { Campus, Student } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    // console.log("campses:", campuses);
    res.send(campuses);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    // console.log("req.params:", req.params);
    const singleCampus = await Campus.findByPk(req.params.id, {
      include: [Student],
    });
    // console.log("singleCampus:", singleCampus);
    res.json(singleCampus);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const createCampus = await Campus.create(req.body);
    res.json(createCampus);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const upgradeCampus = await Campus.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!upgradeCampus) res.sendStatus(404)
     res.sendStatus(200)
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    console.log("req.params:", req.params);
    const deleteCampus = await Campus.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteCampus) res.sendStatus(404);
    else res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
