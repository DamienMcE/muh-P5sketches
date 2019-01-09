
Ball ball1, ball2;


void setup() {
	// createCanvas must be the first statement
  createCanvas(1024, 768);  
  
  fill (255)// Set line drawing color to white
  stroke(255); 
  frameRate(15);
  
  ball1 = new Ball(50,50);
  ball2 = new Ball(100,100);

  
}
// The statementsBall in draw() are executed until the 
// program is stopped. Each statement is executed in 
// sequence and after the last line is read, the first 
// line is executed again.


void draw() { 
     // Set the background to black
  
  
  ball1.display(); 
  ball2.display();
  
  ball1.move(); 
  ball2.move(); 
}


class Ball {
    
  
    Ball(ix, iy)
    {
    this.x = iw; // single bar width
    this.y = iy; 
  
    this.horiz = 1;
    this.vert = 0;
    this.dist = 20;
    this.width = 768;
    this.height = 1024;    
    }
      
  
    move()
      { 
        //change the X/Y of the ball and direction if it bounces against edges      
        if (this.horiz == 1)
        { 
        this.x = this.x + this.dist; 
            if (this.x > this.width){ this.horiz = 0;}
        } 
      
        if (this.horiz === 0) 
        { 
            this.x = this.x - this.dist; 
            if (this.x < 0){ this.horiz = 1;}
        } 
      
        if (this.vert == 1) 
        { 
            this.y = this.y + this.dist; 
            if (this.y > this.height){ this.vert = 0;}
        } 
      
        if (this.vert === 0) 
        { 
            this.y = this.y - this.dist; 
            if (this.y < 0){ this.vert = 1;}
        } 
      
    
        
      }
      
    display ()
    {
        background(0);
        fill(10,10,10);
        noStroke();
        ellipse(this.x,this.y,20, 20);
    }
      
}
  
  
    







