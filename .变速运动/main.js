const Ball = options => {
  const {
    x = 10,
    y = 10,
    r = 10,
    color = 'black',
    x_direction = 'right',
    y_direction = 'top',
    x_speed = 100 / 60,
    y_speed = 100 / 60
  } = options
  
  return {
    x,
    y,
    r,
    color,
    x_direction,
    y_direction,
    x_speed,
    y_speed
  }
}

const redraw = (can, ball) => {
  const ctx = can.getContext('2d')
  ctx.clearRect(0, 0, can.width, can.height)
  ctx.beginPath()
  // x、y、半径、起始角、结束角、方向
  // 始末角弧度制，0度起始角默认时钟3点钟位置，true逆时针、false顺时针
  ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI, true)
  ctx.fillStyle = ball.color
  ctx.fill()
}

// 匀速运动: S = v * t
// 匀变速运动: 
// 加速度 a = (v末 - v0) / t
// 瞬时速度 v瞬 = v0 + at
// 平均速度 v匀 = (v0 + v瞬) / 2 = (v0 + v0 + at) / 2 = v0 + at / 2
// 位移 S = v匀 * t = (v0 + at / 2) * t = v0t + att / 2
const not_uniform_motion = (can, ball) => {
  ball.x += ball.x_speed * (ball.x_direction === 'right' ? 1 : -1)
  ball.x_direction = ball.x <= 0 ? 'right' : ball.x >= can.width ? 'left' : ball.x_direction

  ball.y += ball.y_speed * (ball.y_direction === 'bottom' ? 1 : -1)
  ball.y_direction = ball.y <= 0 ? 'bottom' : ball.y >= can.height ? 'top' : ball.y_direction
}

const animate = (can, ball) => {
  return () => {
    redraw(can, ball)
    not_uniform_motion(can, ball)
    window.requestAnimationFrame(animate(can, ball))
  }
}
