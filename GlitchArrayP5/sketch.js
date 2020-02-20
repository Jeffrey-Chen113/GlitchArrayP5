//GlitchArrayP5
let song;
var imageList;
var lightMillis;
var lightSequence = 1;
var danceMillis;
var danceSequence=1;
var walkMillis;
var walkSequence=1;
var glitchMillis;
var state;
var state2;

var ranState=[3,4,5,6,7,8];

var img1;
var img2;
var img3;
var img4;
var img5;
var img6;

var glitchOff=1;
var glitchOn=2;
var space=3;
var up=4;
var manager=5;
var road=6;
var dens=7;
var joker=8;

var timer=[3000,3500,4000,6969]

function preload() {
	img1 = loadImage('assets/road.jpg');
	img2 = loadImage('assets/up.jpg');
	img3 = loadImage('assets/manager.jpg');
	img4 = loadImage('assets/space.jpg');
	img5 = loadImage('assets/dens.jpg');
	img6 = loadImage('assets/joker.jpg');
	song = loadSound('assets/song.mp3');
}
function setup() {
  imageMode(CENTER);
  createCanvas(900,900);
  background(0);
  glitchMillis=millis();
  lightMillis=millis();
  danceMillis=millis();
  walkMillis=millis();
  
  state=glitchOff;
  state2=road;
}

function draw() {
	if (millis()>glitchMillis+ random(timer)){
		if (state=glitchOff){
			state=glitchOn
		}
		else if (state=glitchOn){
			state=glitchOff
		}
	}
	if (state==glitchOff){
  		if (state2==road){
  			if (millis()>walkMillis+400){
  				image(img1,width/2,height/2,1000,1000);
  				walk();
  				walkMillis = millis();
	  		}
	  	}
	  	else if(state2==up){
	  		if (millis()>walkMillis+400){
	  			image(img2,width/2,height/2,1000,1000);
	  			walk();
	  			walkMillis = millis();
	  		}
	  	}
	  	else if (state2==manager){
	  		if (millis()>walkMillis+400){
	  			image(img3,width/2,height/2,1000,1000);
	  			walk();
	  			walkMillis = millis();
	  		}
	  	}
	  	else if (state2==space){
	  		if (millis()>walkMillis+400){
	  			image(img4,width/2,height/2,1000,1000);
	  			walk();
	  			walkMillis = millis();
	  		}
	  	}
	  	else if (state2==dens){
  		if (millis()>walkMillis+400){
  			image(img5,width/2,height/2,1000,1000);
  			dance();
  			walkMillis = millis();
  		}
  	}
  	else if (state2==joker){
  		if (millis()>walkMillis+400){
  			image(img6,width/2,height/2,1000,1000);
  			dance();
  			walkMillis = millis();
  		}
  	}
	  }
  else if (state==glitchOn){
  	if (state2==road){
  		if (millis()>walkMillis+400){
  			image(img1,width/2,height/2,1000,1000);
  			dance();
  			walkMillis = millis();
  		}
  		if (millis()>lightMillis+250){
  			raveLights();
    		lightMillis = millis();
  		}
  	}
  	else if (state2==up){
  		if (millis()>walkMillis+400){
  			image(img2,width/2,height/2,1000,1000);
  			dance();
  			walkMillis = millis();
  		}
  		if (millis()>lightMillis+250){
  			raveLights();
    		lightMillis = millis();
  		}
  	}
  	else if (state2==manager){
  		if (millis()>walkMillis+400){
  			image(img3,width/2,height/2,1000,1000);
  			dance();
  			walkMillis = millis();
  		}
  		if (millis()>lightMillis+250){
  			raveLights();
    		lightMillis = millis();
  		}
  	}
  	else if (state2==space){
  		if (millis()>walkMillis+400){
  			image(img4,width/2,height/2,1000,1000);
  			dance();
  			walkMillis = millis();
  		}
  		if (millis()>lightMillis+250){
  			raveLights();
    		lightMillis = millis();
  		}
  	}
  	else if (state2==dens){
  		if (millis()>walkMillis+400){
  			image(img5,width/2,height/2,1000,1000);
  			dance();
  			walkMillis = millis();
  		}
  		if (millis()>lightMillis+250){
  			raveLights();
    		lightMillis = millis();
  		}
  	}
  	else if (state2==joker){
  		if (millis()>walkMillis+400){
  			image(img6,width/2,height/2,1000,1000);
  			dance();
  			walkMillis = millis();
  		}
  		if (millis()>lightMillis+250){
  			raveLights();
    		lightMillis = millis();
  		}
  	}
  }
}

