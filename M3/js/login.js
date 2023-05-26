let button = document.getElementById("logining");

button.addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email === "farahnagy") {
    if (password === "farahnagy") {
      window.location.href = "adminH.html";
    } else {
      alert("incorrect password");
    }
  } else if (email === "lailagohar") {
    if (password === "lailagohar") {
      window.location.href = "bankerH.html";
    } else {
      alert("incorrect password");
    }
  } else if (email === "mariamiten") {
    if (password === "mariamiten") {
      window.location.href = "clientH.html";
    } else {
      alert("incorrect password");
    }
  } else if (email === "" || password === "") {
    alert("please enter your info");
  } else {
    alert("incorrect email/not found");
  }
  document.getElementById("email").value = "";
});

let link = document.getElementById("forget");

link.addEventListener("click", function () {
  prompt("please enter recovery email", "recovery email");
  alert("you will recieve an email shortly");
});
