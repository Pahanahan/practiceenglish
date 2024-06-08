import arr from "../js/words.js";

// const lessonTop = document.querySelector(".lesson-top");
const lessonBox = document.querySelector(".lesson-learn__box");
const lessonTab = document.querySelector(".lesson-learn__tab");
const progressPercent = document.querySelector(".header__progress-percent");

const lessonTop1000 = document.querySelector(".lesson-top1000");
const lessonTopLearned = document.querySelector(".lesson-top__learned");

let words1000 = [];
let learnedWords = [];

if (localStorage.getItem("words1000")) {
  words1000 = JSON.parse(localStorage.getItem("words1000"));
  console.log(words1000);
} else {
  words1000 = arr.slice(0, 10000);
  console.log(words1000);
}

if (localStorage.getItem("learnedWords")) {
  learnedWords = JSON.parse(localStorage.getItem("learnedWords"));
}

let sum = words1000.length + learnedWords.length;
console.log(sum);
let newWords;

if (sum < arr.length) {
  newWords = arr.slice(sum, arr.length);
  words1000.push(newWords);
  words1000 = words1000.flat();
  saveToLocalStorage();
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function printPercentLearnedWords() {
  const percent = (learnedWords.length / 10000) * 100;
  progressPercent.textContent = `${percent.toFixed(1)}%`;
}

printPercentLearnedWords();

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

lessonTopLearned.addEventListener("click", showLearnedWords);
let sortedTrueOrFalse = false;

function showLearnedWords() {
  lessonTab.style.display = "flex";
  lessonBox.innerHTML = "";
  lessonTab.innerHTML = "";

  let learnedWordsCopy = learnedWords.slice();

  learnedWordsCopy = learnedWordsCopy.sort((a, b) => {
    if (a.word.name > b.word.name) {
      return 1;
    } else {
      return -1;
    }
  });

  const sortedBtnHTML = `<div class="lesson-learn__sort">Сортировать: <span>по алфавиту</span></div>`;

  lessonTab.insertAdjacentHTML("afterbegin", sortedBtnHTML);

  if (learnedWordsCopy.length > 0) {
    lessonBox.innerHTML = "";
    for (let i = 0; i < learnedWords.length; i++) {
      const lessonWordHTML = `<div class="lesson-learn__word">
      <p>${learnedWordsCopy[i].word.name}</p>
      <span>${learnedWordsCopy[i].word.translate[0]}</span>
      <button class="lesson-learn__audio-btn" data-audio="${learnedWordsCopy[i].audio}"><img src="img/sound.png" alt="sound"></button>
    </div>`;

      lessonBox.insertAdjacentHTML("beforeend", lessonWordHTML);
    }
  } else {
    const lessonWordHTML = `
     <div class="lesson-learn__word-none">
     <p>Вы не выучили ни одного слова, для изучения нажмите кнопку "Выучить новые слова"</p>
     </div>`;
    lessonBox.insertAdjacentHTML("beforeend", lessonWordHTML);
  }

  const audioBtnAlphabet = document.querySelectorAll(
    ".lesson-learn__audio-btn"
  );

  audioBtnAlphabet.forEach((el) => {
    el.addEventListener("click", function (event) {
      const audioPath = event.currentTarget.getAttribute("data-audio");
      const audio = new Audio(audioPath);
      audio.play();
    });
  });

  const sortBtn = document.querySelector(".lesson-learn__sort");
  const sortBtnText = document.querySelector(".lesson-learn__sort span");
  sortBtn.addEventListener("click", function () {
    sortedTrueOrFalse = !sortedTrueOrFalse;
    if (sortedTrueOrFalse) {
      lessonBox.innerHTML = "";
      for (let i = 0; i < learnedWords.length; i++) {
        const lessonWordHTML = `<div class="lesson-learn__word">
        <p>${learnedWords[i].word.name}</p>
        <span>${learnedWords[i].word.translate[0]}</span>
        <button class="lesson-learn__audio-btn" data-audio="${learnedWords[i].audio}"><img src="img/sound.png" alt="sound"></button>
      </div>`;

        lessonBox.insertAdjacentHTML("beforeend", lessonWordHTML);
      }

      const audioBtnAlphabet = document.querySelectorAll(
        ".lesson-learn__audio-btn"
      );

      audioBtnAlphabet.forEach((el) => {
        el.addEventListener("click", function (event) {
          const audioPath = event.currentTarget.getAttribute("data-audio");
          const audio = new Audio(audioPath);
          audio.play();
        });
      });
    } else {
      lessonBox.innerHTML = "";
      for (let i = 0; i < learnedWords.length; i++) {
        const lessonWordHTML = `<div class="lesson-learn__word">
        <p>${learnedWordsCopy[i].word.name}</p>
        <span>${learnedWordsCopy[i].word.translate[0]}</span>
        <button class="lesson-learn__audio-btn" data-audio="${learnedWordsCopy[i].audio}"><img src="img/sound.png" alt="sound"></button>
      </div>`;

        lessonBox.insertAdjacentHTML("beforeend", lessonWordHTML);
      }

      const audioBtnAlphabet = document.querySelectorAll(
        ".lesson-learn__audio-btn"
      );

      audioBtnAlphabet.forEach((el) => {
        el.addEventListener("click", function (event) {
          const audioPath = event.currentTarget.getAttribute("data-audio");
          const audio = new Audio(audioPath);
          audio.play();
        });
      });
    }

    sortBtnText.textContent = sortedTrueOrFalse ? "по новизне" : "по алфавиту";
  });
}

let rightAnswers = 0;

let choiceItemCheck = "";

lessonTop1000.addEventListener("click", firstLesson);

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function firstLesson() {
  rightAnswers = 0;
  lessonBox.innerHTML = "";
  lessonTab.innerHTML = "";

  const firstWord = words1000[0];
  const secondWord = words1000[1];
  const thirdWord = words1000[2];
  const fourthWord = words1000[3];
  const fifthWord = words1000[4];

  const audio = new Audio(`${firstWord.audio}`);

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите правильный перевод</div>
  <p class="lesson-learn__text-ask">${firstWord.word.translate[0]}</p>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.name}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", secondLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function secondLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[1];
  const secondWord = words1000[0];
  const thirdWord = words1000[2];
  const fourthWord = words1000[3];
  const fifthWord = words1000[4];

  const audio = new Audio(`${firstWord.audio}`);

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите правильный перевод</div>
  <p class="lesson-learn__text-ask">${firstWord.word.translate[0]}</p>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.name}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", thirdLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function thirdLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[2];
  const secondWord = words1000[0];
  const thirdWord = words1000[1];
  const fourthWord = words1000[3];
  const fifthWord = words1000[4];

  const audio = new Audio(`${firstWord.audio}`);

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите правильный перевод</div>
  <p class="lesson-learn__text-ask">${firstWord.word.translate[0]}</p>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.name}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", fourthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function fourthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[3];
  const secondWord = words1000[0];
  const thirdWord = words1000[1];
  const fourthWord = words1000[2];
  const fifthWord = words1000[4];

  const audio = new Audio(`${firstWord.audio}`);

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите правильный перевод</div>
  <p class="lesson-learn__text-ask">${firstWord.word.translate[0]}</p>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.name}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", fifthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function fifthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[4];
  const secondWord = words1000[0];
  const thirdWord = words1000[1];
  const fourthWord = words1000[2];
  const fifthWord = words1000[3];

  const audio = new Audio(`${firstWord.audio}`);

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите правильный перевод</div>
  <p class="lesson-learn__text-ask">${firstWord.word.translate[0]}</p>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.name}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", sixthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function sixthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[0];
  const secondWord = words1000[1];
  const thirdWord = words1000[2];
  const fourthWord = words1000[3];
  const fifthWord = words1000[4];

  const audio = new Audio(`${firstWord.audio}`);

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите правильный перевод</div>
  <p class="lesson-learn__text-ask">${firstWord.word.name}</p>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.translate[0]}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.translate[0]) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", seventhLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function seventhLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[1];
  const secondWord = words1000[0];
  const thirdWord = words1000[2];
  const fourthWord = words1000[3];
  const fifthWord = words1000[4];

  const audio = new Audio(`${firstWord.audio}`);

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите правильный перевод</div>
  <p class="lesson-learn__text-ask">${firstWord.word.name}</p>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.translate[0]}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.translate[0]) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", eighthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function eighthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[2];
  const secondWord = words1000[0];
  const thirdWord = words1000[1];
  const fourthWord = words1000[3];
  const fifthWord = words1000[4];

  const audio = new Audio(`${firstWord.audio}`);

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите правильный перевод</div>
  <p class="lesson-learn__text-ask">${firstWord.word.name}</p>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.translate[0]}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.translate[0]) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", ninthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function ninthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[3];
  const secondWord = words1000[0];
  const thirdWord = words1000[1];
  const fourthWord = words1000[2];
  const fifthWord = words1000[4];

  const audio = new Audio(`${firstWord.audio}`);

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите правильный перевод</div>
  <p class="lesson-learn__text-ask">${firstWord.word.name}</p>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.translate[0]}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.translate[0]) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", tenthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function tenthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[4];
  const secondWord = words1000[0];
  const thirdWord = words1000[1];
  const fourthWord = words1000[2];
  const fifthWord = words1000[3];

  const audio = new Audio(`${firstWord.audio}`);
  audio.play();

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите правильный перевод</div>
  <p class="lesson-learn__text-ask">${firstWord.word.name}</p>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.translate[0]}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.translate[0]) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", eleventhLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function eleventhLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[0];
  const secondWord = words1000[1];
  const thirdWord = words1000[2];
  const fourthWord = words1000[3];
  const fifthWord = words1000[4];

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите услышанное</div>
  <div class="lesson-learn__audio-box">
    <div class="lesson-learn__audio">
      <img src="img/microphone.png" alt="microphone" />
    </div>
  </div>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.name}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const audio = new Audio(`${firstWord.audio}`);
  audio.play();

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );
  const audioBtn = document.querySelector(".lesson-learn__audio-box");

  audioBtn.addEventListener("click", function () {
    audio.play();
  });

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", twelfthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function twelfthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[1];
  const secondWord = words1000[0];
  const thirdWord = words1000[2];
  const fourthWord = words1000[3];
  const fifthWord = words1000[4];

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите услышанное</div>
  <div class="lesson-learn__audio-box">
    <div class="lesson-learn__audio">
      <img src="img/microphone.png" alt="microphone" />
    </div>
  </div>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.name}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const audio = new Audio(`${firstWord.audio}`);
  audio.play();

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );
  const audioBtn = document.querySelector(".lesson-learn__audio-box");

  audioBtn.addEventListener("click", function () {
    audio.play();
  });

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", thirteenthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function thirteenthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[2];
  const secondWord = words1000[0];
  const thirdWord = words1000[1];
  const fourthWord = words1000[3];
  const fifthWord = words1000[4];

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите услышанное</div>
  <div class="lesson-learn__audio-box">
    <div class="lesson-learn__audio">
      <img src="img/microphone.png" alt="microphone" />
    </div>
  </div>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.name}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const audio = new Audio(`${firstWord.audio}`);
  audio.play();

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );
  const audioBtn = document.querySelector(".lesson-learn__audio-box");

  audioBtn.addEventListener("click", function () {
    audio.play();
  });

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", fourteenthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function fourteenthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[3];
  const secondWord = words1000[0];
  const thirdWord = words1000[1];
  const fourthWord = words1000[4];
  const fifthWord = words1000[2];

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите услышанное</div>
  <div class="lesson-learn__audio-box">
    <div class="lesson-learn__audio">
      <img src="img/microphone.png" alt="microphone" />
    </div>
  </div>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.name}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const audio = new Audio(`${firstWord.audio}`);
  audio.play();

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );
  const audioBtn = document.querySelector(".lesson-learn__audio-box");

  audioBtn.addEventListener("click", function () {
    audio.play();
  });

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", fifteenthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function fifteenthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[4];
  const secondWord = words1000[0];
  const thirdWord = words1000[1];
  const fourthWord = words1000[3];
  const fifthWord = words1000[2];

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите услышанное</div>
  <div class="lesson-learn__audio-box">
    <div class="lesson-learn__audio">
      <img src="img/microphone.png" alt="microphone" />
    </div>
  </div>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.name}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.name}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const audio = new Audio(`${firstWord.audio}`);
  audio.play();

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );
  const audioBtn = document.querySelector(".lesson-learn__audio-box");

  audioBtn.addEventListener("click", function () {
    audio.play();
  });

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", sixteenthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function sixteenthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[0];
  const secondWord = words1000[1];
  const thirdWord = words1000[2];
  const fourthWord = words1000[3];
  const fifthWord = words1000[4];

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите услышанное</div>
  <div class="lesson-learn__audio-box">
    <div class="lesson-learn__audio">
      <img src="img/microphone.png" alt="microphone" />
    </div>
  </div>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.translate[0]}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const audio = new Audio(`${firstWord.audio}`);
  audio.play();

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );
  const audioBtn = document.querySelector(".lesson-learn__audio-box");

  audioBtn.addEventListener("click", function () {
    audio.play();
  });

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.translate[0]) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.translate[0]}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", seventeenthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function seventeenthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[1];
  const secondWord = words1000[0];
  const thirdWord = words1000[2];
  const fourthWord = words1000[3];
  const fifthWord = words1000[4];

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите услышанное</div>
  <div class="lesson-learn__audio-box">
    <div class="lesson-learn__audio">
      <img src="img/microphone.png" alt="microphone" />
    </div>
  </div>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.translate[0]}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const audio = new Audio(`${firstWord.audio}`);
  audio.play();

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );
  const audioBtn = document.querySelector(".lesson-learn__audio-box");

  audioBtn.addEventListener("click", function () {
    audio.play();
  });

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.translate[0]) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.translate[0]}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", eighteenthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function eighteenthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[2];
  const secondWord = words1000[0];
  const thirdWord = words1000[1];
  const fourthWord = words1000[3];
  const fifthWord = words1000[4];

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите услышанное</div>
  <div class="lesson-learn__audio-box">
    <div class="lesson-learn__audio">
      <img src="img/microphone.png" alt="microphone" />
    </div>
  </div>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.translate[0]}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const audio = new Audio(`${firstWord.audio}`);
  audio.play();

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );
  const audioBtn = document.querySelector(".lesson-learn__audio-box");

  audioBtn.addEventListener("click", function () {
    audio.play();
  });

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.translate[0]) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.translate[0]}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", nineteenthLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function nineteenthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[3];
  const secondWord = words1000[0];
  const thirdWord = words1000[1];
  const fourthWord = words1000[2];
  const fifthWord = words1000[4];

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите услышанное</div>
  <div class="lesson-learn__audio-box">
    <div class="lesson-learn__audio">
      <img src="img/microphone.png" alt="microphone" />
    </div>
  </div>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.translate[0]}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const audio = new Audio(`${firstWord.audio}`);
  audio.play();

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );
  const audioBtn = document.querySelector(".lesson-learn__audio-box");

  audioBtn.addEventListener("click", function () {
    audio.play();
  });

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.translate[0]) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.translate[0]}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", twentiethLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function twentiethLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[4];
  const secondWord = words1000[0];
  const thirdWord = words1000[1];
  const fourthWord = words1000[2];
  const fifthWord = words1000[3];

  const arrWords = [firstWord, secondWord, thirdWord, fourthWord, fifthWord];

  for (let i = arrWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrWords[i], arrWords[j]] = [arrWords[j], arrWords[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Выберите услышанное</div>
  <div class="lesson-learn__audio-box">
    <div class="lesson-learn__audio">
      <img src="img/microphone.png" alt="microphone" />
    </div>
  </div>
  <div class="lesson-learn__box-choice">
    <div class="lesson-learn__choice-item">${arrWords[0].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[1].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[2].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[3].word.translate[0]}</div>
    <div class="lesson-learn__choice-item">${arrWords[4].word.translate[0]}</div>
  </div>
  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const audio = new Audio(`${firstWord.audio}`);
  audio.play();

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");
  const checkAnswer = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );
  const audioBtn = document.querySelector(".lesson-learn__audio-box");

  audioBtn.addEventListener("click", function () {
    audio.play();
  });

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

  function answerCheck() {
    if (choiceItemCheck === firstWord.word.translate[0]) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.translate[0]}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      checkAnswer.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkAnswer.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", twentyFirstLesson);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function twentyFirstLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[0];

  const audio = new Audio(`${firstWord.audio}`);

  const firstWordArr = firstWord.word.name.split("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  while (firstWordArr.length < 7) {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    firstWordArr.push(randomLetter);
  }

  for (let i = firstWordArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [firstWordArr[i], firstWordArr[j]] = [firstWordArr[j], firstWordArr[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Составьте перевод слова из предложенных букв</div>

  <div class="lesson-learn__phrase">${firstWord.word.translate[0]}</div>

  <div class="lesson-learn__block-strings-answer1"></div>

  <div class="lesson-learn__block-strings"></div>

  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const lessonBlock = document.querySelector(".lesson-learn__block-strings");
  const lessonBlockAnswer = document.querySelector(
    ".lesson-learn__block-strings-answer1"
  );
  const checkWord = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

  firstWordArr.forEach((letter, index) => {
    const lessonItemHTML = `<div class="lesson-learn__block-str${
      index + 2
    } lesson-learn__choice-item">${letter}</div>`;
    lessonBlock.insertAdjacentHTML("beforeend", lessonItemHTML);
  });

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");

  choiceItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.parentElement === lessonBlock) {
        lessonBlockAnswer.appendChild(item);
        item.classList.add("str__answer");
      } else {
        lessonBlock.appendChild(item);
        item.classList.remove("str__answer");
      }
    });
  });

  function answerCheck() {
    const answerLetters = Array.from(
      document.querySelectorAll(
        ".lesson-learn__block-strings-answer1 .lesson-learn__choice-item"
      )
    ).map((item) => item.textContent);

    const answerString = answerLetters.join("");

    if (answerString === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkWord.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkWord.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkWord.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", twentySecondLesson);
  console.log(rightAnswers);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function twentySecondLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[1];

  const audio = new Audio(`${firstWord.audio}`);

  const firstWordArr = firstWord.word.name.split("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  while (firstWordArr.length < 7) {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    firstWordArr.push(randomLetter);
  }

  for (let i = firstWordArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [firstWordArr[i], firstWordArr[j]] = [firstWordArr[j], firstWordArr[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Составьте перевод слова из предложенных букв</div>

  <div class="lesson-learn__phrase">${firstWord.word.translate[0]}</div>

  <div class="lesson-learn__block-strings-answer1"></div>

  <div class="lesson-learn__block-strings"></div>

  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const lessonBlock = document.querySelector(".lesson-learn__block-strings");
  const lessonBlockAnswer = document.querySelector(
    ".lesson-learn__block-strings-answer1"
  );
  const checkWord = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

  firstWordArr.forEach((letter, index) => {
    const lessonItemHTML = `<div class="lesson-learn__block-str${
      index + 2
    } lesson-learn__choice-item">${letter}</div>`;
    lessonBlock.insertAdjacentHTML("beforeend", lessonItemHTML);
  });

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");

  choiceItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.parentElement === lessonBlock) {
        lessonBlockAnswer.appendChild(item);
        item.classList.add("str__answer");
      } else {
        lessonBlock.appendChild(item);
        item.classList.remove("str__answer");
      }
    });
  });

  function answerCheck() {
    const answerLetters = Array.from(
      document.querySelectorAll(
        ".lesson-learn__block-strings-answer1 .lesson-learn__choice-item"
      )
    ).map((item) => item.textContent);

    const answerString = answerLetters.join("");

    if (answerString === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkWord.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkWord.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkWord.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", twentyThirdLesson);

  console.log(rightAnswers);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function twentyThirdLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[2];

  const audio = new Audio(`${firstWord.audio}`);

  const firstWordArr = firstWord.word.name.split("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  while (firstWordArr.length < 7) {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    firstWordArr.push(randomLetter);
  }

  for (let i = firstWordArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [firstWordArr[i], firstWordArr[j]] = [firstWordArr[j], firstWordArr[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Составьте перевод слова из предложенных букв</div>

  <div class="lesson-learn__phrase">${firstWord.word.translate[0]}</div>

  <div class="lesson-learn__block-strings-answer1"></div>

  <div class="lesson-learn__block-strings"></div>

  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const lessonBlock = document.querySelector(".lesson-learn__block-strings");
  const lessonBlockAnswer = document.querySelector(
    ".lesson-learn__block-strings-answer1"
  );
  const checkWord = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

  firstWordArr.forEach((letter, index) => {
    const lessonItemHTML = `<div class="lesson-learn__block-str${
      index + 2
    } lesson-learn__choice-item">${letter}</div>`;
    lessonBlock.insertAdjacentHTML("beforeend", lessonItemHTML);
  });

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");

  choiceItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.parentElement === lessonBlock) {
        lessonBlockAnswer.appendChild(item);
        item.classList.add("str__answer");
      } else {
        lessonBlock.appendChild(item);
        item.classList.remove("str__answer");
      }
    });
  });

  function answerCheck() {
    const answerLetters = Array.from(
      document.querySelectorAll(
        ".lesson-learn__block-strings-answer1 .lesson-learn__choice-item"
      )
    ).map((item) => item.textContent);

    const answerString = answerLetters.join("");

    if (answerString === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkWord.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkWord.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkWord.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", twentyfourthLesson);

  console.log(rightAnswers);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function twentyfourthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[3];

  const audio = new Audio(`${firstWord.audio}`);

  const firstWordArr = firstWord.word.name.split("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  while (firstWordArr.length < 7) {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    firstWordArr.push(randomLetter);
  }

  for (let i = firstWordArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [firstWordArr[i], firstWordArr[j]] = [firstWordArr[j], firstWordArr[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Составьте перевод слова из предложенных букв</div>

  <div class="lesson-learn__phrase">${firstWord.word.translate[0]}</div>

  <div class="lesson-learn__block-strings-answer1"></div>

  <div class="lesson-learn__block-strings"></div>

  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const lessonBlock = document.querySelector(".lesson-learn__block-strings");
  const lessonBlockAnswer = document.querySelector(
    ".lesson-learn__block-strings-answer1"
  );
  const checkWord = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

  firstWordArr.forEach((letter, index) => {
    const lessonItemHTML = `<div class="lesson-learn__block-str${
      index + 2
    } lesson-learn__choice-item">${letter}</div>`;
    lessonBlock.insertAdjacentHTML("beforeend", lessonItemHTML);
  });

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");

  choiceItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.parentElement === lessonBlock) {
        lessonBlockAnswer.appendChild(item);
        item.classList.add("str__answer");
      } else {
        lessonBlock.appendChild(item);
        item.classList.remove("str__answer");
      }
    });
  });

  function answerCheck() {
    const answerLetters = Array.from(
      document.querySelectorAll(
        ".lesson-learn__block-strings-answer1 .lesson-learn__choice-item"
      )
    ).map((item) => item.textContent);

    const answerString = answerLetters.join("");

    if (answerString === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkWord.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkWord.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkWord.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", twentyfifthLesson);

  console.log(rightAnswers);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function twentyfifthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[4];

  const audio = new Audio(`${firstWord.audio}`);

  const firstWordArr = firstWord.word.name.split("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  while (firstWordArr.length < 7) {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    firstWordArr.push(randomLetter);
  }

  for (let i = firstWordArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [firstWordArr[i], firstWordArr[j]] = [firstWordArr[j], firstWordArr[i]];
  }

  const lessonHTML = `<div class="lesson-learn__text">Составьте перевод слова из предложенных букв</div>

  <div class="lesson-learn__phrase">${firstWord.word.translate[0]}</div>

  <div class="lesson-learn__block-strings-answer1"></div>

  <div class="lesson-learn__block-strings"></div>

  <button class="lesson-learn__check">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", lessonHTML);

  const lessonBlock = document.querySelector(".lesson-learn__block-strings");
  const lessonBlockAnswer = document.querySelector(
    ".lesson-learn__block-strings-answer1"
  );
  const checkWord = document.querySelector(".lesson-learn__check");
  const nextLesson = document.querySelector(".lesson-learn__next");
  const answerCorrectOrIncorrect = document.querySelector(
    ".lesson-learn__box-answer"
  );

  firstWordArr.forEach((letter, index) => {
    const lessonItemHTML = `<div class="lesson-learn__block-str${
      index + 2
    } lesson-learn__choice-item">${letter}</div>`;
    lessonBlock.insertAdjacentHTML("beforeend", lessonItemHTML);
  });

  const choiceItems = document.querySelectorAll(".lesson-learn__choice-item");

  choiceItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.parentElement === lessonBlock) {
        lessonBlockAnswer.appendChild(item);
        item.classList.add("str__answer");
      } else {
        lessonBlock.appendChild(item);
        item.classList.remove("str__answer");
      }
    });
  });

  function answerCheck() {
    const answerLetters = Array.from(
      document.querySelectorAll(
        ".lesson-learn__block-strings-answer1 .lesson-learn__choice-item"
      )
    ).map((item) => item.textContent);

    const answerString = answerLetters.join("");

    if (answerString === firstWord.word.name) {
      answerCorrectOrIncorrect.textContent = "Правильный ответ";
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__correct"
      );
      audio.play();
      checkWord.style.display = "none";
      nextLesson.style.display = "block";
      rightAnswers++;
    } else {
      answerCorrectOrIncorrect.textContent = `Правильный ответ '${firstWord.word.name}'`;
      answerCorrectOrIncorrect.classList.add(
        "lesson-learn__box-answer__incorrect"
      );
      audio.play();
      checkWord.style.display = "none";
      nextLesson.style.display = "block";
    }
  }

  checkWord.addEventListener("click", answerCheck);

  nextLesson.addEventListener("click", twentysixthLesson);

  console.log(rightAnswers);
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function twentysixthLesson() {
  lessonBox.innerHTML = "";

  const firstWord = words1000[0];
  const secondWord = words1000[1];
  const thirdWord = words1000[2];
  const fourthWord = words1000[3];
  const fifthWord = words1000[4];

  const englishWords = [
    firstWord,
    secondWord,
    thirdWord,
    fourthWord,
    fifthWord,
  ];
  const englishWordsCopy = englishWords.slice();

  const russianWords = englishWords.map((word) => word.word.translate[0]);
  const russianWordsCopy = russianWords.slice();

  const gridBlockHTML = `<div class="lesson-learn__text">Запомните перевод</div>
  <div class="lesson-learn__grid">
    <div class="lesson-learn__box-choice"></div>
    <div class="lesson-learn__box-choice2"></div>
  </div>

  <div class="lesson-learn__box-strings"></div>

  <button class="lesson-learn__mix">Перемешать</button>
  <button class="lesson-learn__check-str">Проверить</button>
  <button class="lesson-learn__next">Далее</button>
  <div class="lesson-learn__box-answer fade"></div>`;

  lessonBox.insertAdjacentHTML("afterbegin", gridBlockHTML);

  const lessonText = document.querySelector(".lesson-learn__text");
  const lessonBoxChoice = document.querySelector(".lesson-learn__box-choice");
  const lessonBoxChoice2 = document.querySelector(".lesson-learn__box-choice2");
  const lessonBoxStrings = document.querySelector(".lesson-learn__box-strings");
  const lessonMixBtn = document.querySelector(".lesson-learn__mix");
  const lessonCheckBtn = document.querySelector(".lesson-learn__check-str");
  const lessonNext = document.querySelector(".lesson-learn__next");

  englishWordsCopy.forEach((word) => {
    const wordHTML = `<div class="lesson-learn__grid-item">${word.word.name}</div>`;
    lessonBoxChoice.insertAdjacentHTML("beforeend", wordHTML);
  });

  russianWordsCopy.forEach((item) => {
    const wordHTML = `<div class="lesson-learn__grid-item">${item}</div>`;
    lessonBoxChoice2.insertAdjacentHTML("beforeend", wordHTML);
  });

  for (let i = russianWordsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [russianWordsCopy[i], russianWordsCopy[j]] = [
      russianWordsCopy[j],
      russianWordsCopy[i],
    ];
  }

  lessonMixBtn.addEventListener("click", function () {
    lessonText.textContent = "Соотнесите слова с верным переводом";

    const choice2Items = lessonBoxChoice2.querySelectorAll(
      ".lesson-learn__grid-item"
    );

    choice2Items.forEach((item) => {
      item.textContent = "";
    });

    lessonBoxStrings.innerHTML = "";
    russianWordsCopy.forEach((item) => {
      const lessonBoxStrHtml = `<div class="lesson-learn__box-str">${item}</div>`;
      lessonBoxStrings.insertAdjacentHTML("beforeend", lessonBoxStrHtml);
    });

    lessonBoxStrings.style.display = "flex";
    lessonMixBtn.style.display = "none";
    lessonCheckBtn.style.display = "block";

    let boxChoiceItems = lessonBoxChoice2.querySelectorAll(
      ".lesson-learn__grid-item"
    );
    const boxStrItems = lessonBoxStrings.querySelectorAll(
      ".lesson-learn__box-str"
    );

    let currentIndex = 0;

    boxStrItems.forEach((item) => {
      item.addEventListener("click", function () {
        boxChoiceItems[currentIndex].textContent = item.innerText;
        currentIndex++;
      });
    });

    for (const item of boxStrItems) {
      item.addEventListener("click", function () {
        item.style.display = "none";
      });
    }

    lessonCheckBtn.addEventListener("click", function () {
      const answerBox = document.querySelector(".lesson-learn__box-answer");

      const boxChoiceItems2 = lessonBoxChoice2.querySelectorAll(
        ".lesson-learn__grid-item"
      );

      let currentItemPastValue = 0;
      let answerCorrect = 0;
      for (const item of boxChoiceItems2) {
        if (item.innerText.length > 0) {
          currentItemPastValue++;
        }
      }

      if (currentItemPastValue === 5) {
        if (
          englishWords[0].word.translate[0] === boxChoiceItems2[0].innerText
        ) {
          boxChoiceItems2[0].style.backgroundColor = "#13b113";
          answerCorrect++;
          rightAnswers++;
        } else {
          boxChoiceItems2[0].style.backgroundColor = "#db5353";
        }
        if (
          englishWords[1].word.translate[0] === boxChoiceItems2[1].innerText
        ) {
          boxChoiceItems2[1].style.backgroundColor = "#13b113";
          answerCorrect++;
          rightAnswers++;
        } else {
          boxChoiceItems2[1].style.backgroundColor = "#db5353";
        }
        if (
          englishWords[2].word.translate[0] === boxChoiceItems2[2].innerText
        ) {
          boxChoiceItems2[2].style.backgroundColor = "#13b113";
          answerCorrect++;
          rightAnswers++;
        } else {
          boxChoiceItems2[2].style.backgroundColor = "#db5353";
        }
        if (
          englishWords[3].word.translate[0] === boxChoiceItems2[3].innerText
        ) {
          boxChoiceItems2[3].style.backgroundColor = "#13b113";
          answerCorrect++;
          rightAnswers++;
        } else {
          boxChoiceItems2[3].style.backgroundColor = "#db5353";
        }
        if (
          englishWords[4].word.translate[0] === boxChoiceItems2[4].innerText
        ) {
          boxChoiceItems2[4].style.backgroundColor = "#13b113";
          answerCorrect++;
          rightAnswers++;
        } else {
          boxChoiceItems2[4].style.backgroundColor = "#db5353";
        }
        if (answerCorrect === 5) {
          answerBox.classList.add("lesson-learn__box-answer__correct");
          answerBox.textContent = "Правильно!";
        } else if (answerCorrect > 0) {
          answerBox.classList.add("lesson-learn__box-answer__incorrect");
          answerBox.textContent = "Вы допустили ошибку!";
        } else if (answerCorrect === 0) {
          answerBox.classList.add("lesson-learn__box-answer__incorrect");
          answerBox.textContent = "Ни одного правильного ответа!";
        }
        answerBox.style.display = "flex";
        lessonCheckBtn.style.display = "none";
        lessonNext.style.display = "block";

        lessonNext.addEventListener("click", function () {
          lessonBox.innerHTML = "";
          // lessonTop.style.display = "flex";
          const lessonCountWords = document.querySelector(
            ".lesson-learn__count-words"
          );
          if (rightAnswers >= 25) {
            learnedWords = learnedWords.concat(words1000.slice(0, 5));
            words1000 = words1000.slice(5);
            saveToLocalStorage();
            printPercentLearnedWords();
            lessonCountWords.style.display = "flex";
            lessonCountWords.style.backgroundColor = "#57da57";
            lessonCountWords.textContent = "Вы выучили 5 слов!";
            setTimeout(() => {
              lessonCountWords.style.display = "none";
            }, 3000);
          } else {
            printPercentLearnedWords();
            lessonCountWords.style.display = "flex";
            lessonCountWords.style.backgroundColor = "#da6057";
            lessonCountWords.textContent =
              "Вы допустули много ошибок, попробуйте еще раз";
            setTimeout(() => {
              lessonCountWords.style.display = "none";
            }, 3000);
          }
        });
      }
    });
  });
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function saveToLocalStorage() {
  localStorage.setItem("words1000", JSON.stringify(words1000));
  localStorage.setItem("learnedWords", JSON.stringify(learnedWords));
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// Check Error
for (let i = 0; i < arr.length; i++) {
  if (arr[i].audio) {
    if (arr[i].audio.includes("_")) {
      console.log(arr[i].num, "Нужно удалить символ '_'");
    }
    if (
      arr[i].word.name !==
      arr[i].audio.replace("audio/", "").replace(".wav", "")
    ) {
      console.log(
        arr[i],
        arr[i].word.name,
        arr[i].audio.replace("audio/", "").replace(".wav", ""),
        "Нужно поменять название 'name' or 'audio'"
      );
    }
  } else {
    console.log(arr[i].num, "Нужно добавить в object audio");
  }
}

// Check in object.word.translate "/"
for (let i = 0; i < arr.length; i++) {
  const slesh = arr[i].word.translate.join("");
  if (slesh.includes(NaN)) {
    console.log(slesh, arr[i].num, "В этом объекте присутствует знак '/'");
  }
}

// Check audio play and text word.name
function checkAudio(arr, first, second) {
  let currentIndex = first;

  function playNext() {
    if (currentIndex < second) {
      const audioPlay = new Audio(`${arr[currentIndex].audio}`);
      audioPlay.play();
      const itemHTML = `<div class="lesson-learn__text">${arr[currentIndex].word.name}</div>`;

      lessonBox.innerHTML = ""; // Очищаем перед добавлением нового элемента
      lessonBox.insertAdjacentHTML("afterbegin", itemHTML);

      currentIndex++;
      setTimeout(playNext, 2000); // Запускаем следующую итерацию через 2 секунды
    }
  }

  playNext(); // Запускаем первую итерацию
}

// checkAudio(arr, 51, 71); tell
