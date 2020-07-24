const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dateObj = {
    type: Date,
    default: Date.now()
}
const stringObj = {
    type: String,
    trim: true
}

const PortfolioSchema = new Schema(
    {
        createdDate: dateObj,
        updatedDate: dateObj,
        title: stringObj,
        description: stringObj,
        imageRoute: stringObj,
        githubURL: stringObj,
        deployedURL: stringObj
    }
);

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

module.exports = Portfolio;