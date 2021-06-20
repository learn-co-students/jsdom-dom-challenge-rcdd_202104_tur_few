let seconds = 0;
let el = document.getElementById('counter');

function incrementSeconds() {
    seconds += 1;
    el.innerText = seconds;
}
let cancel = setInterval(incrementSeconds, 1000);
 const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const pauseButton = document.getElementById('pause');

 minusButton.addEventListener('click', function (e){
   seconds -= 1;
   el.innerText = seconds;
});

plusButton.addEventListener('click', function (e){
  seconds += 1;
  el.innerText = seconds;
});
