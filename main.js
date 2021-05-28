const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const redoBtn = document.querySelector("#redoBtn");
const button = document.querySelector(".buttonContainer");
const timer = document.querySelector(".timer");
const scoreBoard = document.querySelector(".scoreBoard");
const playGround = document.querySelector(".playGround");
const clickEvt = new Event("click");
const modal = document.querySelector(".modal");
const modalMsg = document.querySelector(".messageArea");

let isStart = true;
let now;
let time = 10;
let cntCarrots = 10;
let cntBugs = 10;
let intervalID;
button.addEventListener("click", (event)=>{
  if(isStart){
    startBtn.style.display="none"
    pauseBtn.style.display="inline-block"
    clickPlay();
  }else{
    pauseBtn.style.display="none"
    startBtn.style.display="inline-block"
    clickPause();
  }
  isStart = !isStart;
});
redoBtn.addEventListener("click", (event)=>{
  init();
});
playGround.addEventListener("click", (event)=>{
  if(isStart) return;

  if(event.target.className === "carrot" ){
    if(cntCarrots >0){
      event.target.style.display = "none"
      cntCarrots--;
      updateScoreBoard();
    }else{

    }
  }else if(event.target.className === "bug" ){
    endGame("F");
  }
});

function init(){
  modal.style.display="none";
  cntBugs = 10;
  cntCarrots = 10;
  intervalID =null;
  time = 10;
  updateScoreBoard();
  updateTimer();
  while (playGround.firstChild) {
    playGround.removeChild(playGround.firstChild);
  }
  spreadCarrotsandBugs();

}
function createItem(name){
  let item = document.createElement("img");
  item.className = `${name}`
  item.setAttribute("src" , `./img/${name}.png`);
  return item;
}
function getRandomNumber(max){
  return  Math.floor(Math.random() * max);
}
function spreadCarrotsandBugs(){
  for (let i = 0; i < cntCarrots; i++) {
    let imgCarrot = createItem("carrot");
    playGround.appendChild(imgCarrot);
    imgCarrot.style.position ="absolute";
    const rect = imgCarrot.getBoundingClientRect();
    imgCarrot.style.top = (rect.top + getRandomNumber(playGround.clientHeight)-30)+"px";
    imgCarrot.style.left = (rect.left + getRandomNumber(playGround.clientWidth)-30)+"px";
  }
  for (let i = 0; i < cntBugs; i++) {
    let imgBug = createItem("bug");
    playGround.appendChild(imgBug);
    imgBug.style.position ="absolute";
    const rect = imgBug.getBoundingClientRect();
    imgBug.style.top = (rect.top + getRandomNumber(playGround.clientHeight)-30)+"px";
    imgBug.style.left = (rect.left + getRandomNumber(playGround.clientWidth)-30)+"px";
  }
}
function updateTimer(){
  timer.innerHTML = `${time}`
}
function updateScoreBoard(){
  scoreBoard.innerHTML = `${cntCarrots}`
  if(cntCarrots === 0){
    endGame("S");
    clearInterval(intervalID);
  }
}

function clickPause(){
  clearInterval(intervalID);
}
function clickPlay(){
  intervalID = setInterval(()=>{
    if(time >0){
      time--;
    }else{
      clearInterval(intervalID);
      endGame("F");
    }
    updateTimer();
  },1000);
}
function endGame(param){
  modal.style.display= "flex";
  if(param === "S"){
    modalMsg.innerHTML = `성공`;
  }else if(param === "F"){
    modalMsg.innerHTML = `실패`;
  }
  button.dispatchEvent(clickEvt);
}

init();
