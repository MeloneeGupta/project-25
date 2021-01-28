class Paper
{
    constructor(x,y,w,h)
	{
		var options={
            isStatic:true,
            restitution:0.3,
            friction:0.8,		
            density:1.2	
            }

        this.body=Bodies.rectangle(x, y, w, h , options);
		this.h=h;
		this.w=w;
	
 		World.add(world, this.body);

	}

 display()
 {
 var angle=this.body.angle;
 paper.x=mouseX;
 paper.y=mouseY;
 push ();
 translate (this.body.position.x,this.body.position.x,this.body.position.y);
 rotate (angle);
 imageMode (CENTER);
 image(this.image,0,0,this.wudth,this.height);
 pop ();
 }    


}