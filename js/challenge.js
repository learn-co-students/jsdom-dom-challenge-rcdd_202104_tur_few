const counter = document.querySelector("#counter");
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const pauseButton = document.querySelector("#pause");

const heartButton = document.querySelector("#heart");
const likesUl = document.querySelector(".likes");

const commentForm = document.querySelector("#comment-form");
const commentInput = document.querySelector("#comment-input");


// timer stuff

let time = parseInt(counter.innerText);

let clock = setInterval(function () {
    counter.innerText = time ++;
    
}, 1000);

plusButton.addEventListener("click", function() {
    counter.innerText = time ++;
})

minusButton.addEventListener("click", function () {
    counter.innerText = time --;
})

//---------------------------------------------------
// doesnt work properly

let likesCount = 0;
let timeTracker = 0;
heartButton.addEventListener("click", function() {
    const li = document.createElement("li")
    if(timeTracker === time) {
        timeTracker ++;
        li.innerText = `${time} has been liked ${likesCount} times`;
        likesUl.appendChild(li);
        timeTracker = time;
    }
    else {
        likesCount = 1;
        li.innerText = `${time} has been liked ${likesCount} times`;
        likesUl.appendChild(li);
        timeTracker = time;
    }   
});

//--------------------------------------------------

let interval = interval(counter);
let paused = false;
pause.addEventListener("click", function () {
    if(!paused) {
        clearInterval(interval);
        plusButton.disabled = true;
        minusButton.disabled = true;
        heartButton.disabled = true;
        pauseButton.disabled = true;
        pauseButton.innerText = "resume";
        paused = false;
    }
    else {
        interval = interval(time);
        plusButton.disabled = false;
        minusButton.disabled = false;
        heartButton.disabled = false;
        pauseButton.disabled = false;
        pauseButton.innerText = "pause";
        paused = true;
    }
})

commentForm.addEventListener("submit", function(e) {
    e.stopImmediatePropagation();
    const comment = document.createElement("p");
    comment.innerText = commentInput.nodeValue;
    commentForm.appendChild(comment);
    commentForm.value="";
})