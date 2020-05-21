class Player{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(200,650,100,100,options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("Imgs/d0wnload.png");
       World.add(world, this.body);
    }

    display(){
        this.body.position.x = mouseX;
        push();
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        console.log("player is working");
        pop();
    }
}