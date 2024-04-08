const lesson01 = document.querySelector(".lesson01");
const lesson02 = document.querySelector(".lesson02");
const lesson03 = document.querySelector(".lesson03");
const lesson04 = document.querySelector(".lesson04");
const lesson05 = document.querySelector(".lesson05");
const lesson06 = document.querySelector(".lesson06");
const lesson07 = document.querySelector(".lesson07");

const stringChoice = document.querySelector(".lesson-learn__block-str");
const stringChoice2 = document.querySelector(".lesson-learn__block-str2");
const stringChoice3 = document.querySelector(".lesson-learn__block-str3");
const stringChoice4 = document.querySelector(".lesson-learn__block-str4");
const stringChoice5 = document.querySelector(".lesson-learn__block-str5");
const stringChoice6 = document.querySelector(".lesson-learn__block-str6");
const stringChoice7 = document.querySelector(".lesson-learn__block-str7");
const stringChoice8 = document.querySelector(".lesson-learn__block-str8");
const stringChoice9 = document.querySelector(".lesson-learn__block-str9");
const stringChoice10 = document.querySelector(".lesson-learn__block-str10");
const stringChoice11 = document.querySelector(".lesson-learn__block-str11");
const stringChoice12 = document.querySelector(".lesson-learn__block-str12");
const stringChoice13 = document.querySelector(".lesson-learn__block-str13");
const stringChoice14 = document.querySelector(".lesson-learn__block-str14");
const stringChoice15 = document.querySelector(".lesson-learn__block-str15");
const stringChoice16 = document.querySelector(".lesson-learn__block-str16");
const stringChoice17 = document.querySelector(".lesson-learn__block-str17");
const stringChoice18 = document.querySelector(".lesson-learn__block-str18");
const stringChoice19 = document.querySelector(".lesson-learn__block-str19");
const stringChoice20 = document.querySelector(".lesson-learn__block-str20");
const stringChoice21 = document.querySelector(".lesson-learn__block-str21");
const stringChoice22 = document.querySelector(".lesson-learn__block-str22");
const stringChoice23 = document.querySelector(".lesson-learn__block-str23");
const stringChoice24 = document.querySelector(".lesson-learn__block-str24");
const stringChoice25 = document.querySelector(".lesson-learn__block-str25");
const stringChoice26 = document.querySelector(".lesson-learn__block-str26");
const stringChoice27 = document.querySelector(".lesson-learn__block-str27");
const stringChoice28 = document.querySelector(".lesson-learn__block-str28");
const stringChoice29 = document.querySelector(".lesson-learn__block-str29");
const stringChoice30 = document.querySelector(".lesson-learn__block-str30");

const checkPhrase = document.querySelector(".lesson-learn__check");
const checkPhrase2 = document.querySelector(".lesson-learn__check2");
const checkPhrase3 = document.querySelector(".lesson-learn__check3");
const checkPhrase4 = document.querySelector(".lesson-learn__check4");
const checkPhrase5 = document.querySelector(".lesson-learn__check5");
const checkPhrase6 = document.querySelector(".lesson-learn__check6");
const checkPhrase7 = document.querySelector(".lesson-learn__check7");

const nextBtn = document.querySelector(".lesson-learn__next");
const nextBtn2 = document.querySelector(".lesson-learn__next2");
const nextBtn3 = document.querySelector(".lesson-learn__next3");
const nextBtn4 = document.querySelector(".lesson-learn__next4");
const nextBtn5 = document.querySelector(".lesson-learn__next5");
const nextBtn6 = document.querySelector(".lesson-learn__next6");
const nextBtn7 = document.querySelector(".lesson-learn__next7");

const answerRightOrNot = document.querySelector(".lesson-learn__box-answer");
const answerRightOrNot2 = document.querySelector(".lesson-learn__box-answer2");
const answerRightOrNot3 = document.querySelector(".lesson-learn__box-answer3");
const answerRightOrNot4 = document.querySelector(".lesson-learn__box-answer4");
const answerRightOrNot5 = document.querySelector(".lesson-learn__box-answer5");
const answerRightOrNot6 = document.querySelector(".lesson-learn__box-answer6");
const answerRightOrNot7 = document.querySelector(".lesson-learn__box-answer7");

