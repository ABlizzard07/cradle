class Bob{
    constructor(x,y,diameter){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.9,
        }
        this.body = Bodies.circle(x,y,diameter/2,options);
        this.diameter = diameter;
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        fill(random(255), random(255), random(255));
        circle(0,0,this.diameter);
        pop();
    }
}
