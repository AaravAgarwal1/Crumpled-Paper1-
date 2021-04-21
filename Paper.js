class Paper {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body= Bodies.circle(x,y,radius,options);
        World.add(world,this.body)
        this.x= x;
        this.y=y;
        this.radius= radius;
      
;

    }

    display(){
        push();  
        fill("red");
        strokeWeight(10);
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.radius,this.radius);
        pop();
    }


    
}