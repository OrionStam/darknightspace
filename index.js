const el = document.getElementsByClassName("home-banner_parallax")[0];
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  //0.5 can be whatever you want it will adjust how far / fast the image appears to scroll
  el.style.backgroundPositionY = `${offset * 0.5}px`;
});