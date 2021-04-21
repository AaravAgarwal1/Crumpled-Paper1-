class Ground {
    constructor(x,y,width,height){
        var options= {
            isStatic:true,
            density:1.0
        }
        this.x=x;
        this.y=y;
        this.width= width;
        this.height= height;
        this.body= Bodies.rectangle(x,y,width,height,options);


    }

    display(){
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    }
}