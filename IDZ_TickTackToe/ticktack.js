var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();
var p = document.getElementById('winner');
var but = document.getElementById('but');
var tab = document.getElementById('tab')

var size = canvas.width / 3;
var x,y;
var arr = [[0,0,0],[0,0,0],[0,0,0]];
var turn = 1;
var enable = true;
var txt = "Winner is ";
var result = "";
var match = 0;

function getPos() {
  if (enable) {

    x = window.event.clientX - rect.left - scrollX;
    y = window.event.clientY - rect.top + scrollY;

    console.log(x, y);
    step(x,y)
    if (turn == 10 && enable == true) {
      enable = false;
      p.innerHTML = "Draw";
      but.style.display = "inline";
      result = "Draw";
      addRow()
      match +=1;
    }

    console.log(historyArr);
  }
};

function addRow() {

  var newRow = tab.insertRow(match+1);
  var newCell1 = newRow.insertCell(0);
  var newText1 = document.createTextNode(match);
  var newCell2 = newRow.insertCell(1);
  var newText2 = document.createTextNode(result);

  newCell1.appendChild(newText1);
  newCell2.appendChild(newText2);
}

function step(x,y) {

  var i = Math.floor(3 * x / 500);
  var j = Math.floor(3 * y / 500);

  if (turn % 2 != 0 && arr[j][i] == 0) {
    p.innerHTML = "O turn";
    arr[j][i] = 1;
    turn +=1;
  }
  if (turn % 2 == 0 && arr[j][i] == 0) {
    p.innerHTML = "X turn";
    arr[j][i] = 2;
    turn +=1;
  }
  show();
  grid()
  if (win()) {
    enable = false;
    if (turn % 2 == 0) {
      txt = txt + "X";
      result = "X";
      addRow()
      match +=1;
    }else {
      txt = txt + "O";
      result = "O";
      addRow()
      match +=1;
    }

    p.innerHTML = txt;
    but.style.display = "inline";

  }
}

function highlight(min1, max1, min2, max2) {
  c.strokeStyle = 'yellow';

  for (var l = min1; l < max1; l++) {
    for (var m = min2; m < max2; m++) {
      console.log(l, m);
      c.strokeRect(l*size, m*size, size, size);
    }
  }

}

function win() {
  for (var y = 0; y < 3; y++) {
    for (var x = 0; x < 3; x++) {

      //rows
      if (arr[y][0] == arr[y][1] && arr[y][1] == arr[y][2] && arr[y][2] != 0) {
        highlight(0,3,y,y+1);
        return true;
      }

      //cols
      if (arr[0][x] == arr[1][x] && arr[1][x] == arr[2][x] && arr[2][x] != 0) {
        highlight(x,x+1,0,3);
        return true;
      }

      if (x == y) {
        //diag
        if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[2][2] != 0 ) {
          c.strokeStyle = 'yellow';
          c.strokeRect(0,0, size, size);
          c.strokeRect(size,size, size, size);
          c.strokeRect(2*size,2*size, size, size);
          return true;
        }

        //anti_diag
        if (arr[2][0] == arr[1][1] && arr[1][1] == arr[0][2] && arr[0][2] != 0 ) {
          c.strokeStyle = 'yellow';
          c.strokeRect(2*size,0, size, size);
          c.strokeRect(size,size, size, size);
          c.strokeRect(0,2*size, size, size);
          return true;
        }
      }

    }
  }
  return false;
}


function line(x1, y1, x2, y2, w) {
  c.beginPath();
  c.lineWidth = w;
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.stroke();
};

function circle(x,y) {
  c.beginPath();
  c.lineWidth = 6;
  c.arc(x+size/2, y+size/2, size/2, 0, 2 * Math.PI);
  c.stroke();
}

function cross(x,y,w) {
  line(x,y,x+size,y+size,w);
  line(x+size,y,x,y+size,w);
}

function grid() {
  c.strokeStyle = 'white';
  line(size, 0, size, 500, 6);
  line(size*2, 0, size*2, 500, 6);
  line(0, size, 500, size, 6);
  line(0, size*2, 500, size*2, 6);
}

function clear() {
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);
}

function reset() {
  clear();
  arr = [[0,0,0],[0,0,0],[0,0,0]];
  turn = 1;
  txt = "Winner is ";
  p.innerHTML = "X turn";
  but.style.display = "none";
  show();
  grid();
  enable = true;
}

function blank(x,y) {
  c.fillStyle = 'black';
  c.fillRect(x,y, size, size);
}

function show() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {

      if (arr[j][i] == 1) {
        cross(i*size,j*size,6);
      }else if (arr[j][i] == 2) {
        circle(i*size,j*size,6);
      }else {
        blank(i*size,j*size);
      }

    }
  }
}


  c.strokeStyle = 'white';
  show();
  grid();
