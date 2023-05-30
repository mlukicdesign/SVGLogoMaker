const { Shape, Circle, Square, Triangle } = require('./shape.js');

describe('Shape class', () => {
  test('setColor method sets the color property correctly', () => {
    const shape = new Shape();
    shape.setColor('red');
    expect(shape.color).toBe('red');
  });
});

describe('Square class', () => {
  test('render method returns the SVG rect with the correct color', () => {
    const square = new Square();
    square.setColor('blue');
    const svgRect = square.render();
    expect(svgRect).toBe('<rect x="50" height="300" width="300" fill="blue"></rect>');
  });
});

describe('Triangle class', () => {
  test('render method returns the SVG polygon with the correct color', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    const svgPolygon = triangle.render();
    expect(svgPolygon).toBe('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="green"></polygon>');
  });
});

describe('Circle class', () => {
  test('render method returns the SVG circle with the correct color', () => {
    const circle = new Circle();
    circle.setColor('yellow');
    const svgCircle = circle.render();
    expect(svgCircle).toBe('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="yellow"></circle>');
  });
});
