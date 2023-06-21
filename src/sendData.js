document.addEventListener("DOMContentLoaded", () => {
    const candidatesContainer = document.getElementById("candidatesContainer");

    function updateCandidate(candidateElement) {
      const label = candidateElement.querySelector("label");
      const input = candidateElement.querySelector("input");

      const updatedLabel = prompt("Enter new candidate name:", label.textContent);
      if (updatedLabel !== null) {
        label.textContent = updatedLabel;
      }

      const updatedValue = prompt("Enter new candidate value:", input.value);
      if (updatedValue !== null) {
        input.value = updatedValue;
      }

      saveCandidatesData();
    }

    function deleteCandidate(candidateElement) {
      candidateElement.remove();
      saveCandidatesData();
    }

    function addCandidate() {
      const newCandidateElement = document.createElement("div");
      newCandidateElement.classList.add("candidate");

      const newLabelElement = document.createElement("label");
      const newLabel = prompt("Enter candidate name:");
      if (newLabel !== null) {
        newLabelElement.textContent = newLabel;
      }
      newCandidateElement.appendChild(newLabelElement);

      const newInputElement = document.createElement("input");
      newInputElement.type = "checkbox";
      newInputElement.classList.add("candidateCheckbox");
      const newValue = prompt("Enter candidate value:");
      if (newValue !== null) {
        newInputElement.value = newValue;
      }
      newCandidateElement.appendChild(newInputElement);

      const updateButton = document.createElement("button");
      updateButton.textContent = "Update";
      updateButton.addEventListener("click", () => updateCandidate(newCandidateElement));
      newCandidateElement.appendChild(updateButton);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteCandidate(newCandidateElement));
      newCandidateElement.appendChild(deleteButton);

      candidatesContainer.appendChild(newCandidateElement);

      saveCandidatesData();
    }

    function saveCandidatesData() {
      const candidatesData = candidatesContainer.innerHTML;
      localStorage.setItem("candidatesData", candidatesData);
    }

    const addButton = document.getElementById("addButton");
    addButton.addEventListener("click", addCandidate);
  });