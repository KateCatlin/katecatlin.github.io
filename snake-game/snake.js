// var snake = [{ top: 0, left: 0}];
// var drawableSnake = { color: "pink", pixels: snake };
// var drawableObjects = [drawableSnake];
// CHUNK.draw(drawableObjects);

var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "green", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
}

var moveSnake = function(snake) {
  var oldSegment = snake[0];
  var newSegment = { top: oldSegment.top + 1, left: oldSegment.left };
  var newSnake = [newSegment];
  return newSnake;
}

var snake = [{ top: 0, left: 0}];
drawSnake(snake);