function mousePressed(){
	state2=random(ranState);
	song.play();
}

function raveLights(){
  if (lightSequence==1){
    fill(255,0,0,20);
    rect(-10,-10,1000,1000);
    lightSequence++;
  }
  else if (lightSequence==2){
    fill(0,255,0,20);
    rect(-10,-10,1000,1000);
    lightSequence++;
  }
  else if (lightSequence==3){
    fill(0,0,255,40);
    rect(-10,-10,1000,1000);
    lightSequence=1;
  }
}

function walk(){
  if (walkSequence==1){
    personF1(width/2,height/2);
    walkSequence++;
  }
  else if (walkSequence==2){
    personF2(width/2,height/2);
    walkSequence++;
  }
  else if (walkSequence==3){
    personF1(width/2,height/2);
    walkSequence++;
  }
  else if (walkSequence==4){
    personF3(width/2,height/2);
    walkSequence=1;
  }
}
function dance(){
  if (danceSequence==1){
    personDance1(width/2,height/2);
    danceSequence++;
  }
  else if (danceSequence==2){
    personDance2(width/2,height/2);
    danceSequence++;
  }
  else if (danceSequence==3){
    personDance1(width/2,height/2);
    danceSequence++;
  }
  else if (danceSequence==4){
    personDance3(width/2,height/2);
    danceSequence=1;
  }
}

//Dancing Person Frames
function personDance1(x,y){
  stroke(255, 219, 172);
  fill(255, 219, 172);
  beginShape();
  rect(130+x,20+y,40,10);
  rect(110+x,30+y,80,10);
  rect(100+x,40+y,100,40);
  rect(90+x,80+y,120,10);
  rect(100+x,90+y,100,10);
  rect(120+x,100+y,60,10);
  rect(140+x,110+y,20,10);
  endShape(CLOSE);
  //Glasses
  beginShape();
  fill(0);
  stroke(0);
  rect(115+x,90+y,30,10);
  rect(155+x,90+y,30,10);
  rect(115+x,70+y,30,10);
  rect(155+x,70+y,30,10);
  rect(115+x,80+y,10,10);
  rect(135+x,80+y,30,10);
  rect(175+x,80+y,10,10);
  endShape(CLOSE);
  //Hair
  beginShape();
  fill(43,29,14);
  stroke(43,29,14);
  rect(130+x,20+y,40,10);
  rect(110+x,30+y,80,10);
  rect(100+x,40+y,10,30);
  rect(190+x,40+y,10,30);
  rect(110+x,40+y,80,10);
  rect(145+x,50+y,10,10);
  endShape(CLOSE);
  //DefaultLeftLeg
  beginShape();
  fill(21,96,189);
  stroke(21,96,189);
  rect(110+x,210+y,30,20);
  rect(120+x,230+y,20,20);
  rect(130+x,250+y,10,30);
  rect(120+x,270+y,20,10);
  endShape(CLOSE);
  //DefaultRightLeg
  beginShape();
  fill(21,96,189);
  stroke(21,96,189);
  rect(160+x,210+y,30,20);
  rect(160+x,230+y,20,20);
  rect(160+x,250+y,10,30);
  rect(160+x,270+y,20,10);
  endShape(CLOSE);
  //DefaultArms
  beginShape();
  fill(20);
  stroke(20);
  rect(60+x,100+y,30,20);
  rect(70+x,120+y,70,10);
  rect(80+x,130+y,60,10);
  rect(210+x,100+y,30,20);
  rect(160+x,120+y,70,10);
  rect(160+x,130+y,60,10);
  endShape(CLOSE);
  //Default Hands
  beginShape();
  fill(255, 219, 172);
  stroke(255, 219, 172);
  rect(60+x,80+y,30,20);
  rect(210+x,80+y,30,20);
  endShape(CLOSE);
  //Torso Base
  beginShape();
  fill(240);
  stroke(240);
  rect(130+x,120+y,40,10);
  rect(120+x,130+y,60,50);
  rect(110+x,180+y,80,30);
  endShape(CLOSE);
  //Top
  beginShape();
  fill(0);
  stroke(0);
  rect(110+x,140+y,10,70);
  rect(180+x,140+y,10,70);
  rect(130+x,120+y,10,90);
  rect(120+x,130+y,10,80);
  rect(160+x,120+y,10,90);
  rect(170+x,130+y,10,80);
  endShape(CLOSE);
}

