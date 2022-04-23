let counter = document.getElementById('counter')
let counterCont = Number(counter.textContent)
console.log(counterCont);

function timed(){
    counterCont += 1;
    counter.innerHTML = counterCont;
}
let start = setInterval( timed,1000)

const minus = document.getElementById('minus');
minus.addEventListener('click', ()=> counter.innerHTML = counterCont --)

const plus = document.getElementById('plus');
plus.addEventListener('click', () => counter.innerHTML = counterCont ++)

const heartIcon = document.getElementById('heart');
heartIcon.addEventListener('click', () =>{
    let likes = document.createElement('li')
    likes.innerHTML = `${counterCont} has been liked 1 time`
    document.querySelector('.likes').appendChild(likes)
})



const pauseTimer = document.getElementById("pause");
pauseTimer.addEventListener("click", pauseResume);
function pauseResume() {
  if (pauseTimer.value === "pause") {
    
    clearInterval(start);
    pauseTimer.innerText = "resume";
    pauseTimer.value = 'resume'

    minus.disabled = true;
    plus.disabled = true;
    heartIcon.disabled = true;

  } else if (pauseTimer.value !== "pause") {
    start =true

    pauseTimer.textContent = "pause";
    document.getElementById("submit").disabled = false;
    minus.disabled = false;
    plus.disabled = false;
    heartIcon.disabled = false;
  }
}

let form = document.getElementById("comment-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputtedComment = document.getElementById("comment-input").value;
  
  let commentElement = document.createElement("p");
  commentElement.textContent = inputtedComment;
  document.getElementById("list").appendChild(commentElement);
  e.target.reset();
});
