const router = require("express").Router();
const projectsController = require("../controllers/projectsController.js");

router.route("/Portfolio")
    .get(projectsController.findAll);

router.route("/Portfolio/:filter")
    .get(projectsController.findByFilter);

module.exports = router;