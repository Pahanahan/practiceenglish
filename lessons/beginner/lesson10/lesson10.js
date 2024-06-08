const headerProgressPersent = document.querySelector(
  ".header__progress-percent"
);

const begginerLessonStart1 = document.querySelector(
  ".begginer1-lesson__box1-start"
);
const begginerLessonStart2 = document.querySelector(
  ".begginer1-lesson__box2-start"
);
const begginerLessonStart3 = document.querySelector(
  ".begginer1-lesson__box3-start"
);
const begginerLessonStart4 = document.querySelector(
  ".begginer1-lesson__box4-start"
);
const begginerLessonStart5 = document.querySelector(
  ".begginer1-lesson__box5-start"
);
const begginerLessonStart6 = document.querySelector(
  ".begginer1-lesson__box6-start"
);
const begginerLessonStart7 = document.querySelector(
  ".begginer1-lesson__box7-start"
);
const begginerLessonStart8 = document.querySelector(
  ".begginer1-lesson__box8-start"
);
const begginerLessonStart9 = document.querySelector(
  ".begginer1-lesson__box9-start"
);
const begginerLessonStart10 = document.querySelector(
  ".begginer1-lesson__box10-start"
);
const begginerLessonStart11 = document.querySelector(
  ".begginer1-lesson__box11-start"
);
const begginerLessonStart12 = document.querySelector(
  ".begginer1-lesson__box12-start"
);
const begginerLessonStart13 = document.querySelector(
  ".begginer1-lesson__box13-start"
);
const begginerLessonStart14 = document.querySelector(
  ".begginer1-lesson__box14-start"
);
const begginerLessonStart15 = document.querySelector(
  ".begginer1-lesson__box15-start"
);

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

let currentCompleteLessons = 0;

let beginner10 = JSON.parse(localStorage.getItem("beginner10"));

if (beginner10 === null) {
  beginner10 = [];
} else if (beginner10 !== null) {
  if (beginner10[0] === 1) {
    begginerLessonStart2.setAttribute(
      "href",
      "../../../lessons/beginner/lesson10/lessons/02.html"
    );
    currentCompleteLessons++;
    lessonComplete1.style.backgroundColor = "#209c0f";
    lessonImage1.setAttribute("src", "../../../img/complete.png");
    lessonImage2.setAttribute("src", "../../../img/start.png");
  }
  if (beginner10[1] === 2) {
    begginerLessonStart3.setAttribute(
      "href",
      "../../../lessons/beginner/lesson10/lessons/03.html"
    );
    currentCompleteLessons++;
    lessonComplete2.style.backgroundColor = "#209c0f";
    lessonImage2.setAttribute("src", "../../../img/complete.png");
    lessonImage3.setAttribute("src", "../../../img/start.png");
  }
  if (beginner10[2] === 3) {
    begginerLessonStart4.setAttribute(
      "href",
      "../../../lessons/beginner/lesson10/lessons/04.html"
    );
    currentCompleteLessons++;
    lessonComplete3.style.backgroundColor = "#209c0f";
    lessonImage3.setAttribute("src", "../../../img/complete.png");
    lessonImage4.setAttribute("src", "../../../img/start.png");
  }
  if (beginner10[3] === 4) {
    begginerLessonStart5.setAttribute(
      "href",
      "../../../lessons/beginner/lesson10/lessons/05.html"
    );
    currentCompleteLessons++;
    lessonComplete4.style.backgroundColor = "#209c0f";
    lessonImage4.setAttribute("src", "../../../img/complete.png");
    lessonImage5.setAttribute("src", "../../../img/start.png");
  }
  if (beginner10[4] === 5) {
    begginerLessonStart6.setAttribute(
      "href",
      "../../../lessons/beginner/lesson10/lessons/06.html"
    );
    currentCompleteLessons++;
    lessonComplete5.style.backgroundColor = "#209c0f";
    lessonImage5.setAttribute("src", "../../../img/complete.png");
    lessonImage6.setAttribute("src", "../../../img/start.png");
  }
  if (beginner10[5] === 6) {
    begginerLessonStart7.setAttribute(
      "href",
      "../../../lessons/beginner/lesson10/lessons/07.html"
    );
    currentCompleteLessons++;
    lessonComplete6.style.backgroundColor = "#209c0f";
    lessonImage6.setAttribute("src", "../../../img/complete.png");
    lessonImage7.setAttribute("src", "../../../img/start.png");
  }
  if (beginner10[6] === 7) {
    begginerLessonStart8.setAttribute(
      "href",
      "../../../lessons/beginner/lesson10/lessons/08.html"
    );
    currentCompleteLessons++;
    lessonComplete7.style.backgroundColor = "#209c0f";
    lessonImage7.setAttribute("src", "../../../img/complete.png");
    lessonImage8.setAttribute("src", "../../../img/start.png");
  }
  if (beginner10[7] === 8) {
    begginerLessonStart9.setAttribute(
      "href",
      "../../../lessons/beginner/lesson10/lessons/09.html"
    );
    currentCompleteLessons++;
    lessonComplete8.style.backgroundColor = "#209c0f";
    lessonImage8.setAttribute("src", "../../../img/complete.png");
    lessonImage9.setAttribute("src", "../../../img/start.png");
  }
  if (beginner10[8] === 9) {
    begginerLessonStart10.setAttribute(
      "href",
      "../../../lessons/beginner/lesson10/lessons/10.html"
    );
    currentCompleteLessons++;
    lessonComplete9.style.backgroundColor = "#209c0f";
    lessonImage9.setAttribute("src", "../../../img/complete.png");
    lessonImage10.setAttribute("src", "../../../img/start.png");
  }
  if (beginner10[9] === 10) {
    begginerLessonStart11.setAttribute(
      "href",
      "../../../lessons/beginner/lesson10/lessons/11.html"
    );
    currentCompleteLessons++;
    lessonComplete10.style.backgroundColor = "#209c0f";
    lessonImage10.setAttribute("src", "../../../img/complete.png");
    lessonImage11.setAttribute("src", "../../../img/start.png");
  }
  if (beginner10[10] === 11) {
    begginerLessonStart12.setAttribute(
      "href",
      "../../../lessons/beginner/lesson10/lessons/12.html"
    );
    currentCompleteLessons++;
    lessonComplete11.style.backgroundColor = "#209c0f";
    lessonImage11.setAttribute("src", "../../../img/complete.png");
    lessonImage12.setAttribute("src", "../../../img/start.png");
  }
  if (beginner10[11] === 12) {
    begginerLessonStart13.setAttribute(
      "href",
      "../../../lessons/beginner/lesson10/lessons/13.html"
    );
    currentCompleteLessons++;
    lessonComplete12.style.backgroundColor = "#209c0f";
    lessonImage12.setAttribute("src", "../../../img/complete.png");
    lessonImage13.setAttribute("src", "../../../img/start.png");
  }
  if (beginner10[12] === 13) {
    currentCompleteLessons++;
    lessonComplete13.style.backgroundColor = "#209c0f";
    lessonImage13.setAttribute("src", "../../../img/complete.png");
  }
}

const printPersent = Math.round((currentCompleteLessons / 13) * 100);
headerProgressPersent.textContent = `${printPersent}%`;