

function displayAdminVotes() {
  var adminVotesTableBody = document.getElementById("adminVotesTableBody");
  adminVotesTableBody.innerHTML = "";

  var votes = JSON.parse(localStorage.getItem("votes"));

  if (votes && votes.length > 0) {
    for (var i = 0; i < votes.length; i++) {
      var vote = votes[i];
      var row = adminVotesTableBody.insertRow();
      var positionCell = row.insertCell();
      var nameCell = row.insertCell();
      var teamCell = row.insertCell();

      positionCell.textContent = vote.position;
      nameCell.textContent = vote.name;
      teamCell.textContent = vote.team;
    }
  }
}

displayAdminVotes();



/*---------COUNT ON TABLE DATA--------------------*/


function displayAdminVotes() {
  var adminVotesTableBody = document.getElementById("adminVotesTableBody");
  adminVotesTableBody.innerHTML = "";

  var votes = JSON.parse(localStorage.getItem("votes"));

  if (votes && votes.length > 0) {
    for (var i = 0; i < votes.length; i++) {
      var vote = votes[i];
      var row = adminVotesTableBody.insertRow();
      var positionCell = row.insertCell();
      var nameCell = row.insertCell();
      var teamCell = row.insertCell();

      positionCell.textContent = vote.position;
      nameCell.textContent = vote.name;
      teamCell.textContent = vote.team;
    }
  }
}

function countDataRows() {
  var table = document.getElementById("adminVotesTable");
  var rowCount = table.rows.length - 1; // Subtracting 1 to exclude the table header row
  return rowCount;
}

function displayDataCount() {
  var dataCountElement = document.getElementById("dataCount");
  var count = countDataRows();
  dataCountElement.textContent = "Total Votes: " + count;
}

displayAdminVotes();
displayDataCount();