const boxLessonsStrings = document.querySelector(
  ".lesson-learn__block-strings"
);
const boxLessonsStrings2 = document.querySelector(
  ".lesson-learn__block-strings2"
);
const boxLessonsStrings3 = document.querySelector(
  ".lesson-learn__block-strings3"
);
const boxLessonsStrings4 = document.querySelector(
  ".lesson-learn__block-strings4"
);
const boxLessonsStrings5 = document.querySelector(
  ".lesson-learn__block-strings5"
);
const boxLessonsStrings6 = document.querySelector(
  ".lesson-learn__block-strings6"
);
const boxLessonsStrings7 = document.querySelector(
  ".lesson-learn__block-strings7"
);

const stringsArray = [stringChoice, stringChoice2, stringChoice3];
const stringsArray2 = [
  stringChoice4,
  stringChoice5,
  stringChoice6,
  stringChoice7,
  stringChoice8,
];
const stringsArray3 = [
  stringChoice9,
  stringChoice10,
  stringChoice11,
  stringChoice12,
];
const stringsArray4 = [
  stringChoice13,
  stringChoice14,
  stringChoice15,
  stringChoice16,
];
const stringsArray5 = [stringChoice17, stringChoice18, stringChoice19];
const stringsArray6 = [
  stringChoice20,
  stringChoice21,
  stringChoice22,
  stringChoice23,
];
const stringsArray7 = [
  stringChoice24,
  stringChoice25,
  stringChoice26,
  stringChoice27,
];

const stringsArrays = [stringsArray, stringsArray2, stringsArray3, stringsArray4, stringsArray5, stringsArray6, stringsArray7];

const boxLessonsStringsArray = [boxLessonsStrings, boxLessonsStrings2, boxLessonsStrings3, boxLessonsStrings4, boxLessonsStrings5, boxLessonsStrings6, boxLessonsStrings7];

const audio01 = new Audio("audio04/i_understand_you.wav");
const audio02 = new Audio("audio04/they_live_in_this_country.wav");
const audio03 = new Audio("audio04/i_travel_every_year.wav");
const audio04 = new Audio("audio04/i_also_think_so.wav");
const audio05 = new Audio("audio04/i_speak_english.wav");
const audio06 = new Audio("audio04/i_go_to_work.wav");
const audio07 = new Audio("audio04/i_like_this_language.wav");

const answersArray = [
  "I understand you",
  "They live in this country",
  "I travel every year",
  "I also think so",
  "I speak English",
  "I go to work",
  "I like this language",
];

let rightAnswers = 0;

let beginner01 = JSON.parse(localStorage.getItem("beginner01"));

for (let i = 0; i < stringsArrays.length; i++) {
  const stringsArray = stringsArrays[i];
  const boxLessonsStrings = boxLessonsStringsArray[i];

  stringsArray.forEach((stringChoice) => {
    stringChoice.addEventListener("click", function () {
      pasteInPhrase(boxLessonsStrings, stringChoice);
    });
  });
}


function pasteInPhrase(boxLessonsStrings, stringChoice) {
  boxLessonsStrings.textContent += " ";
  boxLessonsStrings.textContent += stringChoice.innerText;
  boxLessonsStrings.style.backgroundColor = "#fff";
  stringChoice.style.display = "none";
}

function checkPhrases(
  boxLessonsStrings,
  lessonCheck,
  index,
  answerRightOrNot,
  nextLesson,
  audio,
) {
  if (boxLessonsStrings.textContent.length > 0) {
  //   lessonCheck.disabled = true;
  //   // нужно доработать не всегда работает кнопка
  // } else {
  //   lessonCheck.disabled = false;
  //   // надо доработать не убирается disabled

    if (boxLessonsStrings.textContent.trim() === answersArray[index]) {
      lessonCheck.style.display = "none";
      nextLesson.style.display = "block";
      answerRightOrNot.style.display = "flex";
      answerRightOrNot.classList.add("lesson-learn__box-answer__correct");
      answerRightOrNot.textContent = "Правильно!";
      audio.play();
      rightAnswers++;
    } else {
      lessonCheck.style.display = "none";
      nextLesson.style.display = "block";
      answerRightOrNot.style.display = "flex";
      answerRightOrNot.classList.add("lesson-learn__box-answer__incorrect");
      answerRightOrNot.textContent = `Правильный ответ:\n ${answersArray[index]}`;
      audio.play();
    }
  }
}

