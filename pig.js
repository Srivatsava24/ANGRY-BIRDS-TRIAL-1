class Pig {
    constructor(x,y){
      var options = {
        restitution:0.8
      }
      this.Body = Bodies.rectangle(x,y,50,50,options)
      this.width = 50;
      this.height = 50;
     World.add(world, this.Body)
  }
  display(){
    var pos = this.Body.position;
    var angle = this.Body.angle;
    push();
    translate(pos.x,pos.y);
  rotate (angle)
    rectMode(CENTER);
    strokeWeight(4);
    stroke("Green")
    fill("Red")
    rect(0,0,this.width,this.height)
    pop()
  }
  }