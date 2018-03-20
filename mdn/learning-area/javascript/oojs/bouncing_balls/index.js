// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

//构造函数
function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}

function Ball(x, y, velX, velY, color, size, exists) {
    Shape.call(this, x, y, velX, velY, exists);
    this.color = color;
    this.size = size;
}

//绘制
Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

//更新数据
Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}

//撞击检测
Ball.prototype.collisionDetect = function() {
    for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
            }
        }
    }
}

function EvilCircle(x, y, exists) {
    Shape.call(this, x, y, exists);
    this.color = "white";
    this.size = 10;
    this.velX = 20;
    this.vely = 20;
}

EvilCircle.prototype.draw = function() {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
}

EvilCircle.prototype.checkBounds = function() {
    if ((this.x + this.size) >= width) {
        this.x -= this.x + this.size - width;
    }

    if ((this.x - this.size) <= 0) {
        this.x += this.size - this.x;
    }

    if ((this.y + this.size) >= height) {
        this.y -= this.y + this.size - height;
    }

    if ((this.y - this.size) <= 0) {
        this.y += this.size - this.y;
    }
}

EvilCircle.prototype.setControls = function() {
    var _this = this;
    window.onkeydown = function(e) {
        if (e.keyCode === 65) {
            _this.x -= _this.velX;
        } else if (e.keyCode === 68) {
            _this.x += _this.velX;
        } else if (e.keyCode === 87) {
            _this.y -= _this.velY;
        } else if (e.keyCode === 83) {
            _this.y += _this.velY;
        }
    }
}

//撞击检测
EvilCircle.prototype.collisionDetect = function() {
    for (var j = 0; j < balls.length; j++) {
        if (balls[j].exists === true) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].exists = false;
            }
        }

    }
}



//动起来
var balls = [];

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    var evilCircle = new EvilCircle(500, 600, true);

    evilCircle.setControls();

    while (balls.length < 25) {
        var ball = new Ball(
            random(0, width),
            random(0, height),
            random(-7, 7),
            random(-7, 7),
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            random(10, 20),
            true
        );
        balls.push(ball);
    }

    var length = 0;

    for (var i = 0; i < balls.length; i++) {

        if (balls[i].exists === true) {
            length++;
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        }
        evilCircle.draw();
        evilCircle.checkBounds();
        evilCircle.collisionDetect();
    }
    document.getElementsByTagName("p")[0].textContent = "ball count:" + length;

    requestAnimationFrame(loop);
}

loop();