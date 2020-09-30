(function(){
  const can = document.getElementById('canvas3')
  const ball = Ball({
    color: 'green'
  })

  window.requestAnimationFrame(animate(can, ball))
}())
