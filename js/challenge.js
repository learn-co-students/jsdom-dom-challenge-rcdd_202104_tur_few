// challenge 1
const number = document.getElementById('counter');
let numberCounter = parseInt(number.innerText);
let time = setInterval(function(){
    number.innerText = numberCounter++
}, 1000);

// challenge 2
const plus = document.getElementById('plus');
plus.addEventListener('click', function() {
    number.innerText = numberCounter++; 
})
const minus = document.getElementById('minus');
minus.addEventListener('click', function() {
    number.innerText = numberCounter -= 1; 
})


// challenge 3
const heart = document.getElementById("heart")
const likes = document.querySelector(".likes")
heart.addEventListener("click", function(){
    console.log("clicked");
    const li = document.createElement("li")
    li.innerText = `${numberCounter} has been liked 1 time`
    likes.appendChild(li)
  })
  

// Challenge 4
  

const pause = document.getElementById('pause');
let counterRun;
let counterOn;

function counterStart (){
    counterRun = setInterval(counterIncrement, 1000);
    counterOn = true;
}

function counterStop (){
    clearInterval(counterRun);
    counterOn = false; 
}

function counterIncrement (){
    let counterInt = parseInt(counter.textContent);
    counterInt++;    
    strCounter(counterInt);
}

function strCounter(number){
    let counterStr = String(number);
    counter.textContent = counterStr;
}


// pause.addEventListener('click', function(e){
//     e.target.innerText = "resume";
//     clearInterval(time);
//     plus.stopPropagation();
//     minus.preventDefault();
//     likes.preventDefault();
//     e.clearInterval(pause);
// })

pause.addEventListener("click", function (){
    clearInterval(time);
    if (counterOn){
        counterStop ()
        pause.textContent = "resume";
        document.querySelectorAll('button').forEach(elem => { //selects all button elements and disables them
            elem.disabled = true;
        });
        pause.disabled = false; //enables pause
    }else{
        counterStart ()
        pause.textContent = "pause";
        document.querySelectorAll('button').forEach(elem => { //selects all button elements and enables them
            elem.disabled = false;
        }); 
    }
    });