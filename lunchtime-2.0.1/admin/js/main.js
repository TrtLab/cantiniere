let crediter = document.getElementById("crediter");
let solder = document.getElementById("solder");
let button = document.querySelector("button");
let modalCrediter = document.getElementById("modalCrediter");
let span = document.getElementsByClassName("close")[0];

button.addEventListener("click", function() {
  let id = this.id;
  id.onclick = function() {
    modalCrediter.style.display = "block";
  }

  span.onclick = function() {
    modalCrediter.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modalCrediter) {
      modalCrediter.style.display = "none";
    }
  }
});
