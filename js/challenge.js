// function counterS() {
//     let showNumber = document.getElementById("counter").innerText;
//     showNumber = parseInt(document.getElementById("counter")) += 1;
//     return showNumber.innerText;
    
    

// }
// setInterval(counterS(){
//     return showNumber,
// }, 1000);




const counterPart = document.getElementById("counter");
let showNumber = parseInt(document.getElementById("counter").innerText);
const heartButton = document.getElementById("heart");
const realList = document.querySelector(".likes");
let inputComment = document.getElementById("comment-input");
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")


setInterval(function() {
    counterPart.innerText = showNumber += 1;
    
}, 1000);
plus.addEventListener("click", function(){
    console.log("clicked");
    counterPart.innerText = showNumber += 1;
  })
  minus.addEventListener("click", function(){
    console.log("clicked");
    counterPart.innerText = showNumber -= 1;
  })

heartButton.addEventListener("click", function() {
    let likesList = document.createElement("li");
    likesList.innerHTML = `${counterPart.innerText} has been liked 1 time`;
    realList.appendChild(likesList);

}
);

document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();
    
    

    
    document.getElementById("list").innerText = inputComment.value;
}
);
