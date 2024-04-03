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
const checkAnswer11 = document.querySelector(".lesson-learn__check11");
const checkAnswer12 = document.querySelector(".lesson-learn__check12");

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
const nextLesson11 = document.querySelector(".lesson-learn__next11");
const nextLesson12 = document.querySelector(".lesson-learn__next12");

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
const answerCorrectOrIncorrect11 = document.querySelector(
  ".lesson-learn__box-answer11"
);
const answerCorrectOrIncorrect12 = document.querySelector(
  ".lesson-learn__box-answer12"
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
const lesson11 = document.querySelector(".lesson11");
const lesson12 = document.querySelector(".lesson12");

const currentAnswers = [
  "говорить",
  "город",
  "онлайн",
  "Украина",
  "в",
  "мой",
  "хотеть",
  "нравиться",
  "украинец",
  "я",
  "учиться",
];

const audio01 = new Audio("audio02/speak.wav");
const audio02 = new Audio("audio02/city.wav");
const audio03 = new Audio("audio02/online.wav");
const audio04 = new Audio("audio02/ukraine.wav");
const audio05 = new Audio("audio02/in.wav");
const audio06 = new Audio("audio02/my.wav");
const audio07 = new Audio("audio02/want.wav");
const audio08 = new Audio("audio02/like.wav");
const audio09 = new Audio("audio02/ukrainian.wav");
const audio10 = new Audio("audio02/i.wav");
const audio11 = new Audio("audio02/study.wav");

let rightAnswers = 0;

let choiceItemCheck = "";

let allRightOrNotAnswers001 = false;

let beginner01 = JSON.parse(localStorage.getItem('beginner01'));

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

function answerCheck(index) {
  if (choiceItemCheck !== "") {
    checkAnswer.disabled = true;
    if (choiceItemCheck === currentAnswers[index]) {
      answerCorrectOrIncorrect.textContent = "Правильно!";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
      audio01.play();
    } else {
      answerCorrectOrIncorrect.textContent = "Неправильный ответ!";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      audio01.play();
    }

    nextLesson.addEventListener("click", function () {
      choiceItemCheck = "";
      lesson01.style.display = "none";
      lesson02.style.display = "flex";
    });
  }
}

function answerCheck2(index) {
  if (choiceItemCheck !== "") {
    checkAnswer2.disabled = true;
    if (choiceItemCheck === currentAnswers[index]) {
      answerCorrectOrIncorrect2.textContent = "Правильно!";
      answerCorrectOrIncorrect2.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer2.style.display = "none";
      nextLesson2.style.display = "block";
      rightAnswers++;
      audio02.play();
    } else {
      answerCorrectOrIncorrect2.textContent = "Неправильный ответ!";
      answerCorrectOrIncorrect2.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer2.style.display = "none";
      nextLesson2.style.display = "block";
      audio02.play();
    }

    nextLesson2.addEventListener("click", function () {
      choiceItemCheck = "";
      lesson02.style.display = "none";
      lesson03.style.display = "flex";
    });
  }
}

function answerCheck3(index) {
  if (choiceItemCheck !== "") {
    checkAnswer3.disabled = true;
    if (choiceItemCheck === currentAnswers[index]) {
      answerCorrectOrIncorrect3.textContent = "Правильно!";
      answerCorrectOrIncorrect3.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer3.style.display = "none";
      nextLesson3.style.display = "block";
      rightAnswers++;
      audio03.play();
    } else {
      answerCorrectOrIncorrect3.textContent = "Неправильный ответ!";
      answerCorrectOrIncorrect3.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer3.style.display = "none";
      nextLesson3.style.display = "block";
      audio03.play();
    }

    nextLesson3.addEventListener("click", function () {
      choiceItemCheck = "";
      lesson03.style.display = "none";
      lesson04.style.display = "flex";
    });
  }
}

function answerCheck4(index) {
  if (choiceItemCheck !== "") {
    checkAnswer4.disabled = true;
    if (choiceItemCheck === currentAnswers[index]) {
      answerCorrectOrIncorrect4.textContent = "Правильно!";
      answerCorrectOrIncorrect4.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer4.style.display = "none";
      nextLesson4.style.display = "block";
      rightAnswers++;
      audio04.play();
    } else {
      answerCorrectOrIncorrect4.textContent = "Неправильный ответ!";
      answerCorrectOrIncorrect4.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer4.style.display = "none";
      nextLesson4.style.display = "block";
      audio04.play();
    }

    nextLesson4.addEventListener("click", function () {
      choiceItemCheck = "";
      lesson04.style.display = "none";
      lesson05.style.display = "flex";
    });
  }
}

function answerCheck5(index) {
  if (choiceItemCheck !== "") {
    checkAnswer5.disabled = true;
    if (choiceItemCheck === currentAnswers[index]) {
      answerCorrectOrIncorrect5.textContent = "Правильно!";
      answerCorrectOrIncorrect5.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer5.style.display = "none";
      nextLesson5.style.display = "block";
      rightAnswers++;
      audio05.play();
    } else {
      answerCorrectOrIncorrect5.textContent = "Неправильный ответ!";
      answerCorrectOrIncorrect5.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer5.style.display = "none";
      nextLesson5.style.display = "block";
      audio05.play();
    }

    nextLesson5.addEventListener("click", function () {
      choiceItemCheck = "";
      lesson05.style.display = "none";
      lesson06.style.display = "flex";
    });
  }
}

function answerCheck6(index) {
  if (choiceItemCheck !== "") {
    checkAnswer6.disabled = true;
    if (choiceItemCheck === currentAnswers[index]) {
      answerCorrectOrIncorrect6.textContent = "Правильно!";
      answerCorrectOrIncorrect6.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer6.style.display = "none";
      nextLesson6.style.display = "block";
      rightAnswers++;
      audio06.play();
    } else {
      answerCorrectOrIncorrect6.textContent = "Неправильный ответ!";
      answerCorrectOrIncorrect6.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer6.style.display = "none";
      nextLesson6.style.display = "block";
      audio06.play();
    }

    nextLesson6.addEventListener("click", function () {
      choiceItemCheck = "";
      lesson06.style.display = "none";
      lesson07.style.display = "flex";
    });
  }
}

function answerCheck7(index) {
  if (choiceItemCheck !== "") {
    checkAnswer7.disabled = true;
    if (choiceItemCheck === currentAnswers[index]) {
      answerCorrectOrIncorrect7.textContent = "Правильно!";
      answerCorrectOrIncorrect7.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer7.style.display = "none";
      nextLesson7.style.display = "block";
      rightAnswers++;
      audio07.play();
    } else {
      answerCorrectOrIncorrect7.textContent = "Неправильный ответ!";
      answerCorrectOrIncorrect7.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer7.style.display = "none";
      nextLesson7.style.display = "block";
      audio07.play();
    }

    nextLesson7.addEventListener("click", function () {
      choiceItemCheck = "";
      lesson07.style.display = "none";
      lesson08.style.display = "flex";
    });
  }
}

function answerCheck8(index) {
  if (choiceItemCheck !== "") {
    checkAnswer8.disabled = true;
    if (choiceItemCheck === currentAnswers[index]) {
      answerCorrectOrIncorrect8.textContent = "Правильно!";
      answerCorrectOrIncorrect8.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer8.style.display = "none";
      nextLesson8.style.display = "block";
      rightAnswers++;
      audio08.play();
    } else {
      answerCorrectOrIncorrect8.textContent = "Неправильный ответ!";
      answerCorrectOrIncorrect8.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer8.style.display = "none";
      nextLesson8.style.display = "block";
      audio08.play();
    }

    nextLesson8.addEventListener("click", function () {
      choiceItemCheck = "";
      lesson08.style.display = "none";
      lesson09.style.display = "flex";
    });
  }
}

function answerCheck9(index) {
  if (choiceItemCheck !== "") {
    checkAnswer9.disabled = true;
    if (choiceItemCheck === currentAnswers[index]) {
      answerCorrectOrIncorrect9.textContent = "Правильно!";
      answerCorrectOrIncorrect9.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer9.style.display = "none";
      nextLesson9.style.display = "block";
      rightAnswers++;
      audio09.play();
    } else {
      answerCorrectOrIncorrect9.textContent = "Неправильный ответ!";
      answerCorrectOrIncorrect9.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer9.style.display = "none";
      nextLesson9.style.display = "block";
      audio09.play();
    }

    nextLesson9.addEventListener("click", function () {
      choiceItemCheck = "";
      lesson09.style.display = "none";
      lesson10.style.display = "flex";
    });
  }
}

function answerCheck10(index) {
  if (choiceItemCheck !== "") {
    checkAnswer10.disabled = true;
    if (choiceItemCheck === currentAnswers[index]) {
      answerCorrectOrIncorrect10.textContent = "Правильно!";
      answerCorrectOrIncorrect10.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer10.style.display = "none";
      nextLesson10.style.display = "block";
      rightAnswers++;
      audio10.play();
    } else {
      answerCorrectOrIncorrect10.textContent = "Неправильный ответ!";
      answerCorrectOrIncorrect10.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer10.style.display = "none";
      nextLesson10.style.display = "block";
      audio10.play();
    }

    nextLesson10.addEventListener("click", function () {
      choiceItemCheck = "";
      lesson10.style.display = "none";
      lesson11.style.display = "flex";
    });
  }
}

function answerCheck11(index) {
  if (choiceItemCheck !== "") {
    checkAnswer11.disabled = true;
    if (choiceItemCheck === currentAnswers[index]) {
      answerCorrectOrIncorrect11.textContent = "Правильно!";
      answerCorrectOrIncorrect11.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer11.style.display = "none";
      nextLessonBack.style.display = "flex";
      rightAnswers++;
      audio11.play();
    } else {
      answerCorrectOrIncorrect11.textContent = "Неправильный ответ!";
      answerCorrectOrIncorrect11.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer11.style.display = "none";
      nextLessonBack.style.display = "flex";
      audio11.play();
    }

    if (rightAnswers === 11) {
      allRightOrNotAnswers001 = true;
      if (beginner01.length === 1) {
        beginner01.push(2);
        saveToLocalStorage();
      }
    }
  }
}

const saveToLocalStorage = function () {
  localStorage.setItem("beginner01", JSON.stringify(beginner01));
};
