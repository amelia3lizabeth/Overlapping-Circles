function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('red');
  fill('white');
  circle(30,30,200);

  const circlesArray = calculatePackedCircles(width, height);

  for (const c of circlesArray) {
    drawCircle(c);
  }
}

function drawCircle(c: Circle) {
  const shade = random(50, 100);
  fill(random([
    "#dad6ca",
    "#1bb0ce",
    "#4f8699",
    "#6a5e72",
    "#563444"
  ]));
  noStroke();
  circle(c.pos.x, c.pos.y, c.radius * 2);
}

// If user clicks, draw() will be called again (eventually)
function mousePressed() {
  redraw();
}
