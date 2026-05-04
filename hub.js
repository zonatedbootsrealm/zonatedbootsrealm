function travelDimension(place) {
  console.log("function works");
  const portal = document.getElementById("portal")
  document.body.classList.add("fade-out");
  document.getElementById("overlay").style.opacity = "1";
  portal.play()

  setTimeout(() => {
    window.location.href = place;
  }, 601);
}

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    travelDimension("index.html")
  }

});
