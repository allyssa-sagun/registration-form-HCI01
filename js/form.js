function showhidepassword() {
  var x = document.getElementById("passinput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function showhiderepassword() {
  var x = document.getElementById("repassinput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
