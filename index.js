// initialize dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const { Shape, Circle, Square, Triangle } = require("./lib/shape.js");

// Initialize the text element
class SVGLogo {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    // Render the SVG by combining the shape element and text element
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }

  setText(color, text) {
    // Set the text element
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" fill="${color}">${text}</text>`;
  }

  setShape(shape) {
    // Set the shape element
    this.shapeElement = shape.render();
  }
}

// Inquirer questions array

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter text (Up to 3 characters)",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "What color would you like your text to be? Enter a color keyword or a hex code",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape to define your logo",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "What color would you like your shape to be? Enter a color keyword or a hex code",
  },
];

// Write the content to a file with the provided filename
function writeToFile(filename, content) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error("An error has occured");
      return;
    }
    console.log(`Logo created successfully.`);
  });
}

async function generateLogo() {
  // Prompt the user with questions and get the answers
  const { text, textColor, shape, shapeColor } = await inquirer.prompt(
    questions
  );

  let selectedShape;

  switch (shape.toLowerCase()) {
    case "square":
      selectedShape = new Square();
      setLogoProperties(selectedShape);
      break;
    case "circle":
      selectedShape = new Circle();
      setLogoProperties(selectedShape);
      break;
    case "triangle":
      selectedShape = new Triangle();
      setLogoProperties(selectedShape);
      break;
    default:
      console.log("An error has occurred");
      return;
  }

  function setLogoProperties(shape) {
    shape.setColor(shapeColor);

    const svg = new SVGLogo();
    // Set the text and text color in the SVGLogo instance
    svg.setText(textColor, text);
    // Set the shape in the SVGLogo instance
    svg.setShape(shape);
    // Render the final logo content
    const logoContent = svg.render(); 

    // Write the logo content to a file named 'logo.svg'
    writeToFile("logo.svg", logoContent);
    console.log('Logo has been created')
  }
}

console.log();
// Call the generateLogo function to start generating the logo
generateLogo();