function lessonNext(lesson1, lesson2) {
  lesson1.style.display = "none";
  lesson2.style.display = "flex";
}

checkPhrase.addEventListener("click", function () {
  checkPhrases(
    boxLessonsStrings,
    checkPhrase,
    0,
    answerRightOrNot,
    nextBtn,
    audio01,
  );
});

nextBtn.addEventListener("click", function () {
  lessonNext(lesson01, lesson02);
});

checkPhrase2.addEventListener("click", function () {
  checkPhrases(
    boxLessonsStrings2,
    checkPhrase2,
    1,
    answerRightOrNot2,
    nextBtn2,
    audio02,
  );
});

nextBtn2.addEventListener("click", function () {
  lessonNext(lesson02, lesson03);
});

checkPhrase3.addEventListener("click", function () {
  checkPhrases(
    boxLessonsStrings3,
    checkPhrase3,
    2,
    answerRightOrNot3,
    nextBtn3,
    audio03
  );
});

nextBtn3.addEventListener("click", function () {
  lessonNext(lesson03, lesson04);
});

checkPhrase4.addEventListener("click", function () {
  checkPhrases(
    boxLessonsStrings4,
    checkPhrase4,
    3,
    answerRightOrNot4,
    nextBtn4,
    audio04
  );
});

nextBtn4.addEventListener("click", function () {
  lessonNext(lesson04, lesson05);
});

checkPhrase5.addEventListener("click", function () {
  checkPhrases(
    boxLessonsStrings5,
    checkPhrase5,
    4,
    answerRightOrNot5,
    nextBtn5,
    audio05
  );
});

nextBtn5.addEventListener("click", function () {
  lessonNext(lesson05, lesson06);
});

checkPhrase6.addEventListener("click", function () {
  checkPhrases(
    boxLessonsStrings6,
    checkPhrase6,
    5,
    answerRightOrNot6,
    nextBtn6,
    audio06
  );
});

nextBtn6.addEventListener("click", function () {
  lessonNext(lesson06, lesson07);
});

checkPhrase7.addEventListener("click", function () {
  checkPhrases(
    boxLessonsStrings7,
    checkPhrase7,
    6,
    answerRightOrNot7,
    nextBtn7,
    audio07
  );
  if (rightAnswers === 7) {
    if (beginner01.length === 3) {
      beginner01.push(4);
      saveToLocalStorage();
    }
  }
});

const saveToLocalStorage = function () {
  localStorage.setItem("beginner01", JSON.stringify(beginner01));
};

// function addWordToPhrase (stringsArray, boxLessonsStrings) {
//   stringsArray.forEach((stringChoice) => {
//     stringChoice.addEventListener("click", function () {
//       pasteInPhrase(boxLessonsStrings, stringChoice);
//     });
//   });
// }

// stringsArray.forEach((stringChoice) => {
//   stringChoice.addEventListener("click", function () {
//     pasteInPhrase(boxLessonsStrings, stringChoice);
//   });
// });
// stringsArray2.forEach((stringChoice) => {
//   stringChoice.addEventListener("click", function () {
//     pasteInPhrase(boxLessonsStrings2, stringChoice);
//   });
// });
// stringsArray3.forEach((stringChoice) => {
//   stringChoice.addEventListener("click", function () {
//     pasteInPhrase(boxLessonsStrings3, stringChoice);
//   });
// });
// stringsArray4.forEach((stringChoice) => {
//   stringChoice.addEventListener("click", function () {
//     pasteInPhrase(boxLessonsStrings4, stringChoice);
//   });
// });
// stringsArray5.forEach((stringChoice) => {
//   stringChoice.addEventListener("click", function () {
//     pasteInPhrase(boxLessonsStrings5, stringChoice);
//   });
// });
// stringsArray6.forEach((stringChoice) => {
//   stringChoice.addEventListener("click", function () {
//     pasteInPhrase(boxLessonsStrings6, stringChoice);
//   });
// });
// stringsArray7.forEach((stringChoice) => {
//   stringChoice.addEventListener("click", function () {
//     pasteInPhrase(boxLessonsStrings7, stringChoice);
//   });
// });