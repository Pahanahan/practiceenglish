import arr from "../js/words.js";

const main = document.querySelector(".main");
// const gameBox = document.querySelector(".game__box");
const headerLevel = document.querySelector(".header__level");
let helperEnglish = document.querySelector(".helper__word-english");
let helperRussian = document.querySelector(".helper__word-russian");

let gameLevel = JSON.parse(localStorage.getItem("gameLevel"));
let otherWords = JSON.parse(localStorage.getItem("otherWords"));

if (gameLevel === null) {
  gameLevel = 1;
}
if (otherWords === null) {
  otherWords = [...arr];
}

headerLevel.textContent = `Уровень ${gameLevel}`;

let words = otherWords.slice(0, 30);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffledArrEnglish = shuffleArray([...words]);
let shuffledArrRissian = shuffleArray([...words]);

function createGameElements() {
    const createGameBoxHTML = `<div class="game__box container">
    <div class="game__box-english">
      ${shuffledArrEnglish
        .map((item) => `<div class="game__box-item">${item.word.name}</div>`)
        .join("")}
    </div>
    <div class="game__box-russian">
      ${shuffledArrRissian
        .map(
          (item) => `<div class="game__box-item">${item.word.translate[0]}</div>`
        )
        .join("")}
    </div>
  </div>`;

  main.insertAdjacentHTML("afterbegin", createGameBoxHTML);
}
createGameElements();

function deleteGameElements() {
  main.innerHTML = "";
}

const gameBoxEnglish = document.querySelector(".game__box-english");
const gameBoxRussian = document.querySelector(".game__box-russian");
let firstChoice = "";
let secondChoice = "";
let firstChoiceElement = null;
let secondChoiceElement = null;

gameBoxEnglish.addEventListener("click", function (e) {
  if (e.target.classList.contains("game__box-item")) {
    const englishItems = gameBoxEnglish.querySelectorAll(".game__box-item");
    englishItems.forEach((item) =>
      item.classList.remove("game__box-item--active")
    );

    e.target.classList.add("game__box-item--active");
    firstChoice = e.target.innerText;
    firstChoiceElement = e.target;
    helperEnglish.textContent = firstChoice;

    if (secondChoice) {
      checkMatch();
    }
  }
});

gameBoxRussian.addEventListener("click", function (e) {
  if (e.target.classList.contains("game__box-item")) {
    const russianItems = gameBoxRussian.querySelectorAll(".game__box-item");
    russianItems.forEach((item) =>
      item.classList.remove("game__box-item--active")
    );

    e.target.classList.add("game__box-item--active");
    secondChoice = e.target.innerText;
    const translateAll = words.find((item) => item.word.translate[0] === secondChoice);
    console.log(translateAll);
    secondChoiceElement = e.target;
    helperRussian.textContent = translateAll.word.translate.slice(0, 3).join(', ');

    if (firstChoice) {
      checkMatch();
    }
  }
});

let currentRightAnswerNumber = 0;
let currentErorrNumber = 0;

function checkMatch() {
  const correctWord = words.find((item) => item.word.name === firstChoice);

  if (correctWord) {
    if (correctWord.word.translate[0].includes(secondChoice)) {
      firstChoiceElement.remove();
      secondChoiceElement.remove();
      currentRightAnswerNumber++;
      helperEnglish.classList.add("lesson-learn__color3");
      helperRussian.classList.add("lesson-learn__color3");
      setTimeout(() => {
        helperEnglish.classList.remove("lesson-learn__color3");
        helperRussian.classList.remove("lesson-learn__color3");
      }, 1500);
      if (currentRightAnswerNumber === 30) {
        gameLevel++;
        otherWords = otherWords.slice(30);
        saveToLocalStorage();
        deleteGameElements();
        createGameElements();
        headerLevel.textContent = `Уровень ${gameLevel}`;
        currentRightAnswerNumber = 0;
        location.reload();
      }
    } else {
      document.body.classList.add("shake");
      setTimeout(() => {
        document.body.classList.remove("shake");
      }, 500);
      currentErorrNumber++;
      helperEnglish.classList.add("lesson-learn__color8");
      helperRussian.classList.add("lesson-learn__color8");
      setTimeout(() => {
        helperEnglish.classList.remove("lesson-learn__color8");
        helperRussian.classList.remove("lesson-learn__color8");
      }, 1500);
      if (currentErorrNumber >= 5) {
        deleteGameElements();
        shuffledArrEnglish = shuffleArray([...words]);
        shuffledArrRissian = shuffleArray([...words]);
        createGameElements();
        currentErorrNumber = 0;
        location.reload();
      }
    }
  }

  firstChoice = "";
  secondChoice = "";
  firstChoiceElement = null;
  secondChoiceElement = null;

  gameBoxEnglish
    .querySelectorAll(".game__box-item")
    .forEach((item) => item.classList.remove("game__box-item--active"));
  gameBoxRussian
    .querySelectorAll(".game__box-item")
    .forEach((item) => item.classList.remove("game__box-item--active"));
}

const saveToLocalStorage = function () {
  localStorage.setItem("gameLevel", JSON.stringify(gameLevel));
  localStorage.setItem("otherWords", JSON.stringify(otherWords));
};