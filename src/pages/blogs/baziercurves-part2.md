---
layout: ../../layouts/BlogLayout.astro
title: "Bezier Curves - Part 2"
author: "Renato Sanchez"
date: 2024-02-20
tags: ["Algorithms","Processing"]
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