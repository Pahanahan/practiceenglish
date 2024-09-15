const lesson01 = document.querySelector(".lesson01");
const lesson02 = document.querySelector(".lesson02");
const lesson03 = document.querySelector(".lesson03");
const lesson04 = document.querySelector(".lesson04");

const boxLessonsGrid = document.querySelector(".lesson-learn__grid");
const boxLessonsGrid2 = document.querySelector(".lesson-learn__grid2");
const boxLessonsGrid3 = document.querySelector(".lesson-learn__grid3");
const boxLessonsGrid4 = document.querySelector(".lesson-learn__grid4");

const boxLessonsGridView = document.querySelector(
  ".lesson-learn__grid-unvisible"
);
const boxLessonsGridView2 = document.querySelector(
  ".lesson-learn__grid-unvisible2"
);
const boxLessonsGridView3 = document.querySelector(
  ".lesson-learn__grid-unvisible3"
);
const boxLessonsGridView4 = document.querySelector(
  ".lesson-learn__grid-unvisible4"
);

const boxLessonsStrings = document.querySelector(".lesson-learn__box-strings");
const boxLessonsStrings2 = document.querySelector(
  ".lesson-learn__box-strings2"
);
const boxLessonsStrings3 = document.querySelector(
  ".lesson-learn__box-strings3"
);
const boxLessonsStrings4 = document.querySelector(
  ".lesson-learn__box-strings4"
);

const answerRightOrNot = document.querySelector(".lesson-learn__box-answer");
const answerRightOrNot2 = document.querySelector(".lesson-learn__box-answer2");
const answerRightOrNot3 = document.querySelector(".lesson-learn__box-answer3");
const answerRightOrNot4 = document.querySelector(".lesson-learn__box-answer4");

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

const itemPast11 = document.querySelector(".lesson-learn__grid-item-past11");
const itemPast12 = document.querySelector(".lesson-learn__grid-item-past12");
const itemPast13 = document.querySelector(".lesson-learn__grid-item-past13");
const itemPast14 = document.querySelector(".lesson-learn__grid-item-past14");
const itemPast15 = document.querySelector(".lesson-learn__grid-item-past15");

const itemPast16 = document.querySelector(".lesson-learn__grid-item-past16");
const itemPast17 = document.querySelector(".lesson-learn__grid-item-past17");
const itemPast18 = document.querySelector(".lesson-learn__grid-item-past18");
const itemPast19 = document.querySelector(".lesson-learn__grid-item-past19");
const itemPast20 = document.querySelector(".lesson-learn__grid-item-past20");

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

const stringChoice11 = document.querySelector(".lesson-learn__box-str11");
const stringChoice12 = document.querySelector(".lesson-learn__box-str12");
const stringChoice13 = document.querySelector(".lesson-learn__box-str13");
const stringChoice14 = document.querySelector(".lesson-learn__box-str14");
const stringChoice15 = document.querySelector(".lesson-learn__box-str15");

const stringChoice16 = document.querySelector(".lesson-learn__box-str16");
const stringChoice17 = document.querySelector(".lesson-learn__box-str17");
const stringChoice18 = document.querySelector(".lesson-learn__box-str18");
const stringChoice19 = document.querySelector(".lesson-learn__box-str19");
const stringChoice20 = document.querySelector(".lesson-learn__box-str20");

const mixBtn = document.querySelector(".lesson-learn__mix");
const mixBtn2 = document.querySelector(".lesson-learn__mix2");
const mixBtn3 = document.querySelector(".lesson-learn__mix3");
const mixBtn4 = document.querySelector(".lesson-learn__mix4");
const checkStr = document.querySelector(".lesson-learn__check-str");
const checkStr2 = document.querySelector(".lesson-learn__check-str2");
const checkStr3 = document.querySelector(".lesson-learn__check-str3");
const checkStr4 = document.querySelector(".lesson-learn__check-str4");
const nextBtn = document.querySelector(".lesson-learn__next");
const nextBtn2 = document.querySelector(".lesson-learn__next2");
const nextBtn3 = document.querySelector(".lesson-learn__next3");
const nextBtn4 = document.querySelector(".lesson-learn__next4");

