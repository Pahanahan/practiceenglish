const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");

const checkAnswer = document.querySelector(".lesson-learn__check");

const answerCorrectOrIncorrect = document.querySelector(
  ".lesson-learn__box-answer"
);

const currentAnswers = ["really", 'we'];

let choiceItemCheck = "";

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
  console.log(choiceItemCheck);

  checkAnswer.addEventListener("click", answerCheck);
}

function answerCheck(event) {
  event.preventDefault();
  if (choiceItemCheck === currentAnswers[0]) {
    checkAnswer.textContent = "Далее";
    checkAnswer.classList.add("lesson-learn__next");
    answerCorrectOrIncorrect.style.display = "flex";
    answerCorrectOrIncorrect.textContent = "Правильно!";
    answerCorrectOrIncorrect.classList.add("lesson-learn__box-answer__correct");
  } else {
    checkAnswer.textContent = "Далее";
    checkAnswer.classList.add("lesson-learn__next");
    answerCorrectOrIncorrect.style.display = "flex";
    answerCorrectOrIncorrect.textContent = "Неправильный ответ!";
    answerCorrectOrIncorrect.classList.add(
      "lesson-learn__box-answer__incorrect"
    );
  }

  const nextAnswer = document.querySelector(".lesson-learn__next");

  nextAnswer.addEventListener("click", nextSlideLesson);
}

function nextSlideLesson(event) {
  event.preventDefault();
}