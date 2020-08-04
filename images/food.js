function Food() {
  let col = width / gridWidth;
  let row = height / gridWidth;
  this.foods = [];


  this.initialization = function() {
    for (let index = 0; index < 3; index++) {
      this.refreshLocation();
    }
    
  }


  this.refreshLocation = function() {
    let v = createVector(floor(random(col)) * gridWidth, floor(random(row)) * gridWidth)
    this.foods.push(v);
  }

  this.show = function() {
    fill(200, 200, 0);
    for (let index = 0; index < f.foods.length; index++) {
      rect(this.foods[index].x, this.foods[index].y, gridWidth, gridWidth);
    }
  }
}