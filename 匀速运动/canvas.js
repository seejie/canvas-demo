(function(){
  const can = document.getElementById('canvas')
  const ball = Ball({
    y: 100,
    y_speed: 0,
    color: 'blue'
  })

  window.requestAnimationFrame(animate(can, ball))
}())
