const Shape = require("./shape.js");

class Square extends Shape {
    constructor(text, textColor, shapeColor)
    super(text, textColor, shapeColor);

        render() {
            return `<svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" height="175" width="175" fill="${this.shapeColor}"/>
            <text fill="${this.textColor}" font-size="50" x="70" y="125" text-anchor="middle">${this.text}</text>
            </svg>`
        }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor)
    super(text, textColor, shapeColor);

    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />
          <text x="150" y="110" fill="${this.textColor}" text-anchor="middle" font-size="50">${this.text}</text>
        </svg>`
      }
}
class Triangle extends Shapes {
    constructor(name, textColor, shapeColor) {
      super(name, textColor, shapeColor);
    }
    render() {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150, 18 244, 182 56, 182"  fill="${this.shapeColor}" />
          <text x="150" y="125" fill="${this.textColor}" text-anchor="middle" font-size="50">${this.text}</text>
        </svg>`;
    }
  }

  module.export = {Circle, Square, Triangle};