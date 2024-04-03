const begginerLessonStart1 = document.querySelector(
  ".begginer1-lesson__box1-start"
);
const begginerLessonStart2 = document.querySelector(
  ".begginer1-lesson__box2-start"
);
const begginerLessonStart3 = document.querySelector(
  ".begginer1-lesson__box3-start"
);
const lessonImage1 = document.querySelector(".lesson__image01");
const lessonImage2 = document.querySelector(".lesson__image02");
const lessonImage3 = document.querySelector(".lesson__image03");

let beginner01 = JSON.parse(localStorage.getItem("beginner01"));

if (beginner01[0] === 1) {
    begginerLessonStart2.setAttribute(
      "href",
      "/lessons/beginner/lesson1/lessons/02.html"
    );
    lessonImage2.setAttribute("src", "/img/start.png");
  }
if (beginner01[1] === 2) {
    begginerLessonStart3.setAttribute(
      "href",
      "/lessons/beginner/lesson1/lessons/03.html"
    );
    lessonImage3.setAttribute("src", "/img/start.png");
  }