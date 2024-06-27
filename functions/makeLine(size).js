function makeLine(size){
    let line = '';
    for (let i = 0; i < size; i++){
        line += "#";
    }
    return line;
}

function makeSquare(size){
    let str = '';
    let square = '';
    for (let i = 0; i < size; i++){
      str = makeRectangle(size, size) + '\n';
      square = str;
    }
    return square.slice(0,-1);
}

function makeRectangle(width, height){
  let rectangle = '';
  for (let i = 0; i < height; i++){
    rectangle += (makeLine(width)) + '\n';
  }
  return rectangle.slice(0, -1);
}

function makeDownwardStairs(height){
    let angle = '';
    for (let i = 0; i < height; i++){
       angle += makeLine(i + 1) + '\n';
    }
    return angle.slice(0, -1);
}

function makeSpaceLines(numSpaces, numChars){
    gap = '';
    chars = '';
    for (let i = 0; i < numSpaces; i++) {
        gap += ' ';
    }
    for (let j = 0; j < numChars; j++){
      chars += '#';
    }
  return gap + chars + gap;
}

function makeIsoscelesTriangle(height){
  triangle = '';
  for (let i = 0; i < height; i++){
    triangle += (makeSpaceLines(height - i - 1, 2 * i + 1) + '\n');
  }
  return triangle.slice(0, -1);
}

function makeDiamond(height){
  diamond = '';
  for(let i = 0; i < height; i++){

  }

}

function makeDiamond(height){
  triangle = '';
  for (let i = 0; i < height; i++){
    triangle += (makeSpaceLines(height - i - 1, 2 * i + 1) + '\n');
  }
  return triangle + reverse(triangle.slice(0, -1));
}

function reverse(str) {
  let reversed = '';

  for (let i = 0; i < str.length; i++) {
      reversed = str[i] + reversed;
  }

  return reversed;
}