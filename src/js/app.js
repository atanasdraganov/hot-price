import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let hotEls = document.querySelectorAll(".hot");
  for(let i=0; i<hotEls.length; i++){
    hotEls[i].innerHTML += " 🔥";
  }
});
