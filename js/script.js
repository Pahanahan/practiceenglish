const headerProgressPersent = document.querySelector(".header__progress-main");

const begginerLessonStart1 = document.querySelector(".begginer__lesson01");
const begginerLessonStart2 = document.querySelector(".begginer__lesson02");
const begginerLessonStart3 = document.querySelector(".begginer__lesson03");
const begginerLessonStart4 = document.querySelector(".begginer__lesson04");
const begginerLessonStart5 = document.querySelector(".begginer__lesson05");
const begginerLessonStart6 = document.querySelector(".begginer__lesson06");
const begginerLessonStart7 = document.querySelector(".begginer__lesson07");
const begginerLessonStart8 = document.querySelector(".begginer__lesson08");
const begginerLessonStart9 = document.querySelector(".begginer__lesson09");
const begginerLessonStart10 = document.querySelector(".begginer__lesson10");
const begginerLessonStart11 = document.querySelector(".begginer__lesson11");
const begginerLessonStart12 = document.querySelector(".begginer__lesson12");
const begginerLessonStart13 = document.querySelector(".begginer__lesson13");
const begginerLessonStart14 = document.querySelector(".begginer__lesson14");
const begginerLessonStart15 = document.querySelector(".begginer__lesson15");

const lessonComplete1 = document.querySelector(".lesson__complete1");
const lessonComplete2 = document.querySelector(".lesson__complete2");
const lessonComplete3 = document.querySelector(".lesson__complete3");
const lessonComplete4 = document.querySelector(".lesson__complete4");
const lessonComplete5 = document.querySelector(".lesson__complete5");
const lessonComplete6 = document.querySelector(".lesson__complete6");
const lessonComplete7 = document.querySelector(".lesson__complete7");
const lessonComplete8 = document.querySelector(".lesson__complete8");
const lessonComplete9 = document.querySelector(".lesson__complete9");
const lessonComplete10 = document.querySelector(".lesson__complete10");
const lessonComplete11 = document.querySelector(".lesson__complete11");
const lessonComplete12 = document.querySelector(".lesson__complete12");
const lessonComplete13 = document.querySelector(".lesson__complete13");
const lessonComplete14 = document.querySelector(".lesson__complete14");
const lessonComplete15 = document.querySelector(".lesson__complete15");

const lessonImage1 = document.querySelector(".lesson__image01");
const lessonImage2 = document.querySelector(".lesson__image02");
const lessonImage3 = document.querySelector(".lesson__image03");
const lessonImage4 = document.querySelector(".lesson__image04");
const lessonImage5 = document.querySelector(".lesson__image05");
const lessonImage6 = document.querySelector(".lesson__image06");
const lessonImage7 = document.querySelector(".lesson__image07");
const lessonImage8 = document.querySelector(".lesson__image08");
const lessonImage9 = document.querySelector(".lesson__image09");
const lessonImage10 = document.querySelector(".lesson__image10");
const lessonImage11 = document.querySelector(".lesson__image11");
const lessonImage12 = document.querySelector(".lesson__image12");
const lessonImage13 = document.querySelector(".lesson__image13");
const lessonImage14 = document.querySelector(".lesson__image14");
const lessonImage15 = document.querySelector(".lesson__image15");

let currentCompleteLessons = 0;

const saveToLocalStorage = function (localItemStr, localItem) {
  localStorage.setItem(localItemStr, JSON.stringify(localItem));
};

let begginerComplete = JSON.parse(localStorage.getItem("begginerComplete"));

let begginer01 = JSON.parse(localStorage.getItem("beginner01"));
let begginer02 = JSON.parse(localStorage.getItem("beginner02"));
let begginer03 = JSON.parse(localStorage.getItem("beginner03"));
let begginer04 = JSON.parse(localStorage.getItem("beginner04"));
let begginer05 = JSON.parse(localStorage.getItem("beginner05"));
let begginer06 = JSON.parse(localStorage.getItem("beginner06"));
let begginer07 = JSON.parse(localStorage.getItem("beginner07"));
let begginer08 = JSON.parse(localStorage.getItem("beginner08"));
let begginer09 = JSON.parse(localStorage.getItem("beginner09"));
let begginer10 = JSON.parse(localStorage.getItem("beginner10"));
let begginer11 = JSON.parse(localStorage.getItem("beginner11"));
let begginer12 = JSON.parse(localStorage.getItem("beginner12"));
let begginer13 = JSON.parse(localStorage.getItem("beginner13"));
let begginer14 = JSON.parse(localStorage.getItem("beginner14"));
let begginer15 = JSON.parse(localStorage.getItem("beginner15"));

if (begginer01 !== null && begginer01.length === 15) {
  begginerComplete = []
  begginerComplete.push(1);
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer02 !== null && begginer02.length === 15) {
  begginerComplete.push(2)
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer03 !== null && begginer03.length === 15) {
  begginerComplete.push(3)
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer04 !== null && begginer04.length === 12) {
  begginerComplete.push(4)
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer05 !== null && begginer05.length === 12) {
  begginerComplete.push(5)
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer06 !== null && begginer06.length === 13) {
  begginerComplete.push(6)
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer07 !== null && begginer07.length === 13) {
  begginerComplete.push(7)
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer08 !== null && begginer08.length === 13) {
  begginerComplete.push(8)
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer09 !== null && begginer09.length === 13) {
  begginerComplete.push(9)
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer10 !== null && begginer10.length === 13) {
  begginerComplete.push(10)
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer11 !== null && begginer11.length === 13) {
  begginerComplete.push(11)
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer12 !== null && begginer12.length === 13) {
  begginerComplete.push(12)
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer13 !== null && begginer13.length === 13) {
  begginerComplete.push(13)
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer14 !== null && begginer14.length === 13) {
  begginerComplete.push(14)
  saveToLocalStorage('begginerComplete', begginerComplete);
}
if (begginer15 !== null && begginer15.length === 13) {
  begginerComplete.push(15)
  saveToLocalStorage('begginerComplete', begginerComplete);
}


