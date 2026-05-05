//this function runs and loads properly (tested)
function travelDimension(place) {
  const portal = document.getElementById("portal");

  portal.play();

  window.location.href = place;
}

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    travelDimension("/zonatedbootsrealm/index.html")
  }

});
