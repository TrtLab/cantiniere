let button = document.querySelector("button");
let span = document.getElementsByClassName("close")[0];

button.addEventListener("click", function() {
  let id = this.id;
  let btnActiver = document.getElementById(id);

  switch (id){
    case "crediter":
    console.log("dans la case crediter");
      let modalCrediter = document.getElementById("modalCrediter");
      btnActiver.onclick = function() {
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
      break;

      case "solder":
      console.log("dans la case solder");
      let modalSolder = document.getElementById("modalSolder");
      btnActiver.onclick = function() {
        modalSolder.style.display = "block";
      }

      span.onclick = function() {
        modalSolder.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modalSolder) {
          modalSolder.style.display = "none";
        }
      }
        break;

        default:
        console.log("default switch");
  }
});