function personDance2(x,y){
  stroke(255, 219, 172);
  fill(255, 219, 172);
  beginShape();
  rect(120+x,20+y,40,10);
  rect(100+x,30+y,80,10);
  rect(90+x,40+y,100,40);
  rect(80+x,80+y,120,10);
  rect(90+x,90+y,100,10);
  rect(110+x,100+y,60,10);
  rect(130+x,110+y,20,10);
  endShape(CLOSE);
  //Glasses
  beginShape();
  fill(0);
  stroke(0);
  rect(105+x,90+y,30,10);
  rect(145+x,90+y,30,10);
  rect(105+x,70+y,30,10);
  rect(145+x,70+y,30,10);
  rect(105+x,80+y,10,10);
  rect(125+x,80+y,30,10);
  rect(165+x,80+y,10,10);
  endShape(CLOSE);
  //Hair
  beginShape();
  fill(43,29,14);
  stroke(43,29,14);
  rect(120+x,20+y,40,10);
  rect(100+x,30+y,80,10);
  rect(90+x,40+y,10,30);
  rect(180+x,40+y,10,30);
  rect(100+x,40+y,80,10);
  rect(135+x,50+y,10,10);
  endShape(CLOSE);
  //DefaultLeftLeg
  beginShape();
  fill(21,96,189);
  stroke(21,96,189);
  rect(110+x,210+y,30,20);
  rect(120+x,230+y,20,20);
  rect(130+x,250+y,10,30);
  rect(120+x,270+y,20,10);
  endShape(CLOSE);
  //DefaultRightLeg
  beginShape();
  fill(21,96,189);
  stroke(21,96,189);
  rect(160+x,210+y,30,20);
  rect(170+x,230+y,20,20);
  rect(180+x,250+y,10,30);
  rect(180+x,270+y,20,10);
  endShape(CLOSE);
  //DefaultArms
  beginShape();
  fill(20);
  stroke(20);
  rect(60+x,110+y,30,20);
  rect(70+x,130+y,70,10);
  rect(80+x,140+y,60,10);
  rect(210+x,110+y,30,20);
  rect(160+x,130+y,70,10);
  rect(160+x,140+y,60,10);
  endShape(CLOSE);
  //Default Hands
  beginShape();
  fill(255, 219, 172);
  stroke(255, 219, 172);
  rect(60+x,90+y,30,20);
  rect(210+x,90+y,30,20);
  endShape(CLOSE);
  //Torso Base
  beginShape();
  fill(240);
  stroke(240);
  rect(130+x,120+y,40,10);
  rect(120+x,130+y,60,50);
  rect(120+x,180+y,60,30);
  endShape(CLOSE);
  //Top
  beginShape();
  fill(0);
  stroke(0);
  rect(110+x,120+y,30,30);
  rect(160+x,120+y,30,30);
  rect(120+x,150+y,30,50);
  rect(170+x,150+y,30,50);
  rect(110+x,200+y,30,10);
  rect(160+x,200+y,30,10);
  endShape(CLOSE);
}

