class basket{

    constructor(x,y,w,h){
    
    var options = { 
        restitution:0,
         friction:10,
         density:10
    }
    
    this.basket = Bodies.rectangle(x,y,w,h);
    this.w = w;
    this.h = h;
    World.add(world,this.basket); 
    
    }
    
    display(){
    rectMode(CENTER)
    rect(this.basket.position.x, this.basket.position.y, this.w, this.h);
     }
    
}   