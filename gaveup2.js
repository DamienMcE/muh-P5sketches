//      $$\                         $$\                     
//      $$ |                        \__|                    
// $$$$$$$ | $$$$$$\  $$$$$$\$$$$\  $$\  $$$$$$\  $$$$$$$\  
//$$  __$$ | \____$$\ $$  _$$  _$$\ $$ |$$  __$$\ $$  __$$\ 
//$$ /  $$ | $$$$$$$ |$$ / $$ / $$ |$$ |$$$$$$$$ |$$ |  $$ |
//$$ |  $$ |$$  __$$ |$$ | $$ | $$ |$$ |$$   ____|$$ |  $$ |
//\$$$$$$$ |\$$$$$$$ |$$ | $$ | $$ |$$ |\$$$$$$$\ $$ |  $$ |
// \_______| \_______|\__| \__| \__|\__| \_______|\__|  \__|
//damien.mcelvanna@gmail.com  

//blob:https://preview.openprocessing.org/828aae99-1b07-4fc5-a2c8-7678490f56cf"
//borrows heavily from 
//https://www.openprocessing.org/sketch/780008#


let offsetX = 50;
let offsetY = 50;
let pallete = [];
let strokeCol;

var nicecolors = new Array ("#FA5C65","#37DC94","#ee4035","#56b949","#c35033","#bcddda","#e59c82","#0079a8","#FFD027","#162C9a","#FDF028","#7828FD","#37DC94","#FA5C65","#95eb00","#f66754","#26A7FF","#FF5126","#e59c82","#0079a8","#268AFF","#FD9A28","#162C9a","#FFD027","#7828FD","#FDF028");


function setup() {
	
	
	
	//createCanvas(windowWidth, windowHeight);
	createCanvas(800, 800);
	pallete = nicecolors;
	
	sliderAng = createSlider(1,15,5,1);
    sliderAng.position(20, 20);

	sliderAng2 = createSlider(1,15,5,1);
    sliderAng2.position(150, 20);
	
	sliderAng3 = createSlider(1,15,5,1);
    sliderAng3.position(300, 20);
	
	noLoop();
}

function draw() {
	strokeCol = color("#FFEAF7");
	background("#AAAAAA");
	
	//background("#0A0A0A");
	rectRec(offsetX, offsetY, width - offsetX, offsetY, width - offsetX, height - offsetY, offsetX, height - offsetY,);
}

function rectRec(x1, y1, x2, y2, x3, y3, x4, y4) {
	let p1 = createVector(x1, y1);
	let p2 = createVector(x2, y2);
	let p3 = createVector(x3, y3);
	let p4 = createVector(x4, y4);

	let v1 = p5.Vector.sub(p2, p1);
	let v2 = p5.Vector.sub(p3, p2);
	let v3 = p5.Vector.sub(p4, p3);
	let v4 = p5.Vector.sub(p1, p4);
	let w = v1.mag() + v3.mag();
	let h = v2.mag() + v4.mag();
	let sw = (w + h) / 100;
	let col = random(pallete);

	fill(col);
	stroke("#0A0A0A");
	//stroke(strokeCol);
	let rs = round(random(4,8));
	strokeWeight(sliderAng3.value());
	beginShape();
	vertex(p1.x, p1.y);
	
	//vertex(mouseX, mouseY);
	vertex(p2.x, p2.y);
	vertex(p3.x, p3.y);
	vertex(p4.x, p4.y);
	endShape(CLOSE);
	//graularity
	if (w + h > (50*sliderAng.value()*1.5)) {
		let maxr = 0.8;
		let minr = 1 - maxr;
		if (w > h) {
			let r1 = p5.Vector.lerp(p1, p2, gauss());
			let r2 = p5.Vector.lerp(p3, p4, gauss());
			rectRec(x1, y1, r1.x, r1.y, r2.x, r2.y, x4, y4);
			rectRec(r1.x, r1.y, x2, y2, x3, y3, r2.x, r2.y);
		} else {
			let r1 = p5.Vector.lerp(p4, p1, gauss());
			let r2 = p5.Vector.lerp(p2, p3, gauss());
			rectRec(x1, y1, x2, y2, r2.x, r2.y, r1.x, r1.y);
			rectRec(r1.x, r1.y, r2.x, r2.y, x3, y3, x4, y4);
		}
	}
}

function keyPressed() {
	redraw();
}

function gauss() {
	//squariness
	let n = map(randomGaussian(), -10, sliderAng2.value(), 0, 1);
	return n;
}

function createPallete(_url) {
	let slash_index = _url.lastIndexOf('/');
	let pallate_str = _url.slice(slash_index + 1);
	let arr = pallate_str.split('-');
	//{;loopProtect.protect({ line: 74, reset: true });
	for (let i = 0; i < arr.length; i++) 
	{
		arr[i] = '#' + arr[i];
	}
	return nicecolors = new Array ("#FA5C65","#37DC94","#ee4035","#56b949","#c35033","#bcddda","#e59c82","#0079a8","#FFD027","#162C9a","#FDF028","#7828FD","#37DC94","#FA5C65","#95eb00","#f66754","#26A7FF","#FF5126","#e59c82","#0079a8","#268AFF","#FD9A28","#162C9a","#FFD027","#7828FD","#FDF028");

	//return arr;
	}