function personDance3(x,y){
  stroke(255, 219, 172);
  fill(255, 219, 172);
  beginShape();
  rect(140+x,20+y,40,10);
  rect(120+x,30+y,80,10);
  rect(110+x,40+y,100,40);
  rect(100+x,80+y,120,10);
  rect(110+x,90+y,100,10);
  rect(130+x,100+y,60,10);
  rect(150+x,110+y,20,10);
  endShape(CLOSE);
  //Glasses
  beginShape();
  fill(0);
  stroke(0);
  rect(125+x,90+y,30,10);
  rect(165+x,90+y,30,10);
  rect(125+x,70+y,30,10);
  rect(165+x,70+y,30,10);
  rect(125+x,80+y,10,10);
  rect(145+x,80+y,30,10);
  rect(185+x,80+y,10,10);
  endShape(CLOSE);
  //Hair
  beginShape();
  fill(43,29,14);
  stroke(43,29,14);
  rect(140+x,20+y,40,10);
  rect(120+x,30+y,80,10);
  rect(110+x,40+y,10,30);
  rect(200+x,40+y,10,30);
  rect(120+x,40+y,80,10);
  rect(155+x,50+y,10,10);
  endShape(CLOSE);
  //DefaultLeftLeg
  beginShape();
  fill(21,96,189);
  stroke(21,96,189);
  rect(110+x,210+y,30,20);
  rect(110+x,230+y,20,20);
  rect(110+x,250+y,10,30);
  rect(100+x,270+y,20,10);
  endShape(CLOSE);
  //DefaultRightLeg
  beginShape();
  fill(21,96,189);
  stroke(21,96,189);
  rect(160+x,210+y,30,20);
  rect(160+x,230+y,20,20);
  rect(160+x,250+y,10,30);
  rect(160+x,270+y,20,10);
  endShape(CLOSE);
  //DefaultArms
  beginShape();
  fill(20);
  stroke(20);
  rect(60+x,110+y,30,20);
  rect(70+x,130+y,70,10);
  rect(80+x,140+y,60,10);
  rect(210+x,110+y,30,20);
  rect(160+x,130+y,70,10);
  rect(160+x,140+y,60,10);
  endShape(CLOSE);
  //Default Hands
  beginShape();
  fill(255, 219, 172);
  stroke(255, 219, 172);
  rect(60+x,90+y,30,20);
  rect(210+x,90+y,30,20);
  endShape(CLOSE);
  //Torso Base
  beginShape();
  fill(240);
  stroke(240);
  rect(130+x,120+y,40,10);
  rect(120+x,130+y,60,50);
  rect(120+x,180+y,60,30);
  endShape(CLOSE);
  //Top
  beginShape();
  fill(0);
  stroke(0);
  rect(110+x,120+y,30,30);
  rect(160+x,120+y,30,30);
  rect(100+x,150+y,30,50);
  rect(150+x,150+y,30,50);
  rect(110+x,200+y,30,10);
  rect(160+x,200+y,30,10);
  endShape(CLOSE);
}

