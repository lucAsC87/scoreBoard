let score = 0;
let othScore = 0;
let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
homeScore.textContent = score;
guestScore.textContent = othScore;

function addOne() {
   score+=1;
   homeScore.textContent = score;
}

function addTwo() {
   score+=2;
   homeScore.textContent = score;
}

function addThree() {
   score+=3;
   homeScore.textContent = score;
}

function addOneGuest() {
   othScore+=1;
   guestScore.textContent = othScore;
}

function addTwoGuest() {
   othScore+=2;
   guestScore.textContent = othScore;
}

function addThreeGuest() {
   othScore+=3;
   guestScore.textContent = othScore;
}