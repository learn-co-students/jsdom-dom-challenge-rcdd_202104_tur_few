let decrease = document.getElementById("minus");
let increase = document.getElementById("plus");
let myCounter = document.getElementById("counter");
let like = document.getElementById("heart");
let pauses = document.getElementById("pause");
let submitComment = document.getElementById("submit");

let life = true;
let counter = 0
let timer = setInterval(function(){
  if (life){
    myCounter.innerHTML = counter
    counter += 1;
  }

}, 1000);

increase.addEventListener("click", function (){

    let strmyCounter = document.getElementById("counter").innerHTML
    counter = parseInt(strmyCounter)
    counter +=1
    document.getElementById("counter").innerHTML = counter
})

decrease.addEventListener("click", function (){

    let strmyCounter = document.getElementById("counter").innerHTML
    counter = parseInt(strmyCounter)
    counter -=1
    document.getElementById("counter").innerHTML = counter
})

like.addEventListener("click", function(){

    let react = document.querySelector(".likes")
    let node = document.createElement("li");
    let message = document.createTextNode(counter + " have liked this");

    node.appendChild(message)
    react.appendChild(node)

})

pauses.addEventListener("click", function(){

     if (life){
     pauses.innerHTML = "resume"
     life = false
        }
     else{
     pauses.innerHTML = "pause"
     life = true
       }
})

submit.addEventListener("click", function(e){
    e.preventDefault()

    let commentList=document.getElementById("list")

   let pComment=document.createElement("p")
   let myComment= document.createTextNode(document.getElementById("comment-input").value)
    
   pComment.appendChild(myComment)
   commentList.appendChild(pComment)

    console.log(document.getElementById("comment-input").value)
})





