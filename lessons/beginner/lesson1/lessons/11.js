const lesson01 = document.querySelector(".lesson01");
const lesson02 = document.querySelector(".lesson02");

const boxLessonsGrid = document.querySelector(".lesson-learn__grid");
const boxLessonsGrid2 = document.querySelector(".lesson-learn__grid2");

const boxLessonsGridView = document.querySelector(
  ".lesson-learn__grid-unvisible"
);
const boxLessonsGridView2 = document.querySelector(
  ".lesson-learn__grid-unvisible2"
);

const boxLessonsStrings = document.querySelector(".lesson-learn__box-strings");
const boxLessonsStrings2 = document.querySelector(
  ".lesson-learn__box-strings2"
);

const answerRightOrNot = document.querySelector(".lesson-learn__box-answer");
const answerRightOrNot2 = document.querySelector(".lesson-learn__box-answer2");

const itemPast = document.querySelector(".lesson-learn__grid-item-past");
const itemPast2 = document.querySelector(".lesson-learn__grid-item-past2");
const itemPast3 = document.querySelector(".lesson-learn__grid-item-past3");
const itemPast4 = document.querySelector(".lesson-learn__grid-item-past4");
const itemPast5 = document.querySelector(".lesson-learn__grid-item-past5");

const itemPast6 = document.querySelector(".lesson-learn__grid-item-past6");
const itemPast7 = document.querySelector(".lesson-learn__grid-item-past7");
const itemPast8 = document.querySelector(".lesson-learn__grid-item-past8");
const itemPast9 = document.querySelector(".lesson-learn__grid-item-past9");
const itemPast10 = document.querySelector(".lesson-learn__grid-item-past10");

const stringChoice = document.querySelector(".lesson-learn__box-str");
const stringChoice2 = document.querySelector(".lesson-learn__box-str2");
const stringChoice3 = document.querySelector(".lesson-learn__box-str3");
const stringChoice4 = document.querySelector(".lesson-learn__box-str4");
const stringChoice5 = document.querySelector(".lesson-learn__box-str5");

const stringChoice6 = document.querySelector(".lesson-learn__box-str6");
const stringChoice7 = document.querySelector(".lesson-learn__box-str7");
const stringChoice8 = document.querySelector(".lesson-learn__box-str8");
const stringChoice9 = document.querySelector(".lesson-learn__box-str9");
const stringChoice10 = document.querySelector(".lesson-learn__box-str10");

const mixBtn = document.querySelector(".lesson-learn__mix");
const mixBtn2 = document.querySelector(".lesson-learn__mix2");
const checkStr = document.querySelector(".lesson-learn__check-str");
const checkStr2 = document.querySelector(".lesson-learn__check-str2");
const nextBtn = document.querySelector(".lesson-learn__next");
const nextBtn2 = document.querySelector(".lesson-learn__next2");

const helpText = document.querySelector(".lesson-learn__text");
const helpText2 = document.querySelector(".lesson-learn__text2");

const answersArray = [
  "делать",
  "каждый",
  "игра",
  "часто",
  "практика",
  "иногда",
  "эти",
  "вещь",
  "путешествовать",
  "обычно",
];

const stringChoices = [
  stringChoice,
  stringChoice2,
  stringChoice3,
  stringChoice4,
  stringChoice5,
];
const stringChoices2 = [
  stringChoice6,
  stringChoice7,
  stringChoice8,
  stringChoice9,
  stringChoice10,
];

const itemsArrayPast = [itemPast, itemPast2, itemPast3, itemPast4, itemPast5];
const itemsArrayPast2 = [
  itemPast6,
  itemPast7,
  itemPast8,
  itemPast9,
  itemPast10,
];

let rightAnswers = 0;

let currentIndex = 0;

let beginner01 = JSON.parse(localStorage.getItem("beginner01"));

function mixStrings(gridBlock, gridBlockView, blockStrings, mixBtn, checkStr, helpText) {
  gridBlock.style.display = "none";
  gridBlockView.style.display = "grid";
  blockStrings.style.display = "flex";
  mixBtn.style.display = "none";
  checkStr.style.display = "block";
  helpText.innerText = "Соотнесите слова с верным переводом";
}

