 # SVG Logo Maker

 ## Table of Contents
- [Walkthough & Description](#description)
- [Usage](#usage)
- [Credits](#credits)
- [Test Instructions](#testing)
- [Contact](#contact)

 
 ## Project Link
---
https://github.com/mlukicdesign/SVGLogoMaker
<br>
<br>

 ## Project Walkthrough Video

https://drive.google.com/file/d/1INgDrFDXNqTgitULm7WVokdAqetQETwm/view


<br>
<br>

 ## Description 
 ---
 This logo maker creates a unique logo based on your input! 

 Code Walkthrough:


### Dependencies and Class Initialization:
- At the beginning of the code, we import the required dependencies: fs for file system operations and inquirer for user prompts.
We also import the Shape, Circle, Square, and Triangle classes from the shape.js module.

### SVGLogo Class:
- Next, we define the SVGLogo class that represents the logo.
- It has two properties: textElement and shapeElement, which store the text and shape elements of the logo, respectively.
- The class has a render() method that combines the shape and text elements to generate the final SVG logo.

### Inquirer Questions:
- We define an array of inquirer questions that will be prompted to the user.
- The questions ask for the text content, text color, shape selection, and shape color for the logo.
### Writing to File:
- The writeToFile() function takes a filename and content as parameters and writes the content to a file with the provided filename.
- If an error occurs during the write operation, an error message is logged. Otherwise, a success message is displayed.
### Generating the Logo:
- The generateLogo() function is defined as an asynchronous function.
- It uses the inquirer.prompt() method to prompt the user with the defined questions and await the user's answers.
- The answers are stored in variables: text, textColor, shape, and shapeColor.
### Selecting the Shape:
- Based on the shape selected by the user, the switch statement creates an instance of the corresponding shape class: Circle, Square, or Triangle.
- The setLogoProperties() function is called, passing the selected shape as an argument.
### Setting Logo Properties:
- The setLogoProperties() function takes the shape as a parameter.
- It sets the shape's color using the shapeColor provided by the user.
- It creates a new instance of the SVGLogo class and sets the text and text color using the user-provided values.
- The shape is then set in the SVGLogo instance.
- The render() method is called to generate the final logo content.
- The writeToFile() function is called to write the logo content to a file named 'logo.svg'.

### Conclusion:
After generating the logo, a success message is logged, indicating that the logo has been created.
### Execution:
The generateLogo() function is called at the end of the script to start the logo generation process.
---


 ### Application License:
 ---
 [![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

 <br>
 <br>

 ## Usage
 ---
 The application is initizlied with 'node index.js'. You will then be prompted with a series of questions to gather information about your logo. The logo is then generated and written to the relvant folder.
 <br>   
 <br>

 ## Credits & Dependencies
 ---
 node.js
 Jest Tests
 inquirer.js 


 ## Testing
 ---
 To run tests on this project. Run 'npm jest' in your terminal. Tests are only provided on the  "shape.js" file .
 <br>
 <br>

 ## Contact
 ---
 Please feel free to reach out with any questions regarding this project via the details below:
 <br>
 mlukicdesign@gmail.com <br>
 https://github.com/mlukicdesign 
