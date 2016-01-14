var headerSketch = function(p) {

  var headerCanvas;
  var headerString;
  var fontSize;
  var waveOffset = 0;
  var colorOffset = 0;
  var letterDrives = {};

  p.setup = function() {
    headerCanvas = p.createCanvas($("#header").innerWidth(), $("#header").innerHeight());
    headerString = "GOODE BYE";
    setFontSize();

    p.colorMode(p.HSL, 100);

    for (var i = 0; i < headerString.length; i++) {
      var letter = headerString.charAt(i);
      if (letter != " ")
        letterDrives[letter] = p.loadImage("/assets/sketches/index/letters/" + letter.toLowerCase() + ".gif");
    }
  }

  p.draw = function() {
    p.clear()
    waveOffset += p.PI / 60;
    colorOffset += .75;

    p.textSize(fontSize);

    for (var i = 0; i < headerString.length; i++) {
      p.push();
      var wavePos = p.createVector(p.cos(i + waveOffset) * 10 + p.width / 20, p.sin(i + waveOffset) * 15);``
      var pos = p.createVector(wavePos.x + (p.width * .8) / headerString.length * i + p.width / 15, wavePos.y + p.height / 4);
      p.translate(pos.x, pos.y) ;
      p.scale(.17);

      var letter = headerString.charAt(i);
      p.tint((colorOffset + (i / headerString.length) * 100) % 100, 100, 60);
      if (letter != " ")
        p.image(letterDrives[letter], 0, 0);
      // p.text(letter, p.width / headerString.length * i, p.height / 1.5);
      p.pop();
    }

    if (waveOffset >= p.TWO_PI) {
      waveOffset = 0;
    }

    if (colorOffset > 100) {
      colorOffset = 0;
    }
  }

  p.windowResized = function() {
    p.resizeCanvas($("#header").innerWidth(), $("#header").innerHeight());
    setFontSize();
  }

  setFontSize = function() {
    fontSize = p.width / 10;
  }
}

var headerP5 = new p5(headerSketch, 'header');
