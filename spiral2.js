

var v100 = Array(400).fill(0.0);
var bars = Array(8);

function setup() {
    createCanvas (1080,1080);
    w = new Walker(30);
    a = new Walker(100);
    b = new Walker(50);
    
    for (i = 0; i < bars.length; i++)
    {
    bars[i]=new Walker(5);    
    }
    
}

function draw() {
    
    background(255,255,255);
  // background(0,0,0);
    
    bars.forEach(function(bars){
    bars.walk();
    bars.display();
    });
}


function Walker(sizin){
    
    this.sizein = random(10,100);
    this.sinecount = this.sizein;

    this.originX = width/1.8;
    this.originY = height/2;
    

    this.pos = createVector (this.originX + cos(this.sinecount)*this.sizein *2.5, this.originY + sin(this.sinecount)*this.sizein * 3  );
    this.vel = createVector(0,0);
    this.acc = createVector(0.1,0.1);
    
    this.accMult=random(.1,2.5);
    
    this.r=random(220,255);
    this.g=random(200,240);
    this.b=random(200,240);
    
    
    this.v100 = Array(100).fill(0.0);
    
    this.v100x = Array(100).fill(0.0);
    this.v100y = Array(100).fill(0.0);
    
    this.walk = function (){
    
    //var v100 = Array(100).fill(0.0);
  //  this.sizein = this.sizein + (this.sizein*(sin(this.sinecount)/10));
    
    this.sizein = this.sizein + (this.sizein*(sin(this.sinecount)/25));
    
    
    this.v100.push(this.sinecount);
    this.v100.shift();
    
    //edges
    if (this.pos.y>=height) {
        this.pos.y=2;
     }
    
    if (this.pos.y<=0) {
        this.pos.y=height+2;
     }
    
    if (this.pos.x>=width+this.sizein) {
        this.pos.x=2;
    
     }
    if (this.pos.x<= -this.sizein*4) {
        this.pos.x=width+2;
     }
   
   
   //THIS IS WHERE THE POWER IS     
 //   this.pos.x = this.originX + cos(this.sizein)*this.sizein*3; 
 //  this.pos.y = this.originY + sin(this.sizein)*this.sizein*3;
    this.pos.x = this.originX + cos(this.sinecount)*this.sizein*3; 
    this.pos.y = this.originY + sin(this.sinecount)*this.sizein*3;    
    
  
    
    this.v100x.push(this.pos.x);
    this.v100x.shift();
    this.v100y.push(this.pos.y);
    this.v100y.shift();
        
        
   // this.acc = createVector(random(-.1,.1),random(0,0));
    //this.acc = mouse; 
   // this.acc.mult(this.accMult);
    //speed limit!
   // this.vel.add(this.acc);
//    this.pos.add(this.vel);
    //this.pos.x= this.pos.x + random (-5,5);
    //this.pos.y= this.pos.y + random (-5,5);
    this.sinecount = this.sinecount + random(.02,.08);
    

    
    
    }
    
    this.display = function() {
    
   //     fill(this.r + (20 * sin(this.sinecount)),
  //  this.g + (20 * sin(this.sinecount)),
 //   this.b + (20 * sin(this.sinecount)));    
        
    for (i = 0; i < 99; i++) 
    {
       // noStroke();
        ellipse(
        this.v100x[i] , 
        this.v100y[i],
                this.sizein *(i/105),
        this.sizein *(i/105)
        
       // this.sizein *(i/(100 + random(1,25))),
      //  this.sizein *(i/(100 + random(1,25)))
        );
         
  //  fill (this.r,this.g,this.b);
    }    
       
        
 
    ellipse (this.pos.x, this.pos.y,this.sizein,this.sizein);
    
    /* 
    quad(this.pos.x, 0,
    this.pos.x + this.sizein, 0,
    this.pos.x + this.sizein*4, height,
    this.pos.x + this.sizein*3, height);
    */
    /*
    var quickwidth = this.sizein/2 + (this.sizein* sin(this.sinecount));
    var offset = 50;
    quad(this.pos.x, 0,
    this.pos.x + quickwidth, 0,
    offset + this.pos.x + quickwidth, height,
    offset + this.pos.x , height);
    */
    
    
    noStroke();
    fill(this.r + (20 * sin(this.sinecount)),
    this.g + (20 * sin(this.sinecount)),
    this.b + (20 * sin(this.sinecount)));
    //end walker
    }
}
