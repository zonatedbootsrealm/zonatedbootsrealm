//this function runs and loads properly (tested)
function travelDimension(place) {
  //const portal = document.getElementById("portal");

  //portal.play();

  setTimeout(() => {
    window.location.href = place;
  }, 5);
}

function SaveStuffPlatformer() {
  localStorage.setItem("playerX", player.x)
  localStorage.setItem("playerY", player.y)
  localStorage.setItem("cameraX", camera.x)
  localStorage.setItem("cameraY", camera.y)
}

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    SaveStuffPlatformer()
    travelDimension("/zonatedbootsrealm/index.html")
  }

});
