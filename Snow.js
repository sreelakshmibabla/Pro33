class Snow {
    constructor(x, y) {
        var options = {
            restitution: 0,
            friction: 0,
            
        }
        
        this.body = Bodies.circle(x, y, options);
        image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        fill("white");
        imageMode(CENTER);
        ellipse(0,0,this.x,this.y);
        pop();
    }

};