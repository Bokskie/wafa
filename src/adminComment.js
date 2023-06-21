var comments = JSON.parse(localStorage.getItem('comments')) || [];

    function submitReply() {
      var replyText = document.getElementById("replyText").value;

      if (replyText.trim() !== "") {
        var commentIndex = comments.length - 1;

        if (commentIndex >= 0) {
          comments[commentIndex].reply = replyText;
          displayComments();

          document.getElementById("replyText").value = "";
          localStorage.setItem('comments', JSON.stringify(comments));
        }
      }
    }

    function deleteComment(index) {
      comments.splice(index, 1);
      displayComments();
      localStorage.setItem('comments', JSON.stringify(comments));
    }

    function displayComments() {
      var commentContainer = document.getElementById("commentContainer");
      commentContainer.innerHTML = "";

      for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        var commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");

        var authorPara = document.createElement("h2");
        authorPara.classList.add("author");
        authorPara.textContent = comment.author + ":";

        var textPara = document.createElement("p");
        textPara.textContent = comment.text;

        var replyPara = document.createElement("h1");
        replyPara.textContent = "Reply: " + comment.reply;

        var deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", (function(index) {
          return function() {
            deleteComment(index);
          }
        })(i));

        commentDiv.appendChild(authorPara);
        commentDiv.appendChild(textPara);
        commentDiv.appendChild(replyPara);
        commentDiv.appendChild(deleteButton);

        commentContainer.appendChild(commentDiv);
      }
    }

    displayComments();