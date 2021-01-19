class Plinko{
    constructor(x, y) {
        var options = {
          
            'friction':0.005,
            'density':1,
            isStatic: true,
        }
    
        this.body = Bodies.circle(x, y,10,options)
        
        this.r = 10;
      
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("purple");
        ellipse(0, 0, this.r,this.r);
        pop();
      }
}