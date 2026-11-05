const scoreDisplay = document.getElementById("score");
const pieces = document.getElementById("pieces");
const warningBar = document.getElementById("warningBar");

const buttonEnd = document.getElementById("buttonEnd");
const buttonInfo = document.getElementById("buttonInfo");
const buttonStartIcon = document.getElementById("buttonStartIcon");
const buttonEndIcon = document.getElementById("buttonEndIcon");
const confirmAnswerButton = document.getElementById("confirmAnswer");
const scoreFactor = 50;

let currentWord = "";
let history = [];
let score = 0;
let timer = null;
let timeBonus = 1000;
let joinWord = null;
let countdown = 20;
let gameOver = false;
document.getElementById("confirmAnswer").addEventListener("click", confirmAnswer);

function warning(text) {
  if (! text) {
    warningBar.classList.add("hide");
  } else {
    warningBar.innerHTML = `
      <i class="las la-exclamation-triangle"></i>
      ${text}
      <i class="las la-exclamation-triangle"></i>
    `;

    warningBar.classList.remove("hide");
  }
}

function isMobileDevice() {
   return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function startGame() {

  clearInterval(timer);
  countdown = 20;
  
  document.getElementById("timer").innerHTML = `
    <span id="countdown-label">Thời gian trả lời còn lại:</span> <span id="countdown-number">${countdown}</span>
  `;

  score = 0;
  scoreDisplay.innerHTML = score;
  history = [];
  currentWord = words_start[Math.floor(Math.random() * 100)];
  pieces.innerHTML = `
    <div class="piece">
      <input class="shadow" disabled value="${currentWord}" />
      <p class="counter">0</p>
    </div>
  `;

  warning();
  addPiece();
  startTimer();
  
  buttonEnd.onclick = function() { endGame() };
  buttonEnd.classList.remove("disabled");
  buttonInfo.classList.add("disabled");
  buttonStartIcon.classList.add("la-redo-alt");
  buttonEndIcon.classList.add("la", "la-save");
 if (isMobileDevice()) {
    confirmAnswerButton.style.display = "inline-block";
  } else {
    confirmAnswerButton.style.display = "none";
  }
}

function startTimer() {
  clearInterval(timer); 

  timer = setInterval(function() {
    countdown--; 

   document.getElementById("timer").innerHTML = `
      <span id="countdown-label">Thời gian trả lời còn lại:</span> <span id="countdown-number">${countdown}</span>
    `;


    if (countdown <= 0) {
      clearInterval(timer); 
      endGame();
    }
  }, 1000); 
}

function resetTimer() {
  clearInterval(timer);
  countdown = 20;
  document.getElementById("timer").innerHTML = countdown;
}

function addPiece() {
  const counter = history.length + 1;

  pieces.innerHTML += `
    <div class="piece">
      <input class="shadow" placeholder="Nhấn đây!" autocomplete="off" onkeyup="checkWord(event)" />
      <p class="counter" style="opacity: 50%">${counter}</p>
    </div>
  `;

  joinWord = document.querySelector(".piece:last-child input");
  joinWord.focus();
}

function checkWord(event) {
  if (event.keyCode !== 13) return;

  event.preventDefault();

  warning();

  const joinWordFormated = joinWord.value.toLowerCase().trim();

  switch (joinWordFormated) {
    case ",":
      startGame();
      resetTimer(); 
      return;
    case ".":
      endGame();
      resetTimer(); 
      return;
  }

  const fullWord = `${currentWord} ${joinWordFormated}`;

  const continuations = words[currentWord];
  if (!continuations || !continuations.includes(joinWordFormated)) {
    warning("Từ này không có trong từ điển");
    return;
  }
  if (history.includes(fullWord)) {
    warning("Từ này đã được sử dụng");
    return;
  }

  const timeRemaining = countdown;
  const bonusScore = timeRemaining * scoreFactor;

  score += bonusScore;
  scoreDisplay.innerHTML = score;

  history.push(fullWord);
  currentWord = joinWordFormated;

  document.querySelector(".piece").setAttribute("style", "animation: disappear 250ms");
  document.querySelector(".piece input").setAttribute("style", "animation: disappear 200ms");
  document.querySelector(".piece .counter").outerHTML = null;
  setTimeout(function() {
    document.querySelector(".piece").outerHTML = null;
  }, 250);

  joinWord.setAttribute("value", joinWordFormated);
  joinWord.disabled = true;
  joinWord.setAttribute("style", "animation: none");
  document.querySelector(".piece:last-child .counter").removeAttribute("style");
  addPiece();

  resetTimer(); 
  startTimer(); 
}


function endGame() {

  new GV().saveScore(score);
  gameOver = true;
  
  clearInterval(timer); 

  document.querySelectorAll(".piece input").forEach(input => {
    input.disabled = true;
  });

  buttonEnd.classList.add("disabled");
  buttonInfo.classList.add("disabled");

  const timerElement = document.getElementById("timer");
  timerElement.innerHTML = "Trò chơi đã kết thúc! Bắt đầu lại bằng cách bấm nút phía dưới!";

  pieces.innerHTML = "";
  
  confirmAnswerButton.style.display = "none";
}

function submitScore() {
    endGame();
}

function scoreBoard() {
  scoreDisplay.innerHTML = null;
}

function confirmAnswer() {
  console.log("1");
  const joinWord = document.querySelector("#pieces .piece:last-child input");
  checkWord({ keyCode: 13, preventDefault: function() {} });
}

function about() {
  scoreDisplay.innerHTML = null;

  if (isMobileDevice()) {
    pieces.innerHTML = `
      <div id="info" class="board shadow">
	   <h1>Nối Từ Tiếng Việt</h1>
        <ul>
          <li><i class="las la-play"></i> Bắt đầu.</li>
          <li><i class="las la-redo-alt"></i> Chơi lại.</li>
          <li><i class="las la-star"></i> Kết thúc.</li>
          <li><i class="las la-medal"></i> Bảng điểm.</li>
        </ul>
		<p id="love">
          Made with <i id="heart" class="las la-heart"></i> by Arcade
        </p>
      </div>
    `;
  } else {
    pieces.innerHTML = `
      <div id="info" class="board shadow">
        <h1>Nối Từ Tiếng Việt</h1>
        <p>
          Người chơi sẽ lần lượt đưa ra một từ có hai âm tiết bắt đầu bằng chữ cuối cùng trong từ lúc trước đưa ra. 
          Người chơi không được phép sử dụng từ đã từng được dùng trong ván chơi, trò chơi kết thúc khi người chơi không nối được từ tiếp theo hoặc hết thời gian.<br>
          Lưu ý: Điểm số sẽ được tính theo tốc độ trả lời của bạn.
        </p>
        <ul>
          <li><i class="las la-play"></i> Bắt đầu.</li>
          <li><i class="las la-redo-alt"></i> Chơi lại.</li>
          <li><i class="las la-star"></i> Kết thúc.</li>
          <li><i class="las la-medal"></i> Bảng điểm.</li>
        </ul>
        <p id="love">
          Made with <i id="heart" class="las la-heart"></i> by Arcade
        </p>
      </div>
    `;
  }

  buttonEnd.classList.remove("disabled");
  buttonInfo.classList.add("disabled");
  buttonStartIcon.classList.remove("la-redo-alt");
  buttonEndIcon.classList.remove("la-skull-crossbones");
}


about();