//Walking Person Frames
function personF1(x,y){
  stroke(255, 219, 172);
  fill(255, 219, 172);
  beginShape();
  rect(130+x,20+y,40,10);
  rect(110+x,30+y,80,10);
  rect(100+x,40+y,100,40);
  rect(90+x,80+y,120,10);
  rect(100+x,90+y,100,10);
  rect(120+x,100+y,60,10);
  rect(140+x,110+y,20,10);
  endShape(CLOSE);
  //Glasses
  beginShape();
  fill(0);
  stroke(0);
  rect(115+x,90+y,30,10);
  rect(155+x,90+y,30,10);
  rect(115+x,70+y,30,10);
  rect(155+x,70+y,30,10);
  rect(115+x,80+y,10,10);
  rect(135+x,80+y,30,10);
  rect(175+x,80+y,10,10);
  endShape(CLOSE);
  //Hair
  beginShape();
  fill(43,29,14);
  stroke(43,29,14);
  rect(130+x,20+y,40,10);
  rect(110+x,30+y,80,10);
  rect(100+x,40+y,10,30);
  rect(190+x,40+y,10,30);
  rect(110+x,40+y,80,10);
  rect(145+x,50+y,10,10);
  endShape(CLOSE);
  //DefaultLeftLeg
  beginShape();
  fill(21,96,189);
  stroke(21,96,189);
  rect(110+x,210+y,30,20);
  rect(120+x,230+y,20,20);
  rect(130+x,250+y,10,30);
  rect(120+x,270+y,20,10);
  endShape(CLOSE);
  //DefaultRightLeg
  beginShape();
  fill(21,96,189);
  stroke(21,96,189);
  rect(160+x,210+y,30,20);
  rect(160+x,230+y,20,20);
  rect(160+x,250+y,10,30);
  rect(160+x,270+y,20,10);
  endShape(CLOSE);
  //DefaultArms
  beginShape();
  fill(20);
  stroke(20);
  rect(120+x,120+y,60,10);
  rect(110+x,130+y,80,20);
  rect(100+x,150+y,100,20);
  rect(90+x,170+y,120,10);
  endShape(CLOSE);
  //Default Hands
  beginShape();
  fill(255, 219, 172);
  stroke(255, 219, 172);
  rect(90+x,180+y,120,20);
  endShape(CLOSE);
  //Torso Base
  beginShape();
  fill(240);
  stroke(240);
  rect(130+x,120+y,40,10);
  rect(120+x,130+y,60,50);
  rect(110+x,180+y,80,30);
  endShape(CLOSE);
  //Top
  beginShape();
  fill(0);
  stroke(0);
  rect(110+x,180+y,10,30);
  rect(180+x,180+y,10,30);
  rect(130+x,120+y,10,90);
  rect(120+x,130+y,10,80);
  rect(160+x,120+y,10,90);
  rect(170+x,130+y,10,80);
  endShape(CLOSE);
}
//Frame2 of Person
function personF2(x,y){
  stroke(255, 219, 172);
  fill(255, 219, 172);
  beginShape();
  rect(130+x,20+y,40,10);
  rect(110+x,30+y,80,10);
  rect(100+x,40+y,100,40);
  rect(90+x,80+y,120,10);
  rect(100+x,90+y,100,10);
  rect(120+x,100+y,60,10);
  rect(140+x,110+y,20,10);
  endShape(CLOSE);
  //Glasses
  beginShape();
  fill(0);
  stroke(0);
  rect(115+x,90+y,30,10);
  rect(155+x,90+y,30,10);
  rect(115+x,70+y,30,10);
  rect(155+x,70+y,30,10);
  rect(115+x,80+y,10,10);
  rect(135+x,80+y,30,10);
  rect(175+x,80+y,10,10);
  endShape(CLOSE);
  //Hair
  beginShape();
  fill(43,29,14);
  stroke(43,29,14);
  rect(130+x,20+y,40,10);
  rect(110+x,30+y,80,10);
  rect(100+x,40+y,10,30);
  rect(190+x,40+y,10,30);
  rect(110+x,40+y,80,10);
  rect(145+x,50+y,10,10);
  endShape(CLOSE);
  //LArmBackwards
  beginShape();
  fill(20);
  stroke(20);
  rect(110+x,150+y,10,40);
  rect(100+x,170+y,10,20);
  endShape(CLOSE);
  //LHandBackwards
  beginShape();
  fill(255, 219, 172);
  stroke(255, 219, 172);
  rect(100+x,170+y,20,20);
  endShape(CLOSE);
  //DefaultLeftLeg
  beginShape();
  fill(21,96,189);
  stroke(21,96,189);
  rect(110+x,210+y,30,20);
  rect(120+x,230+y,20,20);
  rect(130+x,250+y,10,30);
  rect(120+x,270+y,20,10);
  endShape(CLOSE);
  //RLegBackwards
  beginShape();
  fill(11,86,179);
  stroke(11,86,179);
  rect(150+x,210+y,30,30);
  rect(160+x,240+y,10,30);
  rect(170+x,260+y,10,10);
  endShape(CLOSE);
  //Torso Base
  beginShape();
  fill(240);
  stroke(240);
  rect(130+x,120+y,40,10);
  rect(120+x,130+y,60,50);
  rect(110+x,180+y,80,30);
  endShape(CLOSE);
  //Top
  beginShape();
  fill(0);
  stroke(0);
  rect(110+x,180+y,10,30);
  rect(180+x,180+y,10,30);
  rect(130+x,120+y,10,90);
  rect(120+x,130+y,10,80);
  rect(160+x,120+y,10,90);
  rect(170+x,130+y,10,80);
  endShape(CLOSE);
  //RArmForward
  beginShape();
  fill(20);
  stroke(20);
  rect(170+x,130+y,10,10);
  rect(170+x,170+y,10,40);
  rect(180+x,140+y,10,70);
  rect(190+x,160+y,10,50);
  endShape(CLOSE);
  //RHandForward
  beginShape();
  fill(255, 219, 172);
  stroke(255, 219, 172);
  rect(170+x,190+y,30,20);
  endShape(CLOSE);
}

