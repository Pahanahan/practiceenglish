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

const checkPhrase = document.querySelector(".lesson-learn__check");
const checkPhrase2 = document.querySelector(".lesson-learn__check2");
const checkPhrase3 = document.querySelector(".lesson-learn__check3");
const checkPhrase4 = document.querySelector(".lesson-learn__check4");
const checkPhrase5 = document.querySelector(".lesson-learn__check5");
const checkPhrase6 = document.querySelector(".lesson-learn__check6");
const checkPhrase7 = document.querySelector(".lesson-learn__check7");
const checkPhrase8 = document.querySelector(".lesson-learn__check8");
const checkPhrase9 = document.querySelector(".lesson-learn__check9");
const checkPhrase10 = document.querySelector(".lesson-learn__check10");

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

const spanStr = document.querySelector(".lesson-learn__phrase-span");
const spanStr2 = document.querySelector(".lesson-learn__phrase-span2");
const spanStr3 = document.querySelector(".lesson-learn__phrase-span3");
const spanStr4 = document.querySelector(".lesson-learn__phrase-span4");
const spanStr5 = document.querySelector(".lesson-learn__phrase-span5");
const spanStr6 = document.querySelector(".lesson-learn__phrase-span6");
const spanStr7 = document.querySelector(".lesson-learn__phrase-span7");
const spanStr8 = document.querySelector(".lesson-learn__phrase-span8");
const spanStr9 = document.querySelector(".lesson-learn__phrase-span9");
const spanStr10 = document.querySelector(".lesson-learn__phrase-span10");

const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
const choiceItems2 = document.querySelectorAll(".lesson-learn__choice-item2");
const choiceItems3 = document.querySelectorAll(".lesson-learn__choice-item3");
const choiceItems4 = document.querySelectorAll(".lesson-learn__choice-item4");
const choiceItems5 = document.querySelectorAll(".lesson-learn__choice-item5");
const choiceItems6 = document.querySelectorAll(".lesson-learn__choice-item6");
const choiceItems7 = document.querySelectorAll(".lesson-learn__choice-item7");
const choiceItems8 = document.querySelectorAll(".lesson-learn__choice-item8");
const choiceItems9 = document.querySelectorAll(".lesson-learn__choice-item9");
const choiceItems10 = document.querySelectorAll(".lesson-learn__choice-item10");

const audio01 = new Audio("audio12/does_she_want_to_find_a_new_job.wav");
const audio02 = new Audio("audio12/does_he_help_his_friend.wav");
const audio03 = new Audio("audio12/does_she_want_to_be_an_actress.wav");
const audio04 = new Audio("audio12/does_she_want_to_change_her_job.wav");
const audio05 = new Audio("audio12/does_he_study_or_work.wav");
const audio06 = new Audio("audio12/does_it_motivate_him.wav");
const audio07 = new Audio("audio12/does_he_want_to_watch_this_movie.wav");
const audio08 = new Audio("audio12/does_it_cost_more_than_one_thousand_euros.wav");
const audio09 = new Audio("audio12/does_she_often_listen_to_music.wav");
const audio10 = new Audio("audio12/does_she_buy_expensive_things.wav");

const answersArray = [
  "find a",
  "his",
  "an",
  "Does she",
  "Does he",
  "motivate",
  "want to",
  "more than",
  "to",
  "she",
];

let rightAnswers = 0;

let choiceItemCheck = "";
let choiceItemCheck2 = "";
let choiceItemCheck3 = "";
let choiceItemCheck4 = "";
let choiceItemCheck5 = "";
let choiceItemCheck6 = "";
let choiceItemCheck7 = "";
let choiceItemCheck8 = "";
let choiceItemCheck9 = "";
let choiceItemCheck10 = "";

let beginner10 = JSON.parse(localStorage.getItem("beginner10"));

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
  spanStr.innerText = choiceItemCheck;
}

