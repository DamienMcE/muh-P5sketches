//I know its awful code. I don't care.- D
//
//


var a;
var b;
var c;
var d;
var g;
var pressed = false;
var WX = 25;

var MAXPRICE;
var MINPRICE;
var json_obj;
var TICKER="MSFT";
var MSFTurl="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol="+TICKER+"&apikey=01296106GMQ0QRCX";
var walkers = Array(10);
var MSPRICES = Array (100);
var MSPRICESSCALED = Array (100);
var smalltextflag = false;




function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}


function setup() {
    var x=1080;
    createCanvas (x,x);
    w = new Walker(0.25*x,255,1000);
    a = new Walker(0.5*x,40,300);
    b = new Walker(0.2*x,80,100);
    c = new Walker(0.15*x,120,200);
    d = new Walker(0.17*x,200,150);
    
    
    for (i = 0; i < WX; i++)
    {
    walkers[i] = new Walker(.2*1080,random(5,50),100);
    }
    
    //STOLEN
    var urlParam = function(name, w){
    w = w || window;
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
        val = w.location.search.match(rx);
    return !val ? '':val[1];
    }
    //END STOLEN
    
 
    if (urlParam('symbol')=== null){TICKER="AMZN";}else {TICKER=urlParam('symbol');}
    
    MSFTurl="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol="+TICKER+"&apikey=01296106GMQ0QRCX";
    console.log("Using "+ TICKER);
    console.log("Fetching URL." +MSFTurl);
    json_obj = JSON.parse(Get(MSFTurl));
   
    if (Object.keys(json_obj)=="Error Message")
    {
        console.log(TICKER + " is a BAD TICKER. Sad!");
        if (TICKER === ""){}else{ TICKER = "BAD TICKER!";}
        console.log("Defaulting to MSFT");
        MSFTurl="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=01296106GMQ0QRCX";
        json_obj = JSON.parse(Get(MSFTurl));
    } 
   
    var days = Object.keys(json_obj["Time Series (Daily)"]);
    
    var i = 0;
    days.forEach(function(days) 
    {
  //  console.log(json_obj["Time Series (Daily)"][days]['4. close']);
    MSPRICES.push(parseFloat(json_obj["Time Series (Daily)"][days]['4. close']));
    MSPRICES.shift();
    i++;
    });
    
    console.log ("For "+ TICKER +" there are " + i + " days prices");
    
    if ( i < 100)
    {
        console.log("Not enough days data, using MSFT");
        MSFTurl="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=01296106GMQ0QRCX";
        json_obj = JSON.parse(Get(MSFTurl));
        days = Object.keys(json_obj["Time Series (Daily)"]);
        
        days.forEach(function(days) 
            {
          //  console.log(json_obj["Time Series (Daily)"][days]['4. close']);
            MSPRICES.push(parseFloat(json_obj["Time Series (Daily)"][days]['4. close']));
            MSPRICES.shift();
        
            });
        smalltextflag = true;
        TICKER = "Used MSFT, as only " + i + " days data for" + TICKER;    
    }
    
    
    console.log(MSPRICES[0]+" AND "+MSPRICES[i]);
    console.log("MAX:"+Math.max(...MSPRICES));
    console.log("MIN:"+Math.min(...MSPRICES));
    
    MAXPRICE = Math.max(...MSPRICES);
    MINPRICE = Math.min(...MSPRICES);
    
    MSPRICES.forEach(function(MSPRICES)
    {
    MSPRICESSCALED.push(round(  (((MSPRICES*1.001)-MINPRICE)/(MAXPRICE-MINPRICE)*150)+10));
    MSPRICESSCALED.shift();      
    });
    
    console.log(MSPRICESSCALED[0]+" AND "+MSPRICES[99]);
    console.log("SCALED MAX:"+Math.max(...MSPRICESSCALED));
    console.log("SCALED MIN:"+Math.min(...MSPRICESSCALED));
    

    
}



function draw() {
    
    if (pressed === false)
    {
    background(200,200,200);

    w.walk();
    w.walk();
    w.walk();
    w.display();

    a.walk();
    a.walk();
    a.walk();
    
    a.display();

    b.walk();
    b.walk();
    b.walk();
    b.display();

    c.walk();
    c.walk();
    c.walk();
    c.display();
    
    d.walk();
    d.walk();
    d.walk();
    d.display();
    
    
    textSize(60);
    if (smalltextflag === true) {textSize(40);}
    text(TICKER + " " +MINPRICE + " to " + MAXPRICE,80,80); 
    fill(200, 200, 153);

    
    stroke(0);
     for (var i = 1; i < MSPRICESSCALED.length; i++) 
     { 
        
        line (80 + ((i-1) * 6) , 80 +(MSPRICESSCALED[i-1]), 80 + ((i) * 6) , 80 +(MSPRICESSCALED[i]) );
    
     }

/*
for (i = 0; i < WX; i++)
    {

    walkers[i].walk();
    walkers[i].walk();
    walkers[i].walk();
    walkers[i].display();

    }
*/
  
    }

}


function Walker(sizein, colorins, trailin){
    this.size =sizein;
    this.trailin = trailin
    this.colorin =colorins;
    this.sinecount = colorins;
    
    this.pos = createVector (this.size,this.size);
    
    //this.pos = createVector (width/2,width/2);
    
    this.vel = createVector(0,0);
    this.acc = createVector(0,0.1);
    
    
    this.v100x = Array(this.trailin).fill(0.0);
    this.v100y = Array(this.trailin).fill(0.0);
    
    
    this.v100R = Array(this.trailin).fill(0.0);
    this.v100G = Array(this.trailin).fill(0.0);
    this.v100B = Array(this.trailin).fill(0.0);
    
    
    this.walk = function (){
    
    //var v100 = Array(100).fill(0.0);
    
    this.v100x.push(this.pos.x);
    this.v100x.shift();
    
    this.v100y.push(this.pos.y);
    this.v100y.shift();
    
    
    this.v100R.push(255* sin(this.sinecount));
    this.v100R.shift();
    
    this.v100G.push(255* sin(this.sinecount*2));
    this.v100G.shift();
    
    this.v100B.push(255* sin(this.sinecount*3));
    this.v100B.shift();
    
    
   
    
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
        
    this.acc = createVector(random(-.05,.05),random(-.05,.05));
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
   // this.trailin
    for (i = 0; i < 100; i++) {
    noStroke();
    ellipse(
    this.v100x[i],
    this.v100y[i],
    MSPRICESSCALED[i],
    MSPRICESSCALED[i],
    //this.size * sin(this.sinecount-i) * sin(this.sinecount-i) *.5,
   // this.size * sin(this.sinecount-i) * sin(this.sinecount-i) *.5
       );
      fill (this.v100R[i],this.v100G[i],this.v100B[i]);

    }
   // fill ((255* sin(this.sinecount-i)), (255* sin(this.sinecount*2-i)), (255* sin(this.sinecount*3-i)));
    
   // nostroke();
    //textSize(12);
    //text("Vel X:"+round(this.vel.x)+" Vel Y:"+round(this.vel.y),10, height-15); 
    //fill(200, 200, 153);
    //end walker
    this.sinecount=this.sinecount+.05;
    }
}
