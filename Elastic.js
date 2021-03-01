class Elastic{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.elastic = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.elastic);
    
    }
    
     fly(){
       this.elastic.bodyA = null;
     }

     attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if(this.elastic.bodyA){
        var pointA = this.elastic.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    
        }}
    }
    