choiceItems2.forEach((btn, index) => {
  btn.onclick = function () {
    choiceItem2(index);
  };
});
function choiceItem2(index) {
  for (const item of choiceItems2) {
    item.classList.remove("lesson-learn__choice-item--active2");
  }
  choiceItems2[index].classList.add("lesson-learn__choice-item--active2");
  choiceItemCheck2 = document.querySelector(
    ".lesson-learn__choice-item--active2"
  ).innerText;
  spanStr2.innerText = choiceItemCheck2;
}

choiceItems3.forEach((btn, index) => {
  btn.onclick = function () {
    choiceItem3(index);
  };
});
function choiceItem3(index) {
  for (const item of choiceItems3) {
    item.classList.remove("lesson-learn__choice-item--active3");
  }
  choiceItems3[index].classList.add("lesson-learn__choice-item--active3");
  choiceItemCheck3 = document.querySelector(
    ".lesson-learn__choice-item--active3"
  ).innerText;
  spanStr3.innerText = choiceItemCheck3;
}

choiceItems4.forEach((btn, index) => {
  btn.onclick = function () {
    choiceItem4(index);
  };
});
function choiceItem4(index) {
  for (const item of choiceItems4) {
    item.classList.remove("lesson-learn__choice-item--active4");
  }
  choiceItems4[index].classList.add("lesson-learn__choice-item--active4");
  choiceItemCheck4 = document.querySelector(
    ".lesson-learn__choice-item--active4"
  ).innerText;
  spanStr4.innerText = choiceItemCheck4;
}

choiceItems5.forEach((btn, index) => {
  btn.onclick = function () {
    choiceItem5(index);
  };
});
function choiceItem5(index) {
  for (const item of choiceItems5) {
    item.classList.remove("lesson-learn__choice-item--active5");
  }
  choiceItems5[index].classList.add("lesson-learn__choice-item--active5");
  choiceItemCheck5 = document.querySelector(
    ".lesson-learn__choice-item--active5"
  ).innerText;
  spanStr5.innerText = choiceItemCheck5;
}

choiceItems6.forEach((btn, index) => {
  btn.onclick = function () {
    choiceItem6(index);
  };
});
function choiceItem6(index) {
  for (const item of choiceItems6) {
    item.classList.remove("lesson-learn__choice-item--active6");
  }
  choiceItems6[index].classList.add("lesson-learn__choice-item--active6");
  choiceItemCheck6 = document.querySelector(
    ".lesson-learn__choice-item--active6"
  ).innerText;
  spanStr6.innerText = choiceItemCheck6;
}

choiceItems7.forEach((btn, index) => {
  btn.onclick = function () {
    choiceItem7(index);
  };
});
function choiceItem7(index) {
  for (const item of choiceItems7) {
    item.classList.remove("lesson-learn__choice-item--active7");
  }
  choiceItems7[index].classList.add("lesson-learn__choice-item--active7");
  choiceItemCheck7 = document.querySelector(
    ".lesson-learn__choice-item--active7"
  ).innerText;
  spanStr7.innerText = choiceItemCheck7;
}

choiceItems8.forEach((btn, index) => {
  btn.onclick = function () {
    choiceItem8(index);
  };
});
function choiceItem8(index) {
  for (const item of choiceItems8) {
    item.classList.remove("lesson-learn__choice-item--active8");
  }
  choiceItems8[index].classList.add("lesson-learn__choice-item--active8");
  choiceItemCheck8 = document.querySelector(
    ".lesson-learn__choice-item--active8"
  ).innerText;
  spanStr8.innerText = choiceItemCheck8;
}

choiceItems9.forEach((btn, index) => {
  btn.onclick = function () {
    choiceItem9(index);
  };
});
function choiceItem9(index) {
  for (const item of choiceItems9) {
    item.classList.remove("lesson-learn__choice-item--active9");
  }
  choiceItems9[index].classList.add("lesson-learn__choice-item--active9");
  choiceItemCheck9 = document.querySelector(
    ".lesson-learn__choice-item--active9"
  ).innerText;
  spanStr9.innerText = choiceItemCheck9;
}

