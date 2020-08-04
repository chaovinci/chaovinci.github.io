var gridWidth = 10;
let s;
let f;

function setup() {
  createCanvas(600, 600);
  background(30);
  frameRate(12);

  s = new Snake();
  s.initialization();

  f = new Food();
  f.initialization();
}



function keyPressed() {
    if (keyCode === UP_ARROW && s.speed.y != 1) {
        s.speed.x = 0;
        s.speed.y = -1;
    } else if (keyCode === DOWN_ARROW && s.speed.y != -1) {
        s.speed.x = 0;
        s.speed.y = 1;
    } else if (keyCode === RIGHT_ARROW && s.speed.x != -1 ) {
        s.speed.x = 1;
        s.speed.y = 0;
    } else if (keyCode === LEFT_ARROW && s.speed.x != 1) {
        s.speed.x = -1;
        s.speed.y = 0;
    }
}


function draw() {

  background(30);

  f.show();

  s.show();
  s.update();

  s.hitTheWall();
  s.hitItSelf();

  eat();

}

function eat() {
  for (let index = 0; index < f.foods.length; index++) {
    if (dist(s.body[0].x, s.body[0].y, f.foods[index].x, f.foods[index].y) <= 0) {
      f.foods.splice(index, 1);
      f.refreshLocation();
      s.grow();
    }
  }
  
}