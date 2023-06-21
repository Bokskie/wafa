
function loginBtn() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    if (username === "") {
      alert("Please enter your login info:\n\n" + "Enter both your username and password");

    } else if (username === "Fiona" || username.toUpperCase() === "FIONA" || username.toLowerCase() === "fiona") {

      if (password === "") {
        alert("No password:\n\n" + "Enter your password");

      } else if (password === "Paderaja") {
        alert("Successfully Login");
        window.location.href = "file:///C:/Users/atlon200ge/Documents/WEB%20DEVELOPMENT/Final%20Project/home.html";

      } else {
        alert("Unsuccessfully Login");
      }

    } else {
      alert("Username does not match");
    }
  }
