class Ground{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body= Bodies.rect(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        fill("white");
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height);
    }
}