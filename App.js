let gameseq = [];
let userseq = [];
let gamestart = false;
let level = 0;
let high_score = 0;
let s = document.createElement("h3");
let colrs = ["green", "pink", "orange", "purple"];

let body = document.querySelector("body");
let p = document.querySelector("p");
body.addEventListener("keypress", () => {
  if (gamestart == false) {
    console.log("game game start");
    gamestart = true;
    levelup();
  }
});

function levelup() {
  userseq = [];
  s.innerText = "";
  level++;
  p.innerText = `Level ${level}`;
  let randnum = Math.floor(Math.random() * 3);
  let randcolor = colrs[randnum];
  let randbtn = document.querySelector(`.${randcolor}`);
  gameseq.push(randcolor);
  console.log(gameseq);
  gameflash(randbtn);
}

function gameflash(btn) {
  btn.classList.add("white");
  setTimeout(() => {
    btn.classList.remove("white");
  }, 750);
}

let allbtns = document.querySelectorAll(".subbox");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function btnpress() {
  let btn = this;
  let id = btn.getAttribute("id");
  userseq.push(id);
  userflash(btn);
  checkans(userseq.length - 1);
}

function userflash(btn) {
  btn.classList.add("user");
  setTimeout(() => {
    btn.classList.remove("user");
  }, 750);
}

function highscore() {
  if (level > high_score) {
    high_score = level;
    console.log(high_score);
  }
  let sp = document.querySelector("span");
  sp.innerText = high_score;
}

function checkans(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelup, 750);
    }
  } else {
    p.innerHTML = `Game over!  your score is <b> ${level} </b> <br> Press any key to start the game again `;
    body.style.backgroundColor = "red";
    setTimeout(() => (body.style.backgroundColor = "white"), 250);
    highscore();
    reset();
  }
}

function reset() {
  userseq = [];
  gameseq = [];
  level = 0;
  gamestart = false;
}
