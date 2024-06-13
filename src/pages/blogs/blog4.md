---
layout: ../../layouts/BlogLayout.astro
title: "Project Bézier - Part 2"
author: "Renato Sanchez"
date: 2024-02-20
---

In the realm of creative coding, where mathematics meets imagination, lies an enchanting world of interactive art. In this blog, we delve into a mesmerizing piece of code that breathes life into geometric forms, dancing across the canvas with the grace of algorithms and the whimsy of human input.

Let's embark on a journey through the realms of JavaScript, where lines blur between code and canvas, and where the ordinary transforms into the extraordinary.

### Setting the Stage

Our canvas, defined by the variable `w`, is a square with a width and height of 500 units. Its center, a pivotal point in our artistic endeavors, is marked by `centerX` and `centerY`, both half the width of our canvas.

```javascript
w = 500
let centerX = w/2
let centerY = w/2
```

### The Overture: `setup()`

As our performance begins, the `setup()` function takes the stage. It prepares our canvas, sets the backdrop to a pristine white, and configures the stroke for our masterpiece. But there's more; it orchestrates the creation of points, lines, and shapes that will soon grace our canvas.

```javascript
function setup(){
  createCanvas(w, w);
  background(255);
  stroke("turquoise");
  strokeWeight(10);
  // Additional setup operations...
}
```

### The Choreography: Points and Lines

At the heart of our composition lie the dancers: points and lines. With intricate movements orchestrated by algorithms, they paint a symphony of shapes upon our canvas. Points are defined in space, while lines gracefully connect them, bending and curving in harmonious arcs.

```javascript
class blockPoint{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  // Additional methods...
}

class bezierShape {
  constructor(pointA,vertexA,vertexB,pointB){
    this.pointA = pointA;
    this.vertexA = vertexA;
    this.vertexB = vertexB;
    this.pointB = pointB;
  }
  // Additional methods...
}
```

### The Performance: `draw()`

As the curtains rise, the `draw()` function takes center stage. With each frame, it orchestrates the choreography of our geometric dancers. Points move, lines transform, and shapes evolve in a mesmerizing display of computational artistry.

```javascript
function draw() {
  clear();
  background(255);
  // Choreographing the movements...
}
```

### Interaction and Evolution

But our masterpiece is not static. It thrives on interaction, evolving with every mouse movement and keystroke. Through the `mouseAnimation()`, `keyTyped()`, and `mouseWheel()` functions, the audience becomes part of the performance, shaping the artwork with their input.

### Epilogue: Beyond the Canvas

As our performance draws to a close, we realize that our canvas is but a window into a universe of endless creativity. From dynamic curves to interactive animations, the possibilities are as boundless as the imagination itself.

In the code snippet provided, we've merely scratched the surface of this captivating world. But like any true work of art, its beauty lies not in its complexity, but in the emotions it evokes and the stories it tells.

So, let us embrace the magic of code and continue our exploration, for within its syntax lies a canvas awaiting the brushstrokes of our creativity.

Result: 

<iframe src="https://editor.p5js.org/renatosanz/full/_byTcii1f"  width=550  height=550></iframe>

