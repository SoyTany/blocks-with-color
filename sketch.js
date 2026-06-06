let violeta = 280 
let divhue = 2%360

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100);
  angleMode(DEGREES);
}

function draw() {
  background((mouseX+mouseY)/divhue,50,100);
  ambientLight(violeta, 60, 90);
  pointLight(80, 50, 80, 200, 100, 100);
  
  push();
  shininess(20);
  specularColor(80, 80, 90);
  specularMaterial(violeta, 60, 70);
  noStroke();
  torus(100, 50, 50, 100);
  pop();
   
  orbitControl();
}
