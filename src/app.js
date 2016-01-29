import paper from 'paper';

paper.install(window);

var canvas = document.getElementById('myCanvas');
// Create an empty project and a view for the canvas:
paper.setup(canvas);


function draggableRectangle(point, size, text) {
  var path = new Path.Rectangle(new Rectangle(point, size));
  var textItem = new PointText(new Point(200, 50));
  textItem.justification = 'center';
  textItem.fillColor = 'white';
  textItem.fontSize = 30;
  textItem.content = text;
  textItem.position = path.position;

  var group = new Group([path, textItem])

  group.attach('mouseenter', function() {
    path.selected = true;
  });
  group.attach('mouseleave', function() {
    path.selected = false;
  });
  group.attach('mousedown', function(event) {
    this.initialTranslation = event.point.subtract(this.position);
  });
  group.attach('mousedrag', function(event) {
    this.position = event.point.subtract(this.initialTranslation);
  });
  return group;
}

var defaultSize = new Size(200, 100);
var shape1 = draggableRectangle(new Point(50, 50), new Size(400, 100), 'Paris');
shape1.children[0].fillColor = '#D46A6A';
shape1.children[0].selectedColor = '#801515';
var shape2 = draggableRectangle(new Point(500, 200), new Size(200, 100), 'Nantes');
shape2.children[0].fillColor = '#407F7F'
shape2.children[0].selectedColor = '#003333'
var shape3 = draggableRectangle(new Point(800, 350), new Size(300, 100), 'Montpellier');
shape3.children[0].fillColor = '#A5C663'
shape3.children[0].selectedColor = '#354F00'




// Draw the view now:
paper.view.draw();
