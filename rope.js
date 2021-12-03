class Rope{
 
    constructor(b1,p2){
       var options = {bodyA:b1,pointB:p2,length:50,stiffness:0.2}  
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
        this.p2 = p2;
    }
display(){ 
    if(this.rope.bodyA ){
    line(this.p2.x,this.p2.y,this.rope.bodyA.position.x+10,this.rope.bodyA.position.y);
    }  
}
fly(){
    this.rope.bodyA = null;
}

}