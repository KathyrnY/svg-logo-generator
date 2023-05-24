const { Square, Circle, Triangle } = require("./shapes.js");

describe("Shape", () => {
    describe("Square", () => {
      it("A square blue shaped object should generate", () => {
        const shape = new Square();
        shape.setColor("blue");
        shape.setText("UNC1");
        shape.setTextColor("red");
        expect(shape.render()).toEqual(
          `<svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" height="175" width="175" fill="${shape.shapeColor}"/>
            <text fill="${shape.textColor}" font-size="50" x="70" y="125" text-anchor="middle">${shape.text}</text>
          </svg>`
        );
      });
    });

    describe("Circle", () => {
        it("A circle green shaped object should generate", () => {
          const shape = new Circle();
          shape.setColor("green");
          shape.setText("UNC2");
          shape.setTextColor("black");
          expect(shape.render()).toEqual(
            `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="75" fill="${shape.shapeColor}" />
            <text x="150" y="110" fill="${shape.textColor}" text-anchor="middle" font-size="50">${shape.text}</text>
          </svg>`
          );
        });
      });

      describe("Triangle", () => {
        it("A triangle yellow shaped object should generate", () => {
          const shape = new Triangle();
          shape.setColor("yellow");
          shape.setText("UNC3");
          shape.setTextColor("white");
          expect(shape.render()).toEqual(
            `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,18 244,182 56,182" fill="${shape.shapeColor}" />
            <text x="150" y="125" fill="${shape.textColor}" text-anchor="middle" font-size="50">${shape.text}</text>
          </svg>`
          );
        });
      });
  });