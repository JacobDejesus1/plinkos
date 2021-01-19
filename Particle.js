class Particle{
    constructor(x, y,r) {
        var options = {
            'restitution':0.4,
            'friction':0.005,
            'density':1,
            isStatic: false,
        }
    
        this.body = Bodies.circle(x, y,r,options)
        this.color=color(random(0,255),random(0,255),random(0,255))
        this.r = r;
      
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0, 0, this.r,this.r);
        pop();
      }
}