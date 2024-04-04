const lesson01 = document.querySelector(".lesson01");
const lesson02 = document.querySelector(".lesson02");
const lesson03 = document.querySelector(".lesson03");

const stringChoice = document.querySelector(".lesson-learn__box-str");
const stringChoice2 = document.querySelector(".lesson-learn__box-str2");
const stringChoice3 = document.querySelector(".lesson-learn__box-str3");
const stringChoice4 = document.querySelector(".lesson-learn__box-str4");
const stringChoice5 = document.querySelector(".lesson-learn__box-str5");

const itemPast = document.querySelector(".lesson-learn__grid-item-past");
const itemPast2 = document.querySelector(".lesson-learn__grid-item-past2");
const itemPast3 = document.querySelector(".lesson-learn__grid-item-past3");
const itemPast4 = document.querySelector(".lesson-learn__grid-item-past4");
const itemPast5 = document.querySelector(".lesson-learn__grid-item-past5");

const answersArray = ['Нью-Йорк', 'результат', 'видеть','место', 'программа',]

const boxLessonsGrid = document.querySelector(".lesson-learn__grid");
const boxLessonsGridView = document.querySelector(
  ".lesson-learn__grid-unvisible"
);
const boxLessonsStrings = document.querySelector(".lesson-learn__box-strings");

const mixBtn = document.querySelector(".lesson-learn__mix");
const checkStr = document.querySelector(".lesson-learn__check-str");

mixBtn.addEventListener("click", mixStrings);

function mixStrings() {
  boxLessonsGrid.style.display = "none";
  boxLessonsGridView.style.display = "grid";
  boxLessonsStrings.style.display = "flex";
  mixBtn.style.display = "none";
  checkStr.style.display = "block";
}

const stringChoices = [
  stringChoice,
  stringChoice2,
  stringChoice3,
  stringChoice4,
  stringChoice5,
];

const itemsPast = [itemPast, itemPast2, itemPast3, itemPast4, itemPast5];

let currentIndex = 0; // Начальный индекс

stringChoices.forEach((stringChoice, index) => {
  stringChoice.addEventListener("click", function () {
    itemsPast[currentIndex].textContent = stringChoice.innerText;
    currentIndex = currentIndex + 1;
  });
});

stringChoice.addEventListener("click", function () {
  stringChoice.style.display = "none";
});

stringChoice2.addEventListener("click", function () {
  stringChoice2.style.display = "none";
});

stringChoice3.addEventListener("click", function () {
  stringChoice3.style.display = "none";
});

stringChoice4.addEventListener("click", function () {
  stringChoice4.style.display = "none";
});

stringChoice5.addEventListener("click", function () {
  stringChoice5.style.display = "none";
});

checkStr.addEventListener("click", function () {
  let currentItemPastValue = 0;
  for (const itemPast of itemsPast) {
    if (itemPast.innerText.length > 0) {
      currentItemPastValue++;
    }
  }
  if (currentItemPastValue === 5) {
    if (itemPast.innerText === answersArray[0]) {
      itemPast.style.backgroundColor = "#13b113";
    } else {
      itemPast.style.backgroundColor = "#db5353"
    }
    if (itemPast2.innerText === answersArray[1]) {
      itemPast2.style.backgroundColor = "#13b113";
    } else {
      itemPast2.style.backgroundColor = "#db5353"
    }
    if (itemPast3.innerText === answersArray[2]) {
      itemPast3.style.backgroundColor = "#13b113";
    } else {
      itemPast3.style.backgroundColor = "#db5353"
    }
    if (itemPast4.innerText === answersArray[3]) {
      itemPast4.style.backgroundColor = "#13b113";
    } else {
      itemPast4.style.backgroundColor = "#db5353"
    }
    if (itemPast5.innerText === answersArray[4]) {
      itemPast5.style.backgroundColor = "#13b113";
    } else {
      itemPast5.style.backgroundColor = "#db5353"
    }
  }
});
