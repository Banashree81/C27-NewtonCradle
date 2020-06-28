class Bob{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution:1.2,
            friction:0.2,
            density:0.7,
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
     
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        fill(112,40,240);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius*2);
    }
};