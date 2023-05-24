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

module.exports = Shape;