const counter = document.querySelector('#counter');
const heart = document.querySelector("#heart");
const likes = document.querySelector(".likes");
const plus = document.getElementById('plus');

           
let numberCounter = parseInt(counter.innerText);
let time = setInterval(function(){
    counter.innerText = numberCounter++
}, 1000);



plus.addEventListener('click', function() {
    counter.innerText = numberCounter++; 
})
const minus = document.getElementById('minus');
minus.addEventListener('click', function() {
    counter.innerText = numberCounter -= 1; 
})


//numberCounter  
let lastClickTime =0;
let firstLike = 0;
heart.addEventListener("click", function(){
    console.log("clicked");
    const li = document.createElement("li");
    if(lastClickTime == numberCounter){
        firstLike++;
        li.innerText = `${numberCounter} has been liked ${firstLike} time`;
        likes.appendChild(li);
        lastClickTime = numberCounter;
        console.log(firstLike);
    }else{
        firstLike =1;
        li.innerText = `${numberCounter} has been liked ${firstLike} time`;
        likes.appendChild(li);
        lastClickTime = numberCounter;
        console.log(firstLike);
    }
  });


  ///////////////////////////////////////////////////////
const pause = document.getElementById('pause');

let counterRun;
let counterOn;
pause.addEventListener("click", function (){
    clearInterval(time);
    if (counterOn){
        counterStop ()
        pause.textContent = "resume";
        document.querySelectorAll('button').forEach(element => {element.disabled = true;});
        pause.disabled = false;
    }else{
        counterStart ()
        pause.textContent = "pause";
        document.querySelectorAll('button').forEach(element => {element.disabled = false;}); 
    }
    });



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





  