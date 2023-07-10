class Rectangle {
    width
    height

    constructor(width, height) {
        this.width = width
        this.height = height
    }
}

rec1 = new Rectangle(10, 5)
console.log("Width of the rectangle is " + rec1.width)