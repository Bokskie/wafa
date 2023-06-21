/*
function submitVotes() {
    var positions = document.getElementsByClassName("position");
    var tableData = JSON.parse(localStorage.getItem("tableData")) || [];

    for (var i = 0; i < positions.length; i++) {
      var positionElement = positions[i];
      var position = positionElement.querySelector("h4").textContent;

      var candidates = positionElement.getElementsByClassName("candidate");
      for (var j = 0; j < candidates.length; j++) {
        var candidateElement = candidates[j];
        var checkbox = candidateElement.querySelector(".candidateCheckbox");
        var candidateName = candidateElement.querySelector("label").textContent;

        if (checkbox.checked) {
          tableData.push({ position: position, candidate: candidateName });
        }
      }
    }

    localStorage.setItem("tableData", JSON.stringify(tableData));
    displayTable();
  }

  function displayTable() {
    var tableData = JSON.parse(localStorage.getItem("tableData")) || [];

    var table = document.getElementById("dataTable");
    table.innerHTML = "";

    var headerRow = table.insertRow(0);
    var positionHeader = headerRow.insertCell(0);
    positionHeader.innerHTML = "Position";
    var candidateHeader = headerRow.insertCell(1);
    candidateHeader.innerHTML = "Candidate";
    var actionsHeader = headerRow.insertCell(2);
    actionsHeader.innerHTML = "Actions";

    for (var i = 0; i < tableData.length; i++) {
      var dataRow = table.insertRow(i + 1);
      var positionCell = dataRow.insertCell(0);
      positionCell.innerHTML = tableData[i].position;
      var candidateCell = dataRow.insertCell(1);
      candidateCell.innerHTML = tableData[i].candidate;
      var actionsCell = dataRow.insertCell(2);
      actionsCell.innerHTML = createActionsButtons(i);
    }
  }

  function createActionsButtons(index) {
    var editButton = '<button onclick="editRow(' + index + ')">Edit</button>';
    var deleteButton = '<button onclick="deleteRow(' + index + ')">Delete</button>';
    return editButton + ' ' + deleteButton;
  }

  function editRow(index) {
    var tableData = JSON.parse(localStorage.getItem("tableData")) || [];
    var editedData = prompt("Enter the edited data:", tableData[index].candidate);
    if (editedData !== null) {
      tableData[index].candidate = editedData;
      localStorage.setItem("tableData", JSON.stringify(tableData));
      displayTable();
    }
  }

  function deleteRow(index) {
    var tableData = JSON.parse(localStorage.getItem("tableData")) || [];
    tableData.splice(index, 1);
    localStorage.setItem("tableData", JSON.stringify(tableData));
    displayTable();
  }

  displayTable();

*/

var votes = [];

function submitVotes() {
  var checkboxes = document.getElementsByClassName("candidateCheckbox");
  var selectedVotes = [];

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];

    if (checkbox.checked) {
      var candidateRow = checkbox.parentNode.parentNode;
      var position = candidateRow.cells[0].textContent;
      var name = candidateRow.cells[1].textContent;
      var team = candidateRow.cells[2].textContent;

      selectedVotes.push({ position: position, name: name, team: team });
    }
  }

  if (selectedVotes.length > 0) {
    votes = selectedVotes;
    displayVoteResults();
    sendVotesToAdmin();
  }
}

function displayVoteResults() {
  var voteResultsDiv = document.getElementById("voteResults");
  var voteResultsBody = document.getElementById("voteResultsBody");
  voteResultsBody.innerHTML = "";

  for (var i = 0; i < votes.length; i++) {
    var vote = votes[i];
    var row = voteResultsBody.insertRow();
    var positionCell = row.insertCell();
    var nameCell = row.insertCell();
    var teamCell = row.insertCell();
    var actionCell = row.insertCell();

    positionCell.textContent = vote.position;
    nameCell.textContent = vote.name;
    teamCell.textContent = vote.team;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.addEventListener("click", function() {
      deleteVote(this);
    });
    actionCell.appendChild(deleteButton);

    
  }

  voteResultsDiv.style.display = "block";
}

function deleteVote(button) {
  var row = button.parentNode.parentNode;
  var position = row.cells[0].textContent;
  var name = row.cells[1].textContent;
  var team = row.cells[2].textContent;

  for (var i = 0; i < votes.length; i++) {
    var vote = votes[i];
    if (vote.position === position && vote.name === name && vote.team === team) {
      votes.splice(i, 1);
      break;
    }
  }

  row.parentNode.removeChild(row);
  sendVotesToAdmin();
}

function editVote(button) {
  var row = button.parentNode.parentNode;
  var position = row.cells[0].textContent;
  var name = row.cells[1].textContent;
  var team = row.cells[2].textContent;

  for (var i = 0; i < votes.length; i++) {
    var vote = votes[i];
    if (vote.position === position && vote.name === name && vote.team === team) {
      var checkboxes = document.getElementsByClassName("candidateCheckbox");

      for (var j = 0; j < checkboxes.length; j++) {
        var checkbox = checkboxes[j];
        if (
          checkbox.value ===
          `${vote.position.toLowerCase()}_${vote.name.toLowerCase().replace(" ", "_")}`
        ) {
          checkbox.checked = true;
          break;
        }
      }
    }
  }
}

function sendVotesToAdmin() {
  localStorage.setItem("votes", JSON.stringify(votes));
}


function finish(){
  window.location.href = "home.html";
}