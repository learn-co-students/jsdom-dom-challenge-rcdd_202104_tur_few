// "Create a timer" STARTS
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
// "Create a timer" ENDS

// ============================================================ //

// "Increment and decrement the time with buttons" START
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
// "Increment and decrement the time with buttons" ENDS

// ==================================================================//

// "Like as much as the timer" START
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
// "Like as much as the timer" START

// ======================================================================= //

// "Stop and start the timer" STARTS
    let onOffSwitchForTimer = "ON";
    function pause() {

        onOffSwitchForTimer === "ON" ? onOffSwitchForTimer = "OFF" : onOffSwitchForTimer = "ON"; 

        let currentSecond = second;
        if (onOffSwitchForTimer === "ON") { //START
            pauseButton.innerText = "pause";
            second = currentSecond; // if it got started, continue from the stopped timed
            i = 0;
            timer()
            minusButton.disabled = false;
            plusButton.disabled = false;
            heartButton.disabled = false;
        }
        else if (onOffSwitchForTimer === "OFF") { //STOP
            pauseButton.innerText = "resume";
            currentSecond = second;
            i = 10; // stop the timer
            minusButton.disabled = true;
            plusButton.disabled = true;
            heartButton.disabled = true;

        }
    }
    let pauseButton = document.getElementById("pause");
    pauseButton.addEventListener("click", pause)
// "Stop and start the timer" ENDS

// ================================================================= //

// "Add comments" STARTS 
let commentsDiv = document.getElementById("comments")
let commentInput = document.getElementById("comment-input");
let commentForm = document.getElementById("comment-form");
let submitButton = document.getElementById("submit")
submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    let div = document.createElement("div");
    let p = document.createElement("p");


    p.innerText = commentInput.value;
    div.appendChild(p);
    commentsDiv.appendChild(div);
})

