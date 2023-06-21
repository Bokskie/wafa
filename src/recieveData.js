const candidatesData = localStorage.getItem("candidatesData");
if (candidatesData) {
  const candidatesVicePresident = document.getElementById("candidatesVicePresident");
  candidatesVicePresident.innerHTML = candidatesData;

}
