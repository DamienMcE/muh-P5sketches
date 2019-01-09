
var v100 = Array(400).fill(0.0);
var bars = Array(13);

function setup() {
    createCanvas (800,800);
    w = new Walker(30);
    a = new Walker(100);
    b = new Walker(50);
    
    for (i = 0; i < bars.length; i++)
    {
    bars[i]=new Walker(10);    
    }
    
}

function draw() {
    
    background(255,255,255);
    
    bars.forEach(function(bars){
    bars.walk();
    bars.display();
    });
}


function Walker(sizin){
    
    this.sizein = random(30,70);
    this.sinecount = this.sizein;
    this.pos = createVector (width*(random(0.2,0.8)),width/2);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0.1);
    
    this.accMult=random(.1,2.5);
    
    this.r=random(200,255);
    this.g=random(200,255);
    this.b=random(200,255);
    
    this.walk = function (){
    
    //var v100 = Array(100).fill(0.0);
    
    v100.push(this.vel.x);
    v100.shift();
    
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
        
        
    this.acc = createVector(random(-.1,.1),random(0,0));
    //this.acc = mouse; 
    this.acc.mult(this.accMult);
    //speed limit!
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    //this.pos.x= this.pos.x + random (-5,5);
    //this.pos.y= this.pos.y + random (-5,5);
    this.sinecount = this.sinecount + .03;
    }
    
    this.display = function() {
 
 
    /* 
    quad(this.pos.x, 0,
    this.pos.x + this.sizein, 0,
    this.pos.x + this.sizein*4, height,
    this.pos.x + this.sizein*3, height);
    */
    var quickwidth = this.sizein/2 + (this.sizein* sin(this.sinecount));
    var offset = 50;
    quad(this.pos.x, 0,
    this.pos.x + quickwidth, 0,
    
    offset + this.pos.x + quickwidth, height,
    
    offset + this.pos.x , height);
    
    
    
    noStroke();
    fill(this.r + (20 * sin(this.sinecount)),
    this.g + (20 * sin(this.sinecount)),
    this.b + (20 * sin(this.sinecount)));
    //end walker
    }
}
