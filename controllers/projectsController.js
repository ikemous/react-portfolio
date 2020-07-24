const db = require("../models/index.js");

module.exports={
    findAll(req, res)
    {
        db.Portfolio.find({})
        .then(collections => res.json(collections))
        .catch(error => res.status(422).json(error));
    },
    findByFilter({params}, res)
    {
        db.Portfolio.findById({description: `/${params.filter}/`})
        .then(collection => res.json(collection))
        .catch(error => res.status(422).json(err));
    }
};
