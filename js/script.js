const headerProgressPersent = document.querySelector(
  ".header__progress-main"
);

const begginerLessonStart1 = document.querySelector(
  ".begginer__lesson01"
);
const begginerLessonStart2 = document.querySelector(
  ".begginer__lesson02"
);
const begginerLessonStart3 = document.querySelector(
  ".begginer__lesson03"
);
const begginerLessonStart4 = document.querySelector(
  ".begginer__lesson04"
);
const begginerLessonStart5 = document.querySelector(
  ".begginer__lesson05"
);

const lessonComplete1 = document.querySelector(".lesson__complete1");
const lessonComplete2 = document.querySelector(".lesson__complete2");
const lessonComplete3 = document.querySelector(".lesson__complete3");
const lessonComplete4 = document.querySelector(".lesson__complete4");
const lessonComplete5 = document.querySelector(".lesson__complete5");

let currentCompleteLessons = 0;

let begginerComplete = JSON.parse(localStorage.getItem("begginerComplete"));

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
    lessonComplete2.style.backgroundColor = "#3091af";
  }
  if (begginerComplete[1] === 2) {
    begginerLessonStart3.setAttribute(
      "href",
      "lessons/beginner/lesson3/lesson3.html"
    );
    currentCompleteLessons++;
    lessonComplete2.style.backgroundColor = "#209c0f";
  }
  if (begginerComplete[2] === 3) {
    begginerLessonStart4.setAttribute(
      "href",
      "lessons/beginner/lesson4/lesson4.html"
    );
    currentCompleteLessons++;
    lessonComplete3.style.backgroundColor = "#209c0f";
  }
  if (begginerComplete[3] === 4) {
    begginerLessonStart5.setAttribute(
      "href",
      "lessons/beginner/lesson5/lesson5.html"
    );
    currentCompleteLessons++;
    lessonComplete4.style.backgroundColor = "#209c0f";
  }
}

const printPersent = Math.round((currentCompleteLessons / 50) * 100);
headerProgressPersent.textContent = `${printPersent}%`;