const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");

const checkAnswer = document.querySelector(".lesson-learn__check");
const checkAnswer2 = document.querySelector(".lesson-learn__check2");
const checkAnswer3 = document.querySelector(".lesson-learn__check3");
const checkAnswer4 = document.querySelector(".lesson-learn__check4");
const checkAnswer5 = document.querySelector(".lesson-learn__check5");
const checkAnswer6 = document.querySelector(".lesson-learn__check6");
const checkAnswer7 = document.querySelector(".lesson-learn__check7");
const checkAnswer8 = document.querySelector(".lesson-learn__check8");
const checkAnswer9 = document.querySelector(".lesson-learn__check9");
const checkAnswer10 = document.querySelector(".lesson-learn__check10");

const nextLesson = document.querySelector(".lesson-learn__next");
const nextLesson2 = document.querySelector(".lesson-learn__next2");
const nextLesson3 = document.querySelector(".lesson-learn__next3");
const nextLesson4 = document.querySelector(".lesson-learn__next4");
const nextLesson5 = document.querySelector(".lesson-learn__next5");
const nextLesson6 = document.querySelector(".lesson-learn__next6");
const nextLesson7 = document.querySelector(".lesson-learn__next7");
const nextLesson8 = document.querySelector(".lesson-learn__next8");
const nextLesson9 = document.querySelector(".lesson-learn__next9");
const nextLesson10 = document.querySelector(".lesson-learn__next10");

const nextLessonBack = document.querySelector(".lesson-learn__next-back");

const answerCorrectOrIncorrect = document.querySelector(
  ".lesson-learn__box-answer"
);
const answerCorrectOrIncorrect2 = document.querySelector(
  ".lesson-learn__box-answer2"
);
const answerCorrectOrIncorrect3 = document.querySelector(
  ".lesson-learn__box-answer3"
);
const answerCorrectOrIncorrect4 = document.querySelector(
  ".lesson-learn__box-answer4"
);
const answerCorrectOrIncorrect5 = document.querySelector(
  ".lesson-learn__box-answer5"
);
const answerCorrectOrIncorrect6 = document.querySelector(
  ".lesson-learn__box-answer6"
);
const answerCorrectOrIncorrect7 = document.querySelector(
  ".lesson-learn__box-answer7"
);
const answerCorrectOrIncorrect8 = document.querySelector(
  ".lesson-learn__box-answer8"
);
const answerCorrectOrIncorrect9 = document.querySelector(
  ".lesson-learn__box-answer9"
);
const answerCorrectOrIncorrect10 = document.querySelector(
  ".lesson-learn__box-answer10"
);

const lesson01 = document.querySelector(".lesson01");
const lesson02 = document.querySelector(".lesson02");
const lesson03 = document.querySelector(".lesson03");
const lesson04 = document.querySelector(".lesson04");
const lesson05 = document.querySelector(".lesson05");
const lesson06 = document.querySelector(".lesson06");
const lesson07 = document.querySelector(".lesson07");
const lesson08 = document.querySelector(".lesson08");
const lesson09 = document.querySelector(".lesson09");
const lesson10 = document.querySelector(".lesson10");

const currentAnswers = [
  "unhappy",
  "sad",
  "which",
  "when",
  "what",
  "leave",
  "where",
];

const audio01 = new Audio("audio01/unhappy.wav");
const audio02 = new Audio("audio01/sad.wav");
const audio03 = new Audio("audio01/which.wav");
const audio04 = new Audio("audio01/when.wav");
const audio05 = new Audio("audio01/what.wav");
const audio06 = new Audio("audio01/leave.wav");
const audio07 = new Audio("audio01/where.wav");

let rightAnswers = 0;

let choiceItemCheck = "";

let beginner12 = JSON.parse(localStorage.getItem("beginner12"));

if (beginner12 === null) {
  beginner12 = [];
}

choiceItems.forEach((btn, index) => {
  btn.onclick = function () {
    choiceItem(index);
  };
});

function choiceItem(index) {
  for (const item of choiceItems) {
    item.classList.remove("lesson-learn__choice-item--active");
  }
  choiceItems[index].classList.add("lesson-learn__choice-item--active");
  choiceItemCheck = document.querySelector(
    ".lesson-learn__choice-item--active"
  ).innerText;
}

function answerCheck(
  index,
  checkAnswer,
  answerCorrectOrIncorrect,
  next,
  audio,
  lesson1,
  lesson2
) {
  if (choiceItemCheck !== "") {
    checkAnswer.disabled = true;
    if (choiceItemCheck === currentAnswers[index]) {
      answerCorrectOrIncorrect.textContent = "Правильно!";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer.style.display = "none";
      next.style.display = "block";
      rightAnswers++;
      audio.play();
    } else {
      answerCorrectOrIncorrect.textContent = "Неправильный ответ!";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer.style.display = "none";
      next.style.display = "block";
      audio.play();
    }

    next.addEventListener("click", function () {
      choiceItemCheck = "";
      lesson1.style.display = "none";
      lesson2.style.display = "flex";
    });
  }
}

checkAnswer.addEventListener("click", function () {
  answerCheck(
    0,
    checkAnswer,
    answerCorrectOrIncorrect,
    nextLesson,
    audio01,
    lesson01,
    lesson02
  );
});
checkAnswer2.addEventListener("click", function () {
  answerCheck(
    1,
    checkAnswer2,
    answerCorrectOrIncorrect2,
    nextLesson2,
    audio02,
    lesson02,
    lesson03
  );
});
checkAnswer3.addEventListener("click", function () {
  answerCheck(
    2,
    checkAnswer3,
    answerCorrectOrIncorrect3,
    nextLesson3,
    audio03,
    lesson03,
    lesson04
  );
});
checkAnswer4.addEventListener("click", function () {
  answerCheck(
    3,
    checkAnswer4,
    answerCorrectOrIncorrect4,
    nextLesson4,
    audio04,
    lesson04,
    lesson05
  );
});
checkAnswer5.addEventListener("click", function () {
  answerCheck(
    4,
    checkAnswer5,
    answerCorrectOrIncorrect5,
    nextLesson5,
    audio05,
    lesson05,
    lesson06
  );
});
checkAnswer6.addEventListener("click", function () {
  answerCheck(
    5,
    checkAnswer6,
    answerCorrectOrIncorrect6,
    nextLesson6,
    audio06,
    lesson06,
    lesson07
  );
});
checkAnswer7.addEventListener("click", function () {
  answerCheck(
    6,
    checkAnswer7,
    answerCorrectOrIncorrect7,
    nextLessonBack,
    audio07,
  );
  if (rightAnswers === 7) {
    if (beginner12.length === 0) {
      beginner12.push(1);
      saveToLocalStorage();
    }
  }
});

const saveToLocalStorage = function () {
  localStorage.setItem("beginner12", JSON.stringify(beginner12));
};
