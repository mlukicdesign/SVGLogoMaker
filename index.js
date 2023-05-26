// initialize dependencies
const fs = require('fs');
const inquirer = require('inquirer');

// module import
const { Shape, Circle, Square, Triangle } = require('./lib/shape.js');

// SVG Class with constructor function to render output
class SVGLogo {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    setTextElement(color, text) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

// Defines questions array for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text (Up to 3 characters)',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'What colour would you like your text to be? Enter a colour keyword or hexadecimal number',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape to define your logo',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'What colour would you like your shape to be? Enter a colour keyword or a hexadecimal number',
    },
];

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
    console.log('Generating Logo');

    let userText = '';
    let userTextColor = '';
    let selectedShapeColor = '';
    let selectedShape = '';

    // Handle user input
    const answers = await inquirer.prompt(questions);

    userText = answers.text;
    userTextColor = answers['text-color'];
    selectedShapeColor = answers['shape-color'];
    selectedShape = answers.shape.toLowerCase();

    // Handle shape selection
    let shape;

    switch (selectedShape) {
        case 'square':
            shape = new Square();
            console.log('User selected a square');
            break;
        case 'circle':
            shape = new Circle();
            console.log('User selected a circle');
            break;
        case 'triangle':
            shape = new Triangle();
            console.log('User selected a triangle');
            break;
        default:
            console.log('An error has occurred');
            return;
    }


    shape.setColor(selectedShapeColor);

    const svg = new SVGLogo();
    svg.setTextElement(userTextColor, userText);
    svg.setShapeElement(shape);
    const logoContent = svg.render();

    writeToFile('logo.svg', logoContent);

    console.log(userText)
    console.log(userTextColor)
}

generateLogo();
