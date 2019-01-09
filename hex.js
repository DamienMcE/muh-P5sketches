

var hh;
var jj;
var w = window.innerWidth;
var h = window.innerHeight;

w=1080;
h=1080;

var tunnel = Array(Math.round(h*.03));

var globex = Math.round(w*.5);
var globey = Math.round(h*.45);


    
//var tunnel = Array(25);
function setup() {
    createCanvas (w,h);
    hh = new Hexa(200);
    jj = new Hexa(300);

 //   globalOrgin = new createVector(Math.round(w*.5),Math.round(h*.45));

    
    for (i = 0; i < tunnel.length; i++)
    {
    tunnel[i]=new Hexa(20*i);    
    }
    
    
    
    

}




function draw() {
    
    background(0,0,0);
    stroke(0);
    stroke(255);
    textSize(30);    
  //  text("Global",globex,globey);
    hh.spinback();
  //  jj.display();
    jj.spin();
    
   /* 
    tunnel.forEach(function(tunnel){
    tunnel.spin();
    tunnel.display();
    });
    */
    
    for (i = 0; i < tunnel.length; i++)
    {
    if (i % 2 === 0) 
    {tunnel[i].spin();} 
    else {tunnel[i].spinback();}
     
    tunnel[i].display();   
    }
    
    globex= globex + random(-2,2) * 10;
    globey= globey + random(-2,2) * 10;
    
}

function mouseMoved()
{
    globex=mouseX;
    globey=mouseY;
    
    //stroke(255);
    //textSize(30);    
    //text("Global",globex,globey);
    
   // tunnel.forEach(function(tunnel){
//    tunnel.moveorg(mouseX,mouseY);
    //})
}




function Hexa(sizin){
    this.origsize=sizin;
    this.size=sizin;
    this.speed=100/sizin;
 //   this.org = globalOrgin;
    this.org = createVector(globex,globey);
    this.angCount = random(0,360);
    this.point1=createVector(this.org.x + cos(radians(this.angCount+0)) * this.size, this.org.y + sin(radians(this.angCount+0))*this.size);
    this.point2=createVector(this.org.x + cos(radians(this.angCount+60)) * this.size, this.org.y + sin(radians(this.angCount+60))*this.size);
    this.point3=createVector(this.org.x + cos(radians(this.angCount+120)) * this.size, this.org.y + sin(radians(this.angCount+120))*this.size);
    this.point4=createVector(this.org.x + cos(radians(this.angCount+180))* this.size, this.org.y + sin(radians(this.angCount+180))*this.size);
    this.point5=createVector(this.org.x + cos(radians(this.angCount+240)) * this.size, this.org.y + sin(radians(this.angCount+240))*this.size);
    this.point6=createVector(this.org.x + cos(radians(this.angCount+300)) * this.size, this.org.y + sin(radians(this.angCount+300))*this.size);
    
    this.display = function(){
        strokeWeight(12);
        stroke(0,255,255);
        line(this.point1.x,this.point1.y,this.point2.x,this.point2.y);
        stroke(0,0,200+55*sin(this.angCount*.01));
        line(this.point2.x,this.point2.y,this.point3.x,this.point3.y);
        stroke(0,150+55*sin(this.angCount*.02),0);
        line(this.point3.x,this.point3.y,this.point4.x,this.point4.y);
        stroke(255,0,0);
        line(this.point4.x,this.point4.y,this.point5.x,this.point5.y);
        stroke(255,255,255*sin(this.angCount*.01));
        line(this.point5.x,this.point5.y,this.point6.x,this.point6.y);
        stroke(255*sin(this.angCount*.05),0,255);
        line(this.point6.x,this.point6.y,this.point1.x,this.point1.y);
        noFill();
     //   stroke(0);
     //   ellipse(this.org.x,this.org.y,this.size,this.size );
        
        }
        
          
        
      this.spin = function(){
          
      if (this.org.x != globex)
      {
       if (this.org.x<globex){this.org.x=this.org.x+this.speed;}
       if (this.org.x>globex){this.org.x=this.org.x-this.speed;}
      }
      
      if (this.org.y!=globey)
      {
        if (this.org.y<globey){this.org.y=this.org.y+this.speed;}
        if (this.org.y>globey){this.org.y=this.org.y-this.speed;}
          
      }
      
      
          
      this.angCount = this.angCount + .5;//speed of spin
      this.size = this.origsize + ((sin(this.angCount*.01)*this.origsize*.5));//size of bounce
       
      this.point1=createVector(this.org.x + cos(radians(this.angCount+0)) * this.size, this.org.y + sin(radians(this.angCount+0))*this.size);
      this.point2=createVector(this.org.x + cos(radians(this.angCount+60)) * this.size, this.org.y + sin(radians(this.angCount+60))*this.size);
      this.point3=createVector(this.org.x + cos(radians(this.angCount+120)) * this.size, this.org.y + sin(radians(this.angCount+120))*this.size);
      this.point4=createVector(this.org.x + cos(radians(this.angCount+180))* this.size, this.org.y + sin(radians(this.angCount+180))*this.size);
      this.point5=createVector(this.org.x + cos(radians(this.angCount+240)) * this.size, this.org.y + sin(radians(this.angCount+240))*this.size);
      this.point6=createVector(this.org.x + cos(radians(this.angCount+300)) * this.size, this.org.y + sin(radians(this.angCount+300))*this.size);
    }    

    this.spinback = function(){
 
     if (this.org.x != globex)
      {
       if (this.org.x<globex){this.org.x=this.org.x+this.speed;}
       if (this.org.x>globex){this.org.x=this.org.x-this.speed;}
      }
      
      if (this.org.y!=globey)
      {
        if (this.org.y<globey){this.org.y=this.org.y+this.speed;}
        if (this.org.y>globey){this.org.y=this.org.y-this.speed;}
          
      }
      
        
        
      this.angCount = this.angCount - 1;//speed of spin
      this.size = this.origsize + ((sin(this.angCount*.01)*this.origsize*.5));//size of bounce
       
      this.point1=createVector(this.org.x + cos(radians(this.angCount+0)) * this.size, this.org.y + sin(radians(this.angCount+0))*this.size);
      this.point2=createVector(this.org.x + cos(radians(this.angCount+60)) * this.size, this.org.y + sin(radians(this.angCount+60))*this.size);
      this.point3=createVector(this.org.x + cos(radians(this.angCount+120)) * this.size, this.org.y + sin(radians(this.angCount+120))*this.size);
      this.point4=createVector(this.org.x + cos(radians(this.angCount+180))* this.size, this.org.y + sin(radians(this.angCount+180))*this.size);
      this.point5=createVector(this.org.x + cos(radians(this.angCount+240)) * this.size, this.org.y + sin(radians(this.angCount+240))*this.size);
      this.point6=createVector(this.org.x + cos(radians(this.angCount+300)) * this.size, this.org.y + sin(radians(this.angCount+300))*this.size);
    } 



    this.displayPlabels = function (){
    textSize(30);    
    
    text("org",this.org.x,this.org.y);
    text("1",this.point1.x,this.point1.y); 
    text("2",this.point2.x,this.point2.y); 
    text("3",this.point3.x,this.point3.y); 
    text("4",this.point4.x,this.point4.y); 
    text("5",this.point5.x,this.point5.y); 
    text("6",this.point6.x,this.point6.y); 
    
    }

    
}


