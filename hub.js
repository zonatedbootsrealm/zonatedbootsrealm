function travelDimension() {
  const portal = document.getElementById("portal")
  document.body.classList.add("fade-out");
  document.getElementById("overlay").style.opacity = "1";
  portal.play()

  setTimeout(() => {
    window.location.href = "games/platformer/game.html";
  }, 601);
}

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    window.location.href = "index.html";
  }

});
