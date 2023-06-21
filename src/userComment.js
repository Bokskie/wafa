var comments = JSON.parse(localStorage.getItem('comments')) || [];

    function submitComment() {
      var commentText = document.getElementById("commentText").value;

      if (commentText.trim() !== "") {
        var comment = {
          author: "Princess Fiona",
          text: commentText,
          reply: ""
        };

        comments.push(comment);
        displayComments();

        document.getElementById("commentText").value = "";
        localStorage.setItem('comments', JSON.stringify(comments));
      }
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

        commentDiv.appendChild(authorPara);
        commentDiv.appendChild(textPara);
        commentDiv.appendChild(replyPara);

        commentContainer.appendChild(commentDiv);
      }
    }

    displayComments();