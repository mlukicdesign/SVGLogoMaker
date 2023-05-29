const { Shape, Circle, Square, Triangle } = require('./your-module');

describe('Shape', () => {
  let shape;

  beforeEach(() => {
    shape = new Shape();
  });

  it('should initialize with an empty color', () => {
    expect(shape.color).toBe('');
  });

  it('should set the color correctly', () => {
    shape.setColor('red');
    expect(shape.color).toBe('red');
  });
});

describe('Square', () => {
  let square;

  beforeEach(() => {
    square = new Square();
  });

  it('should render a square with the correct color', () => {
    square.setColor('blue');
    const expectedRender = '<rect x="50" height="300" width="300" fill="blue"></rect>';
    expect(square.render()).toBe(expectedRender);
  });
});

describe('Triangle', () => {
  let triangle;

  beforeEach(() => {
    triangle = new Triangle();
  });

  it('should render a triangle with the correct color', () => {
    triangle.setColor('green');
    const expectedRender = '<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="green"></polygon>';
    expect(triangle.render()).toBe(expectedRender);
  });
});

describe('Circle', () => {
  let circle;

  beforeEach(() => {
    circle = new Circle();
  });

  it('should render a circle with the correct color', () => {
    circle.setColor('yellow');
    const expectedRender = '<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="yellow"></circle>';
    expect(circle.render()).toBe(expectedRender);
  });
});