## Code in p5.js
```javascript
// Canvas dimensions
let w = 500;
// Center coordinates
let centerX = w / 2;
let centerY = w / 2;

// Setup function: initializes canvas, sets background, stroke properties, and initializes various variables and objects.
function setup() {
  // Create a square canvas
  createCanvas(w, w);
  // Set background color to white
  background(255);
  // Set stroke color to turquoise
  stroke("turquoise");
  // Set stroke weight to 10
  strokeWeight(10);
  
  // Initialize properties for scrolling
  scrollProperties.y -= scrollProperties.spd;
  scrollProperties.spd /= 100;
  
  // Define parameters for the shape
  let angleTimes = 10;
  let distance = 200;
  let generalAngle = 0;
  let angle = TWO_PI / angleTimes + generalAngle;
  let easing = 0.05;
  
  // Initialize arrays to hold points and lines
  let points = [];
  let lines = [];
  
  // Create points for the shape
  for (let i = 1; i <= angleTimes; i++) {
    points[i] = new blockPoint(centerX + distance * cos(angle * i), centerY + distance * sin(angle * i));
  }
  
  // Create center point
  let center = new blockPoint(centerX, centerY);
  // Create vertex points
  let vertexA = new vertexPoint(PI, 0, 0.001);
  let vertexB = new vertexPoint(PI, 0, 0.001);
  
  // Create lines for the shape
  for (let i = 1; i <= angleTimes; i++) {
    lines[i] = new bezierShape(points[i], vertexA, vertexB, center);
  }
}

// Draw function: clears canvas, sets background, and draws the shape.
function draw() {
  // Clear canvas
  clear();
  // Set background color to white
  background(255);
  // Draw the shape
  for (let i = 1; i <= angleTimes; i++) {
    lines[i].mouseAnimation();
    lines[i].animation();
    lines[i].drawShape();
  }
}

// Class for block point
class blockPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  // Method to draw point
  drawPoint() {
    plot(this, 1);
  }
  // Setter method for X coordinate
  setX(x) {
    this.x = x;
  }
  // Setter method for Y coordinate
  setY(y) {
    this.y = y;
  }
}

// Class for vertex point
class vertexPoint {
  constructor(startAngle, radius, vel) {
    this.x = 0;
    this.y = 0;
    this.angle = startAngle;
    this.radius = radius;
    this.vel = vel;
  }
  // Method to draw point
  drawPoint() {
    plot(this, 0);
  }
  // Setter method for X coordinate
  setX(x) {
    this.x = x;
  }
  // Setter method for Y coordinate
  setY(y) {
    this.y = y;
  }
  // Setter method for angle
  setAngle(angle) {
    this.angle = angle;
  }
}

// Class for Bezier shape
class bezierShape {
  constructor(pointA, vertexA, vertexB, pointB) {
    this.pointA = pointA;
    this.vertexA = vertexA;
    this.vertexB = vertexB;
    this.pointB = pointB;
  }
  // Method to draw the shape
  drawShape() {
    beginShape();
    vertex(this.pointA.x, this.pointA.y); // first point
    bezierVertex(this.vertexA.x, this.vertexA.y, this.vertexB.x, this.vertexB.y, this.pointB.x, this.pointB.y);
    endShape();
  }
  // Method to plot points
  plotPoints() {
    this.pointA.drawPoint();
    this.vertexA.drawPoint();
    this.vertexB.drawPoint();
    this.pointB.drawPoint();
  }
  // Method to move points in circular motion
  circleMove(pointCenter, pointAround) {
    pointAround.setX(pointCenter.x + pointAround.radius * cos(pointAround.angle));
    pointAround.setY(pointCenter.y + pointAround.radius * sin(pointAround.angle));
    pointAround.setAngle(pointAround.vel + pointAround.angle);
  }
  // Method to move one side of the curve in circular motion
  circleMoveSideA(pointCenter, pointAround, vertexInfo) {
    pointAround.setX(pointCenter.x + vertexInfo.radius * cos(vertexInfo.angle));
    pointAround.setY(pointCenter.y + vertexInfo.radius * sin(vertexInfo.angle));
    vertexInfo.setAngle(vertexInfo.vel + vertexInfo.angle);
  }
  
  // Method for animation
  animation() {
    // Move points in circular motion
    this.circleMoveSideA(this.pointA, this.pointB, this.vertexB);
  }
  // Method for mouse interaction animation
  mouseAnimation() {
    this.vertexA.x = mouseX;
    this.vertexA.y = mouseY;
    
    this.vertexB.x = centerX + (centerX - mouseX) / 2 * (atan(centerX, centerY));
    this.vertexB.y = centerY + (centerY - mouseY) / 2 * (atan(centerX, centerY));
  }
}

// Function to plot a point
function plot(point, f) {
  push();
  fill(f);
  strokeWeight(1);
  circle(point.x, point.y, 10);
  pop();
}

// Event listener for mouse click
function mouseClicked() {
  // Set stroke color to slate blue
  stroke("slateBlue");
  // Set random stroke weight
  strokeWeight(random());
}

// Event listener for key release
function keyReleased() {
  // Set stroke color to random hue, saturation, and brightness
  stroke(random(20, 145), random(100), random(80, 100));
}

// Event listener for key typed
function keyTyped() {
  // Set stroke color to turquoise and random stroke weight
  stroke("turquoise");
  strokeWeight(random(5));
}

// Event listener for mouse wheel
function mouseWheel(event) {
  // Adjust general angle based on mouse wheel movement
  generalAngle += event.deltaY / 360;
  angle = TWO_PI / angleTimes + generalAngle * easing;
  rotateAroundCanvasCenter();
}

// Properties for scrolling animation
const scrollProperties = {
  y: null,
  spd: null
};

// Function to rotate points around canvas center
function rotateAroundCanvasCenter() {
  for (let i = 1; i <= angleTimes; i++) {
    points[i].x = centerX + distance * cos(angle * i);
    points[i].y = centerY + distance * sin(angle * i);
  }
}
```