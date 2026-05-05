//this function runs and loads properly (tested)
function travelDimension(place) {
  //const portal = document.getElementById("portal");

  //portal.play();

  setTimeout(() => {
    window.location.href = place;
  }, 600);
}

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    travelDimension("/zonatedbootsrealm/index.html")
  }

});