function checkStringsRightOrNot(
  itemsPast,
  itemPast,
  itemPast2,
  itemPast3,
  itemPast4,
  itemPast5,
  checkStr,
  nextBtn,
  num,
  num2,
  num3,
  num4,
  num5,
  answerRightOrNot
) {
  let currentItemPastValue = 0;
  let answerCorrect = 0;
  for (const itemPast of itemsPast) {
    if (itemPast.innerText.length > 0) {
      currentItemPastValue++;
    }
  }
  if (currentItemPastValue === 5) {
    if (itemPast.innerText === answersArray[num]) {
      itemPast.style.backgroundColor = "#13b113";
      answerCorrect++;
      rightAnswers++;
    } else {
      itemPast.style.backgroundColor = "#db5353";
    }
    if (itemPast2.innerText === answersArray[num2]) {
      itemPast2.style.backgroundColor = "#13b113";
      answerCorrect++;
      rightAnswers++;
    } else {
      itemPast2.style.backgroundColor = "#db5353";
    }
    if (itemPast3.innerText === answersArray[num3]) {
      itemPast3.style.backgroundColor = "#13b113";
      answerCorrect++;
      rightAnswers++;
    } else {
      itemPast3.style.backgroundColor = "#db5353";
    }
    if (itemPast4.innerText === answersArray[num4]) {
      itemPast4.style.backgroundColor = "#13b113";
      answerCorrect++;
      rightAnswers++;
    } else {
      itemPast4.style.backgroundColor = "#db5353";
    }
    if (itemPast5.innerText === answersArray[num5]) {
      itemPast5.style.backgroundColor = "#13b113";
      answerCorrect++;
      rightAnswers++;
    } else {
      itemPast5.style.backgroundColor = "#db5353";
    }
    if (answerCorrect === 5) {
      answerRightOrNot.classList.add("lesson-learn__box-answer__correct");
      answerRightOrNot.textContent = "Правильно!";
    } else if (answerCorrect > 0) {
      answerRightOrNot.classList.add("lesson-learn__box-answer__incorrect");
      answerRightOrNot.textContent = "Вы допустили ошибку!";
    } else if (answerCorrect === 0) {
      answerRightOrNot.classList.add("lesson-learn__box-answer__incorrect");
      answerRightOrNot.textContent = "Ни одного правильного ответа!";
    }
    answerRightOrNot.style.display = "flex";
    checkStr.style.display = "none";
    nextBtn.style.display = "block";
  }
}

function nextLesson(lesson1, lesson2) {
  lesson1.style.display = "none";
  lesson2.style.display = "block";
}

mixBtn.addEventListener("click", function () {
  mixStrings(
    boxLessonsGrid,
    boxLessonsGridView,
    boxLessonsStrings,
    mixBtn,
    checkStr,
    helpText
  );

  stringChoices.forEach((stringChoiceItem) => {
    stringChoiceItem.addEventListener("click", function () {
      itemsArrayPast[currentIndex].textContent = stringChoiceItem.innerText;
      currentIndex++;
    });
  });
  for (const string of stringChoices) {
    string.addEventListener("click", function () {
      string.style.display = "none";
    });
  }

  checkStr.addEventListener("click", function () {
    checkStringsRightOrNot(
      itemsArrayPast,
      itemPast,
      itemPast2,
      itemPast3,
      itemPast4,
      itemPast5,
      checkStr,
      nextBtn,
      0,
      1,
      2,
      3,
      4,
      answerRightOrNot
    );
    nextBtn.addEventListener("click", function () {
      nextLesson(lesson01, lesson02);
      currentIndex = 0;
    });
  });
});

mixBtn2.addEventListener("click", function () {
  mixStrings(
    boxLessonsGrid2,
    boxLessonsGridView2,
    boxLessonsStrings2,
    mixBtn2,
    checkStr2,
    helpText2
  );

  stringChoices2.forEach((stringChoiceItem) => {
    stringChoiceItem.addEventListener("click", function () {
      itemsArrayPast2[currentIndex].textContent = stringChoiceItem.innerText;
      currentIndex++;
    });
  });
  for (const string of stringChoices2) {
    string.addEventListener("click", function () {
      string.style.display = "none";
    });
  }

  checkStr2.addEventListener("click", function () {
    checkStringsRightOrNot(
      itemsArrayPast2,
      itemPast6,
      itemPast7,
      itemPast8,
      itemPast9,
      itemPast10,
      checkStr2,
      nextBtn2,
      5,
      6,
      7,
      8,
      9,
      answerRightOrNot2
    );
    if (rightAnswers === 10) {
      if (beginner01.length === 10) {
        beginner01.push(11);
        saveToLocalStorage();
      }
    }
  });
});

const saveToLocalStorage = function () {
  localStorage.setItem("beginner01", JSON.stringify(beginner01));
};