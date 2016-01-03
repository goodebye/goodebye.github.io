var atomSketch = function(p) {

  var atomCanvas, atomTex;

  p.setup = function() {
    atomCanvas = p.createCanvas($("#atom").innerWidth(), $("#atom").innerHeight(), p.WEBGL);
    atomTex = p.loadImage("assets/sketches/layout/atom.jpg");
  }

  p.draw = function() {
    p.ambientLight(0, 0, 1000);
    p.ambientLight(255);
    p.pointLight(250, 250, 250, 100, 100, 0);

    p.rotateX(p.mouseY / 150);
    p.rotateY(p.mouseX / 150);
    // p.rotateY(p.frameCount * 0.015);
    // p.texture(atomTex);
    p.specularMaterial(200, 200, 0)
    p.sphere(p.height / 3)
    p.specularMaterial(0, 200, 200);
    p.rotateY(p.frameCount * 0.015);
    p.torus(p.height / 2);
    p.rotateX(p.PI / 3)
    p.rotateY(p.frameCount * 0.015);
    p.specularMaterial(0, 200, 0);
    p.torus(p.height / 1.5);
    p.rotateX(p.PI / 3)
    p.rotateY(p.mouseX / 150);

    p.rotateY(p.frameCount * 0.015);
    p.specularMaterial(200, 20, 0);
    p.torus(p.height / 1.25);
    p.rotateX(p.PI / 3)
    p.rotateY(p.frameCount * 0.015);
    p.specularMaterial(200, 90, 30);
    p.torus(p.height / 1);

  }

  p.windowResized = function() {
    p.resizeCanvas($("#atom").innerWidth(), $("#atom").innerHeight());
  }
}

var atomP5 = new p5(atomSketch, 'atom');
