const commentContainer = document.querySelector(".comment-container");

function createInputBox(params) {
  let div = document.querySelector(".input-box");

  div.innerHTML += `
  <input type="text" name="text" class="input" />
  <button class="button submit">Comment</button>
  `;

  return div;
}

function commentDetails(text) {
  let div = document.querySelector(".comment-details");
  div.innerHTML += `
  <h1 class="text">${text}</h1>
  <button class="reply">comment now</button>
  `;
}
commentContainer.addEventListener("click", (e) => {
  let replyBtn = e.target.classList.contains("reply");
  let submitBtn = e.target.classList.contains("submit");
  let allCommentCont = document.querySelector(".all-comment");
  if (replyBtn) {
    // add comment details
    allCommentCont.appendChild(createInputBox());
  }
  if (submitBtn) {
    // add input box
    allCommentCont.appendChild(commentDetails());
  }
});
