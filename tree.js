class tree
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
       
        this.width = 450;
        this.height = 600;
        this.image = loadImage("Sprites/tree.png");
        this.body = Bodies.rectangle(x, y, this.width , this.height);
     
        World.add(world, this.body);
    }
    display()
    {
        imageMode(CENTER)
        image(this.image, this.x, this.y, this.width, this.height);
    }
}