if (begginerComplete === null) {
  begginerComplete = [];
} else if (begginerComplete !== null) {
  if (begginerComplete[0] === 1) {
    begginerLessonStart2.setAttribute(
      "href",
      "lessons/beginner/lesson2/lesson2.html"
    );
    currentCompleteLessons++;
    lessonComplete1.style.backgroundColor = "#209c0f";
    lessonImage1.setAttribute("src", "img/complete.png");
    lessonImage2.setAttribute("src", "img/start.png");
  }
  if (begginerComplete[1] === 2) {
    begginerLessonStart3.setAttribute(
      "href",
      "lessons/beginner/lesson3/lesson3.html"
    );
    currentCompleteLessons++;
    lessonComplete2.style.backgroundColor = "#209c0f";
    lessonImage2.setAttribute("src", "img/complete.png");
    lessonImage3.setAttribute("src", "img/start.png");
  }
  if (begginerComplete[2] === 3) {
    begginerLessonStart4.setAttribute(
      "href",
      "lessons/beginner/lesson4/lesson4.html"
    );
    currentCompleteLessons++;
    lessonComplete3.style.backgroundColor = "#209c0f";
    lessonImage3.setAttribute("src", "img/complete.png");
    lessonImage4.setAttribute("src", "img/start.png");
  }
  if (begginerComplete[3] === 4) {
    begginerLessonStart5.setAttribute(
      "href",
      "lessons/beginner/lesson5/lesson5.html"
    );
    currentCompleteLessons++;
    lessonComplete4.style.backgroundColor = "#209c0f";
    lessonImage4.setAttribute("src", "img/complete.png");
    lessonImage5.setAttribute("src", "img/start.png");
  }
  if (begginerComplete[4] === 5) {
    begginerLessonStart6.setAttribute(
      "href",
      "lessons/beginner/lesson6/lesson6.html"
    );
    currentCompleteLessons++;
    lessonComplete5.style.backgroundColor = "#209c0f";
    lessonImage5.setAttribute("src", "img/complete.png");
    lessonImage6.setAttribute("src", "img/start.png");
  }
  if (begginerComplete[5] === 6) {
    begginerLessonStart7.setAttribute(
      "href",
      "lessons/beginner/lesson7/lesson7.html"
    );
    currentCompleteLessons++;
    lessonComplete6.style.backgroundColor = "#209c0f";
    lessonImage6.setAttribute("src", "img/complete.png");
    lessonImage7.setAttribute("src", "img/start.png");
  }
  if (begginerComplete[6] === 7) {
    begginerLessonStart8.setAttribute(
      "href",
      "lessons/beginner/lesson8/lesson8.html"
    );
    currentCompleteLessons++;
    lessonComplete7.style.backgroundColor = "#209c0f";
    lessonImage7.setAttribute("src", "img/complete.png");
    lessonImage8.setAttribute("src", "img/start.png");
  }
  if (begginerComplete[7] === 8) {
    begginerLessonStart9.setAttribute(
      "href",
      "lessons/beginner/lesson9/lesson9.html"
    );
    currentCompleteLessons++;
    lessonComplete8.style.backgroundColor = "#209c0f";
    lessonImage8.setAttribute("src", "img/complete.png");
    lessonImage9.setAttribute("src", "img/start.png");
  }
  if (begginerComplete[8] === 9) {
    begginerLessonStart10.setAttribute(
      "href",
      "lessons/beginner/lesson10/lesson10.html"
    );
    currentCompleteLessons++;
    lessonComplete9.style.backgroundColor = "#209c0f";
    lessonImage9.setAttribute("src", "img/complete.png");
    lessonImage10.setAttribute("src", "img/start.png");
  }
  if (begginerComplete[9] === 10) {
    begginerLessonStart11.setAttribute(
      "href",
      "lessons/beginner/lesson11/lesson11.html"
    );
    currentCompleteLessons++;
    lessonComplete10.style.backgroundColor = "#209c0f";
    lessonImage10.setAttribute("src", "img/complete.png");
    lessonImage11.setAttribute("src", "img/start.png");
  }
  if (begginerComplete[10] === 11) {
    begginerLessonStart12.setAttribute(
      "href",
      "lessons/beginner/lesson12/lesson12.html"
    );
    currentCompleteLessons++;
    lessonComplete11.style.backgroundColor = "#209c0f";
    lessonImage11.setAttribute("src", "img/complete.png");
    lessonImage12.setAttribute("src", "img/start.png");
  }
  if (begginerComplete[11] === 12) {
    begginerLessonStart13.setAttribute(
      "href",
      "lessons/beginner/lesson13/lesson13.html"
    );
    currentCompleteLessons++;
    lessonComplete12.style.backgroundColor = "#209c0f";
    lessonImage12.setAttribute("src", "img/complete.png");
    lessonImage13.setAttribute("src", "img/start.png");
  }
  if (begginerComplete[12] === 13) {
    begginerLessonStart14.setAttribute(
      "href",
      "lessons/beginner/lesson14/lesson14.html"
    );
    currentCompleteLessons++;
    lessonComplete13.style.backgroundColor = "#209c0f";
    lessonImage13.setAttribute("src", "img/complete.png");
    lessonImage14.setAttribute("src", "img/start.png");
  }
}

const printPersent = Math.round((currentCompleteLessons / 50) * 100);
headerProgressPersent.textContent = `${printPersent}%`;
