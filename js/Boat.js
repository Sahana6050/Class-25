class Boat{
    constructor(x,y,width,height,boatPos){
        var options  ={
            restitution: 0.8,
            friction : 1.0,
            density :1.0,
        }

    this.Body =Bodies.rectangle(x,y,width,height,options);
    this.widht = width;
    this.height = height;

    this.image = loadImage("./assets/boat.png");
    this.boatPosition = boatPos;
    World.add(world,this.Body);
    }
    display(){
        var angle =this.Body.angle;
        var pos = this.Body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,this.boatPosition,this.width,this.height);
        pop();
    }
}