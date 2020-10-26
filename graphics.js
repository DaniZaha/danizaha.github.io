var canvas;
var c;
var r = 0, g = 0, b = 0;
var size = 1;
var w;
var mouseX = 0, mouseY = 0;
function pos2D(x = 0, y = 0) {
	this.x = x;
	this.y = y;
	this.add = function(obj) {
		var out = new pos2D();
		out.x= this.x + obj.x;
		out.y= this.y + obj.y;
		return out;
	}

	this.sub = function(obj) {
		var out = new pos2D();
		out.x= this.x - obj.x;
		out.y= this.y - obj.y;
		return out;
	}

	this.mult = function(obj) {
		var out = new pos2D();
		out.x= this.x * obj.x;
		out.y= this.y * obj.y;
		return out;
	}

	this.multn = function (num) {
		var out = new pos2D();
		out.x= this.x * num;
		out.y= this.y * num;
		return out;
	}

	this.div = function(obj) {
		var out = new pos2D();
		out.x= this.x / obj.x;
		out.y= this.y / obj.y;
		return out;
	}

	this.rand = function(maxX, maxY) {
		this.x = Math.floor(Math.random() * Math.floor(maxX));
		this.x = Math.floor(Math.random() * Math.floor(maxY));
	}

	this.lim = function (num) {
		if (this.x >= num) {
			this.x = num;
		}

		if (this.y >= num) {
			this.y = num;
		}

		if (this.x <= num * -1) {
			this.x = num * -1;
		}
		if (this.y <= num * -1) {
			this.y = num * -1;
		}

	}

	this.norm = function(max, min) {
		var out = new pos2D();
		out.x = (this.x - min) / (max - min);
		out.y = (this.y - min) / (max - min);
		return out;
	}


}
var x=0, y=0;
var proj = new pos2D(0,0);
var targ = new pos2D(200,300);
var vel = new pos2D(1,1);
var limvel = new pos2D();

window.onload = function() {
Draw();
console.log(proj.add(targ));

};

function Draw() {
	   // Определение контекста рисования
	   canvas = document.getElementById("canvas");
	   c = canvas.getContext("2d");

     w =  canvas.width / size;
     var mw = w-1;

     c.fillStyle = 'black';
     c.fillRect(0, 0, canvas.width, canvas.height);

		 c.fillStyle = 'white';
		 c.fillRect(proj.x, proj.y, 10, 10);
		 c.fillRect(targ.x, targ.y, 10, 10);
		   vel = targ.sub(proj).div(targ);
			 vel = vel.add(vel);
		   proj = proj.add(vel);


     // Обновляем холст через 0.02 секунды
	   setTimeout("Draw()", 50);
};

function showCoords(event) {
  targ.x = event.clientX - 9 ;
  targ.y = event.clientY - 9 ;
  Draw();
}


function line(x1, y1, x2, y2, w) {
  c.beginPath();
  c.lineWidth = w;
  c.moveTo(x1, y1);    // Рередвигает перо в точку (30, 50)
  c.lineTo(x2, y2);
  c.stroke();
};
