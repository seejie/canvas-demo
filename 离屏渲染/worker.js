var offscreen = null,ctx,circle;
onmessage = function (e) {
    var data = e.data;
    if(data.msg == 'start'){
      offscreen = data.canvas;
      ctx = offscreen.getContext('2d');
      circle = new Circle(ctx);
      circle.animate();
    } else if (data.msg == 'changeColor' && circle) {
      circle.changeColor();
    }
}

function fibonacci(num) {
  return (num <= 1) ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
}

class Circle {
  constructor(ctx) {
    this.ctx = ctx;
    this.r = 0;
    this.rMax = 50;
    this.color = 'black';
    this.bindAnimate = this.animate.bind(this);
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.ctx.canvas.width / 2, this.ctx.canvas.height / 2, this.r, 0, Math.PI * 2);
    this.ctx.fill();
  }

  animate() {

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.r = this.r + 1;
    if (this.r > this.rMax) {
      this.r = 0;
    }
    this.draw();
    requestAnimationFrame(this.bindAnimate);
  }

  changeColor() {
    fibonacci(41);
    if (this.color == 'black') {
      this.color = 'blue';
    } else {
      this.color = 'black';
    }
    this.r = 0;
  }
}