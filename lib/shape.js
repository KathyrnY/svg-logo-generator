class Shape {
    constructor (text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return "";
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    setText(text)  {
        this.text = text;
    }

    setTextColor(txtColor) {
        this.textColor = txtColor;
    }

}
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.shapeColor = shapeColor;
}
        render() {
            return `<svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" height="175" width="175" fill="${this.shapeColor}"/>
            <text fill="${this.textColor}" font-size="50" x="70" y="125" text-anchor="middle">${this.text}</text>
          </svg>`
        }
    }
    class Circle extends Shape {
        constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeColor = shapeColor;
    }
        render() {
            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />
            <text x="150" y="110" fill="${this.textColor}" text-anchor="middle" font-size="50">${this.text}</text>
          </svg>`;
        }
        }
        class Triangle extends Shape {
            constructor(text, textColor, shapeColor) {
            super(text, textColor, shapeColor);
            this.shapeColor = shapeColor;
        }
        render() {
            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,18 244,182 56,182" fill="${this.shapeColor}" />
            <text x="150" y="125" fill="${this.textColor}" text-anchor="middle" font-size="50">${this.text}</text>
          </svg>`;
        }
            }

  module.exports = {
    Square,
    Circle,
    Triangle
  };
