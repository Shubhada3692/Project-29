class Ball{
    constructor(x,y){
      this.body = Bodies.circle(x,y,20);
      World.add(world,this.body);
      this.image = loadImage("polygon.png");
    }
    display(){
        imageMode(RADIUS);
        image(this.image,this.body.position.x, this.body.position.y,20,20);
    }
}