// Calling out all the buttons:
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const restartButton = document.getElementById("restart");

// Calling out the counter index and the list of likes:
const counterValue = document.getElementById("counter");
const likesUl = document.getElementById('likes');

// Calling out the submit button && the text area
const listOfComments = document.getElementById("list");
const formArea = document.getElementById("comment-form");
const commentBox = document.getElementById("comment-input");
const submitButton = document.getElementById("submit");


let counter = 0, innerCounter = counter, liCounter = 0, pCounter = 0;

function counterEvent(){
              
        setInterval(function(){
                counterValue.innerText = ++counter;
        }, 1000);

        minusButton.addEventListener("click", function(){
                counterValue.innerText = --counter;
        });

        plusButton.addEventListener("click", function(){
                counterValue.innerText = ++counter;
        });

        let pressCounter = 1;
        heartButton.addEventListener("click", function(){
                let likesLi = document.createElement('li');

                if (counter < innerCounter+1){
                        pressCounter++;
                        console.log("print me" + counter);
                }
                else {
                        console.log("iam the else if")
                        likesLi.innerText = counter + " has been liked " + pressCounter + " times.";
                        likesUl.append(likesLi);
                        liCounter++;
                        innerCounter = counter;;
                        pressCounter = 1;
                }
        });

        submitButton.addEventListener("click", function(e){
                let commentParagraph = document.createElement('p');
                commentParagraph.textContent = commentBox.value;
                listOfComments.append(commentParagraph);
                pCounter++;
                e.preventDefault();
        });

        
        restartButton.addEventListener("click", function(){
                counterValue.innerText = 0;
                counter = 0;

                // To restart the like section and the comment section
                for (let i = 0; i < liCounter; i++){
                        likesUl.removeChild(likesUl.childNodes[0]);
                }
                for (let i = 0; i < pCounter; i++){
                        listOfComments.removeChild(listOfComments.childNodes[0]);
                }
        });    
}

// window.addEventListener("DOMContentLoaded", function(){
//         let openClose = 0;
//         // counterEvent();
//         pauseButton.textContent = "pause";
        
//         pauseButton.addEventListener("click", function(){
//                 if (openClose === 0){
//                         pauseButton.textContent = "resume";
//                         openClose++;
//                 }
//                 else {
//                         pauseButton.textContent = "pause";
//                         counterEvent();
//                         openClose--;
//                 }
//         });
// });

// counterEvent();