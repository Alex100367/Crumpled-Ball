class paper{

    constructor(x,y,r){
    
    var options = {
        isStatic: false,
        restitution:0.3,
         friction:0.5,
         density:4
    }
    
    this.ball = Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world,this.ball); 
    
    }
    
    display(){
    ellipseMode(CENTER)
    ellipse(this.ball.position.x, this.ball.position.y, this.r, this.r);
     }
    
}   