const helpText = document.querySelector(".lesson-learn__text");
const helpText2 = document.querySelector(".lesson-learn__text2");
const helpText3 = document.querySelector(".lesson-learn__text3");
const helpText4 = document.querySelector(".lesson-learn__text4");

const answersArray = [
  "женат, замужем",
  "окей, в порядке",
  "родители",
  "бедный",
  "возможный",

  "легкий",
  "эффективный",
  "хорошо, в порядке",
  "трудолюбивый",
  "ленивый",

  "готов",
  "богатый",
  "семьдесят",
  "холост",
  "умный",

  "в порядке",
  "американец",
  "красивый",
  "опасный",
  "сложный, трудный",
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
const stringChoices3 = [
  stringChoice11,
  stringChoice12,
  stringChoice13,
  stringChoice14,
  stringChoice15,
];
const stringChoices4 = [
  stringChoice16,
  stringChoice17,
  stringChoice18,
  stringChoice19,
  stringChoice20,
];

const itemsArrayPast = [itemPast, itemPast2, itemPast3, itemPast4, itemPast5];
const itemsArrayPast2 = [
  itemPast6,
  itemPast7,
  itemPast8,
  itemPast9,
  itemPast10,
];
const itemsArrayPast3 = [
  itemPast11,
  itemPast12,
  itemPast13,
  itemPast14,
  itemPast15,
];
const itemsArrayPast4 = [
  itemPast16,
  itemPast17,
  itemPast18,
  itemPast19,
  itemPast20,
];

let rightAnswers = 0;

let currentIndex = 0;

let beginner14 = JSON.parse(localStorage.getItem("beginner14"));

function mixStrings(
  gridBlock,
  gridBlockView,
  blockStrings,
  mixBtn,
  checkStr,
  helpText
) {
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
    nextBtn2.addEventListener("click", function () {
      nextLesson(lesson02, lesson03);
      currentIndex = 0;
    });
  });
});

mixBtn3.addEventListener("click", function () {
  mixStrings(
    boxLessonsGrid3,
    boxLessonsGridView3,
    boxLessonsStrings3,
    mixBtn3,
    checkStr3,
    helpText3
  );

  stringChoices3.forEach((stringChoiceItem) => {
    stringChoiceItem.addEventListener("click", function () {
      itemsArrayPast3[currentIndex].textContent = stringChoiceItem.innerText;
      currentIndex++;
    });
  });
  for (const string of stringChoices3) {
    string.addEventListener("click", function () {
      string.style.display = "none";
    });
  }

  checkStr3.addEventListener("click", function () {
    checkStringsRightOrNot(
      itemsArrayPast3,
      itemPast11,
      itemPast12,
      itemPast13,
      itemPast14,
      itemPast15,
      checkStr3,
      nextBtn3,
      10,
      11,
      12,
      13,
      14,
      answerRightOrNot3
    );
    nextBtn3.addEventListener("click", function () {
      nextLesson(lesson03, lesson04);
      currentIndex = 0;
    });
  });
});

mixBtn4.addEventListener("click", function () {
  mixStrings(
    boxLessonsGrid4,
    boxLessonsGridView4,
    boxLessonsStrings4,
    mixBtn4,
    checkStr4,
    helpText4
  );

  stringChoices4.forEach((stringChoiceItem) => {
    stringChoiceItem.addEventListener("click", function () {
      itemsArrayPast4[currentIndex].textContent = stringChoiceItem.innerText;
      currentIndex++;
    });
  });
  for (const string of stringChoices4) {
    string.addEventListener("click", function () {
      string.style.display = "none";
    });
  }

  checkStr4.addEventListener("click", function () {
    checkStringsRightOrNot(
      itemsArrayPast4,
      itemPast16,
      itemPast17,
      itemPast18,
      itemPast19,
      itemPast20,
      checkStr4,
      nextBtn4,
      15,
      16,
      17,
      18,
      19,
      answerRightOrNot4
    );
    if (rightAnswers === 20) {
      if (beginner14.length === 2) {
        beginner14.push(3);
        saveToLocalStorage();
      }
    }
  });
});

const saveToLocalStorage = function () {
  localStorage.setItem("beginner14", JSON.stringify(beginner14));
};