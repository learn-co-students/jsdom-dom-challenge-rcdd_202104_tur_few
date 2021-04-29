document.addEventListener("DOMContentLoaded", event => {
  const h1 = document.querySelector("#counter");
  const minus = document.querySelector("#minus");
  const plus = document.querySelector("#plus");
  const pause = document.querySelector("#pause");
  const heart = document.querySelector("#heart");
  const ul = document.querySelector(".likes");
  const commentForm = document.querySelector("#comment-form");
  const comments = document.querySelector(".comments");
  const commentsInput = document.querySelector("#comment-input");

  let intervId = interval(h1);
  let paused = 0;

  minus.addEventListener("click", () => {
    h1.innerText = parseInt(h1.innerText) - 1;
  });

  plus.addEventListener("click", () => {
    h1.innerText = parseInt(h1.innerText) + 1;
  });

  heart.addEventListener("click", () => {
    const liExist = document.getElementById(h1.innerText);

    if (liExist) {
      const num = parseInt(document.getElementById(h1.innerText).className) + 1;
      const str = parseInt(h1.innerText) + " has been liked " + num + " time ";
      liExist.className = num;
      liExist.innerText = str;
    } else {
      const str = parseInt(h1.innerText) + " has been liked 1 time ";
      const li = document.createElement("li");
      li.id = h1.innerText;
      li.className = "1";
      li.innerText = str;
      ul.appendChild(li);
    }
  });

  pause.addEventListener("click", () => {
    if (!paused) {
      clearInterval(intervId);
      plus.disabled = true;
      minus.disabled = true;
      heart.disabled = true;
      pause.innerText = "resume";
      paused = 1;
    } else {
      intervId = interval(h1);
      plus.disabled = false;
      minus.disabled = false;
      heart.disabled = false;
      pause.innerText = "pause";
      paused = 0;
    }
  });

  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const p = document.createElement("p");
    p.innerText = commentsInput.value;
    comments.appendChild(p);
    commentsInput.value = "";
  });
});
function interval(h1) {
  return setInterval(() => {
    h1.innerText = parseInt(h1.innerText) + 1;
  }, 1000);
}
