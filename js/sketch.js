var livingKiwis = [];

function preload() {
  kiwiImg = loadImage("baby.png");
}

function setup() {
  var cnv = createCanvas(500, 500);
  cnv.parent("front-page");

  background(242, 94, 63);

  for (x = 0; x < width; x += 50) {
    for (y = 0; y < height; y += 100) {
      livingKiwis.push(new Kiwi(x, y));
    }
  }

}

function draw() {
  background(0, 255, 229);

  for (var k = 0; k < width; k += 20) {
    push();
    stroke(7, 94, 255);
    strokeWeight(3);
    line(k, 0, k, height);
    pop();
  }
  for (var j = 0; j < height; j += 20) {
    push();
    stroke(7, 94, 255);
    strokeWeight(3);
    line(0, j, width, j);
    pop();
  }

  for (var i = 0; i < livingKiwis.length; i++) {
    livingKiwis[i].update();
    livingKiwis[i].checkEdges();
    livingKiwis[i].render();
  }

}

function Kiwi(x, y) {

  this.x = x;
  this.y = y;
  this.location = new createVector(this.x, this.y);
  this.velocity = new createVector(0, 0);
  var topspeed = 3;


  this.update = function() {
    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(random(0.01, 0.1));

    this.velocity.add(this.acceleration);
    this.velocity.limit(topspeed);
    this.location.add(this.velocity);
  }

  this.render = function() {
    noStroke();
    fill(10, 57, 80, 60);
    ellipse(this.location.x, this.location.y + 23, 40, 15);
    imageMode(CENTER);
    image(kiwiImg, this.location.x, this.location.y);

  }

  this.checkEdges = function() {

    if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = width;
    }

    if (this.location.y > height) {
      this.location.y = 0;
    } else if (location.y < 0) {
      this.location.y = height;
    }
  }

}
