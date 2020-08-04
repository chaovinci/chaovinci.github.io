function Snake() {
  // this.x = 10 * gridWidth;
  // this.y = 10 * gridWidth;
  // this.direction = [1, 0];
  // this.snakeLength = 1;
  

  this.initialization = function() {
    this.speed = createVector(0,0);
    this.body = [];
    this.body[0] = createVector(width/2, height/2);
    // this.body[1] = createVector(width/2 - gridWidth, height/2);
  }


  this.grow = function () {
    let newHead = createVector(this.body[0].x + this.speed.x * gridWidth, this.body[0].y + this.speed.y * gridWidth);
    this.body.unshift(newHead); 
  }

  this.show = function () {
    fill(200, 0, 0);
    rect(this.body[0].x, this.body[0].y, gridWidth, gridWidth);

    for (let i = 1; i < this.body.length; i++) {
      // const element = this.body[i];
      fill(200);
      rect(this.body[i].x, this.body[i].y, gridWidth, gridWidth);
    }
  }

  this.update = function () {
    let newHead = createVector(this.body[0].x + this.speed.x * gridWidth, this.body[0].y + this.speed.y * gridWidth);
    this.body.unshift(newHead); 

    this.body.pop();
  }

  this.hitTheWall = function() {
    if (this.body[0].x < 0 || this.body[0].y < 0 || this.body[0].x  >= width || this.body[0].y >= height) {
      this.initialization();
      createP('Death! : Hit The Wall!');
    }
  }

  this.hitItSelf = function() {
    for (let i = 2; i < this.body.length; i++) {
      if (dist(this.body[0].x, this.body[0].y, this.body[i].x, this.body[i].y) <= 0) {
        this.initialization();
        createP('Death! : Hit It Self!');
      }
    };
  }

}