choiceItems10.forEach((btn, index) => {
  btn.onclick = function () {
    choiceItem10(index);
  };
});
function choiceItem10(index) {
  for (const item of choiceItems10) {
    item.classList.remove("lesson-learn__choice-item--active10");
  }
  choiceItems10[index].classList.add("lesson-learn__choice-item--active10");
  choiceItemCheck10 = document.querySelector(
    ".lesson-learn__choice-item--active10"
  ).innerText;
  spanStr10.innerText = choiceItemCheck10;
}

function answerCheck(
  choiceItemCheck,
  index,
  checkPhrase,
  answerCorrectOrIncorrect,
  next,
  audio,
  lesson1,
  lesson2
) {
  if (choiceItemCheck !== "") {
    checkPhrase.disabled = true;
    if (choiceItemCheck === answersArray[index]) {
      answerCorrectOrIncorrect.textContent = "Правильно!";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkPhrase.style.display = "none";
      next.style.display = "block";
      rightAnswers++;
      audio.play();
    } else {
      answerCorrectOrIncorrect.textContent = "Неправильный ответ!";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkPhrase.style.display = "none";
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

checkPhrase.addEventListener("click", function () {
  answerCheck(
    choiceItemCheck,
    0,
    checkPhrase,
    answerCorrectOrIncorrect,
    nextLesson,
    audio01,
    lesson01,
    lesson02
  );
});
checkPhrase2.addEventListener("click", function () {
  answerCheck(
    choiceItemCheck2,
    1,
    checkPhrase2,
    answerCorrectOrIncorrect2,
    nextLesson2,
    audio02,
    lesson02,
    lesson03
  );
});
checkPhrase3.addEventListener("click", function () {
  answerCheck(
    choiceItemCheck3,
    2,
    checkPhrase3,
    answerCorrectOrIncorrect3,
    nextLesson3,
    audio03,
    lesson03,
    lesson04
  );
});
checkPhrase4.addEventListener("click", function () {
  answerCheck(
    choiceItemCheck4,
    3,
    checkPhrase4,
    answerCorrectOrIncorrect4,
    nextLesson4,
    audio04,
    lesson04,
    lesson05
  );
});
checkPhrase5.addEventListener("click", function () {
  answerCheck(
    choiceItemCheck5,
    4,
    checkPhrase5,
    answerCorrectOrIncorrect5,
    nextLesson5,
    audio05,
    lesson05,
    lesson06
  );
});
checkPhrase6.addEventListener("click", function () {
  answerCheck(
    choiceItemCheck6,
    5,
    checkPhrase6,
    answerCorrectOrIncorrect6,
    nextLesson6,
    audio06,
    lesson06,
    lesson07
  );
});
checkPhrase7.addEventListener("click", function () {
  answerCheck(
    choiceItemCheck7,
    6,
    checkPhrase7,
    answerCorrectOrIncorrect7,
    nextLesson7,
    audio07,
    lesson07,
    lesson08
  );
});
checkPhrase8.addEventListener("click", function () {
  answerCheck(
    choiceItemCheck8,
    7,
    checkPhrase8,
    answerCorrectOrIncorrect8,
    nextLesson8,
    audio08,
    lesson08,
    lesson09
  );
});
checkPhrase9.addEventListener("click", function () {
  answerCheck(
    choiceItemCheck9,
    8,
    checkPhrase9,
    answerCorrectOrIncorrect9,
    nextLesson9,
    audio09,
    lesson09,
    lesson10
  );
});
checkPhrase10.addEventListener("click", function () {
  answerCheck(
    choiceItemCheck10,
    9,
    checkPhrase10,
    answerCorrectOrIncorrect10,
    nextLesson10,
    audio10
  );
  if (rightAnswers === 10) {
    if (beginner10.length === 11) {
      beginner10.push(12);
      saveToLocalStorage();
    }
  }
});

const saveToLocalStorage = function () {
  localStorage.setItem("beginner10", JSON.stringify(beginner10));
};
