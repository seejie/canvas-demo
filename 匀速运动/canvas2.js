(function(){
  const can = document.getElementById('canvas2')
  const ball = Ball({
    x: 100,
    x_speed: 0,
    y_speed: 150 / 60,
    color: 'red'
  })

  window.requestAnimationFrame(animate(can, ball))
}())
