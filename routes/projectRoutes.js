const router = require("express").Router();
const projectsController = require("../controllers/projectsController.js");

router.route("/project")
    .get(projectsController.findAll);

router.route("/project/:filter")
    .get(projectsController.findByFilter);

module.exports = router;