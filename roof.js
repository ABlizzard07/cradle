class Roof{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        var pos = this.body.position;
        translate(pos.x,pos.y);
        strokeWeight(4);
        stroke("white");
        fill(0);
        rect(0,0, this.width, this.height);
        pop();
    }
}