//      $$\                         $$\                     
//      $$ |                        \__|                    
// $$$$$$$ | $$$$$$\  $$$$$$\$$$$\  $$\  $$$$$$\  $$$$$$$\  
//$$  __$$ | \____$$\ $$  _$$  _$$\ $$ |$$  __$$\ $$  __$$\ 
//$$ /  $$ | $$$$$$$ |$$ / $$ / $$ |$$ |$$$$$$$$ |$$ |  $$ |
//$$ |  $$ |$$  __$$ |$$ | $$ | $$ |$$ |$$   ____|$$ |  $$ |
//\$$$$$$$ |\$$$$$$$ |$$ | $$ | $$ |$$ |\$$$$$$$\ $$ |  $$ |
// \_______| \_______|\__| \__| \__|\__| \_______|\__|  \__|
//damien.mcelvanna@gmail.com                                                          

var ZZ;

var nicecolors = new Array ("#FA5C65","#37DC94","#ee4035","#56b949","#c35033","#bcddda","#e59c82","#0079a8","#FFD027","#162C9a","#FDF028","#7828FD","#37DC94","#FA5C65","#95eb00","#f66754","#26A7FF","#FF5126","#e59c82","#0079a8","#268AFF","#FD9A28","#162C9a","#FFD027","#7828FD","#FDF028");

//Regular P5 setup.

var wSx=800;
var wSy=800;
var orgX = wSx/2;
var orgY = wSy/2;

var clrScl=3;

var treez = Array(8);

function setup() {
    var x=800;
    createCanvas (wSx,wSy);
    background(0,0,0);
    background(255,255,255);
    //noLoop();

   
    for (i = 0; i < treez.length; i++)
    {
        //treez[i]=new Branch(orgX,orgY,i*360,5+i,random(110,130),random(220,255),random(220,255),random(220,255));
        treez[i]=new Branch(orgX,orgY,i*360,5+i,random(110,130),255*round(random(1)),255*round(random(1)),255*round(random(1)));    
     
    }


}



function draw() {
    clear();
    background(255,255,255);

    frameRate(24);
    stroke(255);
    //line(wSx/2,0,wSx/2,wSx);

    strokeWeight(1);
   // stroke(255,0,0);
    point(orgX,orgY);
    
   
    treez.forEach(function(treez){treez.grow();})

}

//𝑥=𝑟sin𝜃, 𝑦=𝑟cos𝜃.



function Branch(xIn,yIn,angIn,levelIn,lenIn,rin,gin,bin){
    
    this.x1 = xIn;
    this.y1 = yIn;

   // this.r = random(0,1) * 255;
   // this.g = random(0,1) * 255;
   // this.b = random(0,1) * 255;

   



    this.ang = angIn; //+ random(-1,1);
    this.level = levelIn;
    this.leng = lenIn;

    this.r = rin - this.level*clrScl;
    this.g = gin - this.level*clrScl;
    this.b = bin - this.level*clrScl;


    this.x2 = this.leng * sin(this.ang * (PI/180)) + xIn; 
    this.y2 = this.leng * cos(this.ang * (PI/180)) + yIn;

    this.clr = color(this.r,this.g,this.b);

    this.hasChild = false;
    if(this.level>4)
    {
      this.ZZChild = new Branch(this.x2,this.y2,random(50,100),this.level-1,this.leng*.80,this.r,this.g,this.b);      
      this.ZZChild2 = new Branch(this.x2,this.y2,random(300,400),this.level-1,this.leng*.80,this.r,this.g,this.b);
      this.hasChild = true;
    }

    this.grow = function() {
        this.x2 = this.leng * sin(this.ang) + this.x1; 
        this.y2 = this.leng * cos(this.ang) + this.y1;

        //this.clr.setAlpha(sin(this.ang));
        this.clr.setAlpha(255*(4/this.level));
        stroke(this.clr);
        line(this.x1, this.y1,this.x2,this.y2);
        //this controls speed
        this.ang = this.ang + (10-this.level)/100; 
        
        if (this.hasChild===true){
            this.ZZChild.x1=this.x2;
            this.ZZChild.y1=this.y2;            
            this.ZZChild.grow();

            this.ZZChild2.x1=this.x2;
            this.ZZChild2.y1=this.y2;            
            this.ZZChild2.grow();


        }

        }

    }
