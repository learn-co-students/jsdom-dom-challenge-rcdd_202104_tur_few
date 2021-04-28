const counterValue = document.getElementById("counter")
let numberValue = parseInt(counterValue.innerHTML)
console.log(numberValue)
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const heart = document.getElementById("heart")
const likes = document.querySelector(".likes")
const submitForm = document.getElementById("comment-form")
const submitBtn = document.getElementById("submit")
const comment = document.getElementById("list")
const pause = document.getElementById("pause")

const handle = setInterval(function(){
    counterValue.innerText = numberValue += 1;
}, 1000);

plus.addEventListener("click", function(){
  console.log("clicked");
  counterValue.innerText = numberValue += 1;
})

minus.addEventListener("click", function(){
  console.log("clicked");
  counterValue.innerText = numberValue -= 1;
})

heart.addEventListener("click", function(){
  console.log("clicked");
  const li = document.createElement("li")
  li.innerHTML = `${numberValue} has been liked 1 time`
  likes.appendChild(li)
})

if(handle){
  pause.addEventListener("click", function(){
  clearInterval(handle)
})
} 


submitForm.addEventListener("submit", function(e){
  e.preventDefault();
  const commentInput = document.getElementById("comment-input").value;
  console.log(commentInput)
  const ul = document.createElement("ul")
  const li = document.createElement("li")
  comment.appendChild(ul)
  ul.appendChild(li)
  li.innerText += commentInput
})


