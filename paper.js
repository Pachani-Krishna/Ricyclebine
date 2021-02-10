class Paper{
    constructor(x,y){

    var option = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }

    this.body = Bodies.rectangle(x,y,30,30,option)
    this.width = 30
    this.height = 30
    this.image = loadImage("paper.png");
       
    }
    
    display(){

     var pos = this.body.position

    push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			image(this.image,0,0,this.width,this.height)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
    }		
	

}