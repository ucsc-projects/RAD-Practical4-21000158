class Rectangle {
    width
    height

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getArea(){
        return this.height*this.width
    }
}

rec1 = new Rectangle(10, 5)
rec2 = new Rectangle(20, 10)
console.log("Area of the rectangle 1 is " + rec1.getArea())
console.log("Area of the rectangle 2 is " + rec2.getArea())