//Frame3 of Person
function personF3(x,y){
  stroke(255, 219, 172);
  fill(255, 219, 172);
  beginShape();
  rect(130+x,20+y,40,10);
  rect(110+x,30+y,80,10);
  rect(100+x,40+y,100,40);
  rect(90+x,80+y,120,10);
  rect(100+x,90+y,100,10);
  rect(120+x,100+y,60,10);
  rect(140+x,110+y,20,10);
  endShape(CLOSE);
  //Glasses
  beginShape();
  fill(0);
  stroke(0);
  rect(115+x,90+y,30,10);
  rect(155+x,90+y,30,10);
  rect(115+x,70+y,30,10);
  rect(155+x,70+y,30,10);
  rect(115+x,80+y,10,10);
  rect(135+x,80+y,30,10);
  rect(175+x,80+y,10,10);
  endShape(CLOSE);
  //Hair
  beginShape();
  fill(43,29,14);
  stroke(43,29,14);
  rect(130+x,20+y,40,10);
  rect(110+x,30+y,80,10);
  rect(100+x,40+y,10,30);
  rect(190+x,40+y,10,30);
  rect(110+x,40+y,80,10);
  rect(145+x,50+y,10,10);
  endShape(CLOSE);
  //RArmBackwards
  beginShape();
  fill(20);
  stroke(20);
  rect(180+x,150+y,10,40);
  rect(190+x,170+y,10,20);
  endShape(CLOSE);
  //RHandBackwards
  beginShape();
  fill(255, 219, 172);
  stroke(255, 219, 172);
  rect(180+x,170+y,20,20);
  endShape(CLOSE);
  //DefaultRightLeg
  beginShape();
  fill(21,96,189);
  stroke(21,96,189);
  rect(160+x,210+y,30,20);
  rect(160+x,230+y,20,20);
  rect(160+x,250+y,10,30);
  rect(160+x,270+y,20,10);
  endShape(CLOSE);
  //LLegBackwards
  beginShape();
  fill(11,86,179);
  stroke(11,86,179);
  rect(120+x,210+y,30,30);
  rect(130+x,240+y,10,30);
  rect(120+x,260+y,10,10);
  endShape(CLOSE);
  //Torso Base
  beginShape();
  fill(240);
  stroke(240);
  rect(130+x,120+y,40,10);
  rect(120+x,130+y,60,50);
  rect(110+x,180+y,80,30);
  endShape(CLOSE);
  //Top
  beginShape();
  fill(0);
  stroke(0);
  rect(110+x,180+y,10,30);
  rect(180+x,180+y,10,30);
  rect(130+x,120+y,10,90);
  rect(120+x,130+y,10,80);
  rect(160+x,120+y,10,90);
  rect(170+x,130+y,10,80);
  endShape(CLOSE);
  //LArmForward
  beginShape();
  fill(20);
  stroke(20);
  rect(120+x,120+y,10,10);
  rect(120+x,170+y,10,40);
  rect(110+x,140+y,10,70);
  rect(100+x,160+y,10,50);
  endShape(CLOSE);
  //LHandForward
  beginShape();
  fill(255, 219, 172);
  stroke(255, 219, 172);
  rect(100+x,190+y,30,20);
  endShape(CLOSE);
}