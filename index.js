// initialize dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const { Shape, Circle, Square, Triangle } = require('./lib/shape.js');

class SVGLogo {
    constructor() {
        this.textElement = ''; // Initialize the text element
        this.shapeElement = ''; // Initialize the shape element
    }

    render() {
        // Render the SVG markup by combining the shape element and text element
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    setTextElement(color, text) {
        // Set the text element with the provided color and text
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape) {
        // Set the shape element by rendering the provided shape
        this.shapeElement = shape.render();
    }
}

// Inquirer questions array

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text (Up to 3 characters)',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be? Enter a color keyword or hexadecimal number',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape to define your logo',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be? Enter a color keyword or a hexadecimal number',
    },
];

// Write the content to a file with the provided filename
function writeToFile(filename, content) {
    fs.writeFile(filename, content, (err) => {
        if (err) {
            console.error('An error has occured');
            return;
        }
        console.log(`Logo created successfully.`);
    });
}

async function generateLogo() {

    // Prompt the user with questions and get the answers
    const { text, textColor, shape, shapeColor } = await inquirer.prompt(questions);

    let selectedShape;

    switch (shape.toLowerCase()) {
        case 'square':
            selectedShape = new Square();
            setLogoProperties(selectedShape);
            break;
        case 'circle':
            selectedShape = new Circle();
            setLogoProperties(selectedShape);
            break;
        case 'triangle':
            selectedShape = new Triangle();
            setLogoProperties(selectedShape);
            break;
        default:
            console.log('An error has occurred');
            return;
    }

    function setLogoProperties(shape) {
        shape.setColor(shapeColor);

        const svg = new SVGLogo();
        // Set the text and text color in the SVGLogo instance
        svg.setTextElement(textColor, text);
        // Set the shape in the SVGLogo instance
        svg.setShapeElement(shape);
        // Render the final logo content
        const logoContent = svg.render();

        // Write the logo content to a file named 'logo.svg'
        writeToFile('logo.svg', logoContent);
    }

}

// Call the generateLogo function to start generating the logo
generateLogo();
