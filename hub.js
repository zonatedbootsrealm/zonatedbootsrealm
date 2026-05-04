function travelDimension() {
  const portal = document.getElementById("portal")
  document.body.classList.add("fade-out");
  document.getElementById("overlay").style.opacity = "1";
  portal.play()

  setTimeout(() => {
    window.location.href = "games/platformer/game.html";
  }, 601);
}

let keys = {}


document.addEventListener("keydown", function(event) {

    keys[event.key] = true

})

if (keys[esc]) {}
