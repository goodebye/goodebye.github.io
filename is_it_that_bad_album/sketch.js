var eyeSketch = function(p) {

  var eyeSize;

  p.setup = function() {
    p.createCanvas($("#eye").innerWidth(), $("#eye").innerWidth() / 2.5, p.WEBGL);
    eyeSize = p.width / 8;
    eye = p.loadImage("eye.png")
  }

  p.draw = function() {
    p.background(0);
    p.push();
      p.translate(p.width / 2 - eyeSize * 6, 0, 0);
      p.rotateX(p.QUARTER_PI/2 + p.HALF_PI / p.height * p.mouseY);
      p.rotateY(p.PI);
      p.rotateZ(p.PI / p.width * p.mouseX - p.PI / 1.8)
      p.texture(eye);
      p.sphere(eyeSize);
    p.pop();

    p.push();
      p.translate(p.width / 2 - eyeSize * 2.5, 0, 0);
      p.rotateX(p.QUARTER_PI/2 + p.HALF_PI / p.height * p.mouseY);
      p.rotateY(p.PI);
      p.rotateZ(p.PI / p.width * p.mouseX - p.PI / 1.8)
      p.texture(eye);
      p.sphere(eyeSize);
    p.pop();
  }
}

var eyeP5 = new p5(eyeSketch, 'eye');
