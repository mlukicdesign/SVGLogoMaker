// initialize dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// module import
const {Circle, Square, Triangle} = require('./lib/shape.js');



// SVG Class with constructor fucntion to render output

class SVGLogo {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    
    render() {

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()

    }

}








// Defines questions arrays for user input

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter text (Up to 3 characters)",
    },
    {
        type: "input",
        name: "text-colour",
        message: "What colour would you like your text to be? Enter a colour keyword or hexidecimal number",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape to define your logo",
        choices: ["Cricle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shape-colour",
        message: "Enter a colour keyword or a hexidecimal number",
    },
]

function writeToFile(filename, content) {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Content written to ${filename} successfully.`);
    });
  }



// Async Function

async function generateLogo() {
    console.log('Generating Logo')

    let userString = '';
    let selectedTextColor = '';
    let selectedShapeColor = '';
    let selectedShape = '';


    // Handle user text input

    const answers = await inquirer.prompt(questions);

    if (answers.text.length > 0 && answers.text.length < 4) {
        userString = answers.text;
    } else {
        console.log("Error! Please enter no more then 1 - 3 characters");
        return;
    }

    // Apply users selected code


    // Handle shape selection

    switch (selectedShape.toLowerCase()) {
        case "square":
            selectedShape = new Square();
            console.log('User selected a square');
            break;
        case 'circle':
            selectedShape = new Circle();
            console.log('User selected a circle');
            break;
        case 'triangle':
            selectedShape = new Triangle();
            console.log('User selected Triangle');
            break;
        default:
            console.log('An error has occured')
    }

    // selectedShapeColor.setColor(selectedShapeColor)

    const svg = new SVGLogo();
    svg.setTextElement(userString, selectedTextColor);
    svg.setShapeElement(selectedShape);
    userString = svg.render();

    writeToFile();
   
}

generateLogo();