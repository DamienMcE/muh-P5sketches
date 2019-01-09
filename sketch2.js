
var w;

var a;
var b;
var c;
var d;

var g;
var v100 = Array(400).fill(0.0);


function setup() {
    createCanvas (1000,780);
    w = new Walker();
    a = new Walker();
    b = new Walker();
    c = new Walker();
    d = new Walker();
    
    
    
    g = new PointGraph();

    
    
}

function draw() {
    
    background(55,10,10);
    w.walk();
    w.display();

    a.walk();
    a.display();

    b.walk();
    b.display();

    c.walk();
    c.display();

    d.walk();
    d.display();



    g.display();
//    ellipse(50, 50, 80, 80);

}


function Walker(){
    
    this.pos = createVector (width/2,width/2);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0.1);
    
    this.walk = function (){
    
    //var v100 = Array(100).fill(0.0);
    
    v100.push(this.vel.x);
    v100.shift();
    
    
    if (this.pos.y>=height) {
        this.pos.y=2;
     }
    
    if (this.pos.y<=0) {
        this.pos.y=height+2;
     }
    
    if (this.pos.x>=width) {
        this.pos.x=2;
     }
    
    if (this.pos.x<=0) {
        this.pos.x=width+2;
     }
        
    var mouse = createVector(mouseX, mouseY);        
        
    this.acc = createVector(random(-.1,.1),random(-.1,.1));
    //this.acc = mouse; 
    this.acc.mult(3);
    //speed limit!
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    //this.pos.x= this.pos.x + random (-5,5);
    //this.pos.y= this.pos.y + random (-5,5);
    }
    
    this.display = function() {
        
   // fill(10);    
    ellipse(this.pos.x, this.pos.y, 48 ,48);

    textSize(12);
    text("Vel X:"+round(this.vel.x)+" Vel Y:"+round(this.vel.y),10, height-15); 
    fill(200, 200, 153);
    //end walker
    }
}

function PointGraph(){
    
    this.display = function (){
        
        var stretch = 2;
        var i;
        for (i = 0; i < v100.length; i++) { 
        point(i,(height-50)+(v100[i]*10));
        
        line (i*stretch,(height*.25)+(v100[i]*10),i*stretch,(height*.25)+(v100[i]*15));
        stroke(255-i,i,255-i);
        
        
        line (i*stretch,(height/2)+(v100[i]*10),i*stretch,(height/2)+(v100[i]*30));
        stroke(i,255-i,i);
        
        line (i*stretch,(height/3)+(v100[i]*10),i*stretch,(height/3)+(v100[i]*15));
        stroke(255-i,255-i,i);
        
        line (i*stretch,(height*.75)+(v100[i]*10),i*stretch,(height*.75)+(v100[i]*15));
        stroke(255-i,i,255-i);
        
        
    
    
        line ((height*.25)+(v100[i]*10),i*stretch,(height*.25)+(v100[i]*15),i*stretch);
        stroke(255-i,i,255-i);
        
    
        line ((height*.5)+(v100[i]*10),i*stretch,(height*.5)+(v100[i]*15),i*stretch);
        stroke(255-i,i,255-i);
        
            
        line ((height/3)+(v100[i]*10),i*stretch,(height/3)+(v100[i]*15),i*stretch);
        stroke(255-i,i,255-i);
        
            
        line ((height/3)+(v100[i]*20),i*stretch,(height/3)+(v100[i]*20),i*stretch);
        stroke(255-i,i,255-i);
        
        
        }    

        
var mult = 50;
var offset = 50;
var widthG = 20;
var widthX = 100;


bezier(0,height-offset+(v100[0]*mult),
1*widthX,height-offset+(v100[1*widthG]*mult),
2*widthX,height-offset+(v100[2*widthG]*mult),
3*widthX,height-offset+(v100[3*widthG]*mult),
4*widthX,height-offset+(v100[4*widthG]*mult),
5*widthX,height-offset+(v100[5*widthG-1]*mult));

        }//end pointGraph display
    }