function openModal() {
    // Display the modal/floating window
    var modal = document.getElementById("modal");
    modal.style.display = "block";

    // Populate the vote table with the user's vote
    var voteTable = document.getElementById("voteTable");
    voteTable.innerHTML = "";

    // Get the data from the dataTable and add it to the voteTable
    var dataTable = document.getElementById("dataTable");
    var dataRows = dataTable.getElementsByTagName("tr");

    // Skip the first row (header row)
    for (var i = 1; i < dataRows.length; i++) {
      var rowData = dataRows[i].getElementsByTagName("td");
      var position = rowData[0].textContent;
      var candidate = rowData[1].textContent;
      var partyList = rowData[2].textContent;

      var voteRow = voteTable.insertRow();
      var positionCell = voteRow.insertCell();
      var candidateCell = voteRow.insertCell();
      var partyListCell = voteRow.insertCell();

      positionCell.textContent = position;
      candidateCell.textContent = candidate;
      partyListCell.textContent = partyList;
    }
  }

  function closeModal() {
    // Hide the modal/floating window
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }