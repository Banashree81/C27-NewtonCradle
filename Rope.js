class Rope {

    constructor(bodyA, bodyB, xOffset, yOffset){

        this.xOffset = xOffset;
        this.yOffset = yOffset;

        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x : this.xOffset, y : this.yOffset},
            stiffness : 0.04,
            //length : 200
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push ();
        strokeWeight(2);
        line (pointA.x,pointA.y,pointB.x+ this.xOffset,pointB.y+this.yOffset);
        pop ();
    }

}