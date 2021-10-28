function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius, color) {
    this.radius = radius;

    //super calling
    Shape.call(this, color);

    this.move = function() {
        console.log('move');
    }
}

Circle.prototype.draw = function() {
    console.log('draw');
}
//Circle.prototype.constructor = Circle
//new Circle.prototype.constructor() => new circle()
//inhritance from other prototype should reset constructor

//using extends function implace below
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
extend(Circle, Shape);

//overWrite parent protortype
Circle.prototype.duplicate = function() {
    console.log('duplicate circle');
}

function Square(size, color) {
    this.size = size;
    Shape.call(this, color)
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log('duplicate square');
}

const c = new Circle(1, 'blue');
const s = new Shape();
const sq = new Square(10, 'red');

// console.log(Object.keys(c));