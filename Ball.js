class Ball{
    constructor(x, y, width, height) {
        var options = {
            'frictionAir':.005,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //rectMode(CENTER);
      fill("red");
      strokeWeight(3);
      stroke("green");
      ellipse(0,0, this.width, this.height);
        pop();
      }
}