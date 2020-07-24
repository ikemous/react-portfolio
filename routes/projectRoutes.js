const router = require("express").Router();
const projectsController = require("../controllers/projectsController.js");

router.route("/portfolio")
    .get(projectsController.findAll);

router.route("/portfolio/:filter")
    .get(projectsController.findByFilter);

module.exports = router;