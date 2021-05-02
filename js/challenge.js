document.addEventListener("DOMContentLoaded",()=>{
let counter = document.querySelector('#counter');    
let seconds = 0;
function incrementSeconds() {
    seconds += 1;
    counter.innerText = seconds;
}
const cancel = setInterval(incrementSeconds, 1000);

const minusButton = document.querySelector('#minus');
minusButton.addEventListener("click", () => {
    counter.innerText = --seconds;
    // let counter = document.querySelector('#counter');
    // let counterDecrease= parseInt(counter.innerText);
    // counter.innerText = counterDecrease-1;
})
const plusButton = document.querySelector('#plus');
plusButton.addEventListener("click", () => {
    counter.innerText = ++seconds;
    // let counter = document.querySelector('#counter');
    // let counterIncrease= parseInt(counter.innerText);
    // counter.innerText = counterIncrease+1;
})


const heartButton = document.querySelector('#heart');
heartButton.addEventListener("click", () => {
const likes = document.querySelector('.likes');
const likesMessage = document.createElement('li');
likesMessage.innerText= counter.innerText + " has been liked " + "x"+ " times";
likes.appendChild(likesMessage);
})

const pauseButton = document.querySelector('#pause');
pauseButton.addEventListener("click", function(){
    if (pauseButton.innerText === "pause"){
            pauseButton.textContent = "resume";
            clearInterval(cancel);
            minusButton.disabled = true;
            plusButton.disabled = true;
            heartButton.disabled = true;
    }

    else if (pauseButton.innerText === "resume"){
            pauseButton.textContent = "pause";
            setInterval(incrementSeconds, 1000);
            minusButton.disabled = false;
            plusButton.disabled = false;
            heartButton.disabled = false;
    }
});

const submitButton = document.querySelector('#submit');
submitButton.addEventListener("click", function(e){
e.preventDefault();
const input = document.querySelector('#comment-input');
const commentsList = document.querySelector('#list');
const comments = document.createElement('p');
comments.innerText = input.value;
commentsList.appendChild(comments);
document.getElementById('comment-input').value='';
});

const restartButton = document.querySelector('#restart');
restartButton.addEventListener("click", function(){
    counter.innerText = 0;
    counter = 0;
    let element = document.querySelector('.likes');
    let commentsP = document.querySelector('#list');
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
    while (commentsP.firstChild) {
    commentsP.removeChild(commentsP.firstChild);
    }
   
}); 

})