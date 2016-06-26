(function(){
  var face = document.getElementById("face");
  var angle = 0;
  var lastTime = null;

  function animate(time) {
    angle += (time - lastTime) * 0.0025;
    lastTime = time;
    face.style.top = (Math.sin(angle) * 30) + "px";
    face.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})()
