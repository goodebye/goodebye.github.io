var holzerSketch = function(p) {

  //colors
  var low_color = 80;
  var high_color = 255;
  var bg;

  //text stuff
  var essayHeight, essayWidth, essayX, essayY, fontSize;

  var boxString = "PUT TEXT In THE WHITE BOX.\nSLIDER CHAnGEs FOnT SIZE.\nCLICk COLOR FOR nEW COLOR.\ncLICk SAVE ME TO SAVE IMAGE.\n: )";

  p.setup = function() {
    p.createCanvas(600, 600);

    //dom stuff

    sizeSlider = p.createSlider(13, 50, 25);
    sizeSlider.class('button');
    sizeSlider.parent('buttons');

    colorButton = p.createButton('COLOR');
    colorButton.parent('buttons');
    colorButton.class('button');
    colorButton.mousePressed(function() {
      bg = randomColor();
    });

    saveButton = p.createButton('SAVE ME');
    saveButton.parent('buttons');
    saveButton.class('button');

    essayText = p.createElement("textarea");
    essayText.id("essay-text");
    essayText.attribute("cols", 50)
    essayText.attribute("rows", 10)
    essayText.parent("input-text");
    essayText.value(boxString);

    //color stuff
    bg = randomColor();

    //essay stuff
    essayWidth = p.width * 8 /10
    essayHeight = p.height * 8 / 10;
    essayX = p.width / 10;
    essayY = p.height / 10;

    saveButton.mousePressed(function() {
      p.save()
      var biggerCanvas = p.createGraphics(p.width * 2, p.height *  2);
      var bigFontSize = sizeSlider.value() *  2;
      biggerCanvas.textSize(bigFontSize);
      biggerCanvas.fill(0);
      biggerCanvas.background(bg);
      biggerCanvas.textFont("Times New Roman");
      biggerCanvas.textStyle(p.ITALIC);
      biggerCanvas.text(essayText.value().toUpperCase(), essayX * 2, essayY *  2, essayWidth *  2, essayHeight * 2);
      biggerCanvas.save("inflammatory_essay.jpg");
    });


    //etc.
    // frameRate(20);
  }

  p.draw = function() {
    p.background(bg);
    p.fill(0);

    fontSize = sizeSlider.value();
    p.textSize(fontSize);
    p.textFont("Times New Roman");
    p.textStyle(p.ITALIC);
    p.text(essayText.value().toUpperCase(), essayX, essayY, essayWidth, essayHeight);
  }

  function randomColor() {
    function random_val() {
      return p.random(low_color, high_color);
    }
    var r, g, b;
    r = random_val();
    g = random_val();
    b = random_val();

    var threshold = 50;

    if (r < threshold && g < threshold && b < threshold) {
      var coin_toss = p.floor(p.random(0,3));
      if (coin_toss == 0) {
        r = random_val(200, 255);
      }
      else if (coin_toss == 1) {
        g = random_val(200, 255);
      }
      else if (coin_toss == 2) {
        b = random_val(200, 255);
      }
    }
    return p.color(r, g, b)
  }
}

var holzerP5 = new p5(holzerSketch, 'holzer');
