class boy
{
    constructor(x,y)
    {
        var options=
        {
            isStatic: true,
        }

        this.body = Bodies.rectangle(x, y, 150, 250, options);
        this.width = 200;
        this.height = 300;
        this.image = loadImage("Sprites/boy.png");
        World.add(world, this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        image(this.image, 60,100, this.width, this.height);
        pop();
    }
};