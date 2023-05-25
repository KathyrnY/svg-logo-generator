const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Circle, Triangle } = require("./lib/shape.js");

const questions = [
    {
        type: 'input',
        message: 'Please enter up to three characters for your logo',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Please enter a color for the text of your logo',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Please select a shape for your logo',
        name: 'shape',
        choices: ['Square', 'Circle', 'Triangle']
    },
    {
        type: 'input',
        message: 'Please enter a fill color for your shape',
        name: 'shapeColor',
    },
]
function writeFile(filename, logo) {
    fs.writeFile(`./example-svg/${filename}.svg`, logo, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
}

function init() {
    inquirer
    .prompt(questions)
    .then(response => {
        if (response.shape === 'Square') {
            let square = new Square(response.text, response.textColor, response.shapeColor);
            writeFile('logo', square.render());
          } else if (response.shape === 'Circle') {
            let circle = new Circle(response.text, response.textColor, response.shapeColor);
            writeFile('logo', circle.render());
          } else if (response.shape === 'Triangle') {
            let triangle = new Triangle(response.text, response.textColor, response.shapeColor);
            writeFile('logo', triangle.render());
        }
    })
}
    init();