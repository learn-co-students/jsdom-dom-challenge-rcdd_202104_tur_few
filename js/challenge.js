let i = 0;
let second = 0;
let counterH1 = document.getElementById("counter");
function timer() {
    if (second !== "stop") {
        setTimeout(function() { 
            counterH1.innerText = second;
            second++;   
            i--;        
            if (i < 1) {
              timer(); 
            }           
        }, 1000)
    }
    if(second === "stop") {return}
}
  
timer();

let plusButton = document.getElementById("plus");
plusButton.addEventListener("click", () => {
    second = second + 1
    counterH1.innerText = second;
})

let minusButton = document.getElementById("minus");
minusButton.addEventListener("click", () => {
    second = second - 1
    counterH1.innerText = second;
})

let likesUl = document.getElementById("likes")
let heartButton = document.getElementById("heart");
heartButton.addEventListener("click", () => {
    if (likesUl.children.length !== 0 && likesUl.children[likesUl.children.length - 1].innerText === `Liked for ${second} times!`) {
        console.log("Stop spamming the button yo!");
    }
    else {
        let li = document.createElement("li");
        li.innerText = `Liked for ${second} times!`
        likesUl.appendChild(li);
    }
})

let onOffSwitchForTimer = "ON";
function pause() {

    onOffSwitchForTimer === "ON" ? onOffSwitchForTimer = "OFF" : onOffSwitchForTimer = "ON"; 

    let currentSecond = second;
    if (onOffSwitchForTimer === "ON") { //START
        second = currentSecond; // if it got started, continue from the stopped timed
        i = 0;
        timer()
    }
    else if (onOffSwitchForTimer === "OFF") { //STOP
        currentSecond = second;
        i = 10;
    }
}
let pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", pause)
