(function(){
  const can = document.getElementById('canvas4')
  const ball = Ball({
    y_speed: 180 / 60,
    x_speed: 120 / 60,
  })

  window.requestAnimationFrame(animate(can, ball))
}())
