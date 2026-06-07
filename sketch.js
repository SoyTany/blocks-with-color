let violeta = 280;
let amarillo = 60
let naranja = 10
let azul = 200
let magenta = 300
let verde = 130
let divhue = 2%360;
let font;

function preload() {
  font = loadFont ('Fonts/BitcountGridSingle_Cursive-Medium.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100);
  angleMode(DEGREES);
}

function draw() {
  background((mouseX+mouseY)/divhue,50,100);
  pointLight(80, 50, 80, 200, 100, 100);
  
push();
  translate(0, 0, 0);
  ambientLight(violeta, 60, 90);
  shininess(40);
  specularMaterial(violeta, 60, 70);
  noStroke();
  torus(100, 50, 50, 100);
pop();

push();
  textAlign(CENTER, CENTER);
  translate(0, 0, 0);
  fill("#FFFFFF");
  textFont(font);
  textSize(40);
  text("Experimentación personal", 0, -300);
pop();
  
push();
  translate(-500, -100, 0);
  ambientLight(amarillo, 70, 90);
  specularMaterial(amarillo, 60, 100);
  noStroke();
  box(300, 500, 300);
pop();
  
push();
  translate(-810, -200, 0);
  ambientLight(verde, 70, 90);
  specularMaterial(verde, 60, 100);
  noStroke();
  box(300, 700, 300);
pop();
  
push();
  translate(-810, -350, -310);
  ambientLight(azul, 70, 90);
  specularMaterial(azul, 60, 100);
  noStroke();
  box(300, 1000, 300);
pop();
  
push();
  translate(-500, -250, -310);
  ambientLight(magenta, 70, 90);
  specularMaterial(magenta, 60, 100);
  noStroke();
  box(300, 800, 300);
pop();
  
  orbitControl();
  
push();
pop();
  
}
