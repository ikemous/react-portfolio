const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projects");

const projects = [
    {
        "title": "HALP",
        "description": "Ticketing system to create and track workflow",
        "skills": "React, Node, MongoDB, CSS, HTML, CSS, Project",
        "imageRoute": "/images/halp.webp",
        "githubURL": "https://github.com/Lancasting/Final-Project",
        "deployedURL": "https://halp-me.herokuapp.com/"
    },
    {
        "title": "Burger Lover",
        "description": "Application to save and chomp on burgers",
        "skills": "Javascript, Node, Handlebars, MySQL, CSS, HTML",
        "imageRoute": "/images/burgerLogger.webp",
        "githubURL": "https://github.com/ikemous/burger_logger",
        "deployedURL": "https://buger-eater.herokuapp.com/"
    },
    {
        "title": "Movie Lover",
        "description": "Application to Search and save movies for a list",
        "skills": "Javascript, API, Node, Handlebars, CSS, HTML, Project",
        "imageRoute": "/images/movieLover.webp",
        "githubURL": "https://github.com/Robbie2497/Project-2",
        "deployedURL": "https://projectdash.herokuapp.com/"
    },
    {
        "title": "Team Generator",
        "description": "Application to generate team information and turn into an html page",
        "skills": "Javascript, Node, CSS, HTML",
        "imageRoute": "/images/teamGenerator.webp",
        "githubURL": "https://github.com/ikemous/GUI-team-generator",
        "deployedURL": "https://dev-team-generator.herokuapp.com/"
    },
    {
        "title": "Weather",
        "description": "Application to show the weather of a desired City",
        "skills": "Javascript, CSS, HTML",
        "imageRoute": "/images/weather.webp",
        "githubURL": "https://github.com/ikemous/weather",
        "deployedURL": "https://ikemous.github.io/weather/"
    },
    {
        "title": "Quiz",
        "description": "Javascript quiz with random created questions",
        "skills": "Javascript, CSS, HTML",
        "imageRoute": "/images/quiz.webp",
        "githubURL": "https://github.com/ikemous/quiz",
        "deployedURL": "https://ikemous.github.io/quiz/"
    },
    {
        "title": "Grocery List",
        "description": "Application to search for food and save it to a list for later",
        "skills": "API, Javascript, Project, CSS, HTML",
        "imageRoute": "/images/groceryList.webp",
        "githubURL": "https://github.com/fftab/Grocery-List",
        "deployedURL": "https://fftab.github.io/Grocery-List/"
    },
    {
        "title": "Team Generator Console",
        "description": "Console Application to create a team html page",
        "skills": "Node, Javascript, HTML, CSS",
        "imageRoute": "/images/teamGeneratorConsole.webp",
        "githubURL": "https://github.com/ikemous/teamGenerator",
        "deployedURL": ""
    },
    {
        "title": "Employee Tracker",
        "description": "Console Application to track employee information",
        "skills": "Node, MySql, Javascript",
        "imageRoute": "/images/employeeTracker.webp",
        "githubURL": "https://github.com/ikemous/employee-tracker",
        "deployedURL": ""
    },
    {
        "title": "Read Me Generator",
        "description": "Console Application to create readme file",
        "skills": "Node, Javascript",
        "imageRoute": "/images/readmeGenerator.webp",
        "githubURL": "https://github.com/ikemous/read-me-generator",
        "deployedURL": ""
    },
    
];

db.Project.deleteMany({})
.then(() => db.Project.collection.insertMany(projects))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.log(err);
    process.exit(1);
});