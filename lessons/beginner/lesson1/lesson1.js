const headerProgressPersent = document.querySelector('.header__progress-percent')

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

const lessonImage1 = document.querySelector(".lesson__image01");
const lessonImage2 = document.querySelector(".lesson__image02");
const lessonImage3 = document.querySelector(".lesson__image03");
const lessonImage4 = document.querySelector(".lesson__image04");
const lessonImage5 = document.querySelector(".lesson__image05");
const lessonImage6 = document.querySelector(".lesson__image06");
const lessonImage7 = document.querySelector(".lesson__image07");
const lessonImage8 = document.querySelector(".lesson__image08");

const lessonComplete1 = document.querySelector('.lesson__complete1')
const lessonComplete2 = document.querySelector('.lesson__complete2')
const lessonComplete3 = document.querySelector('.lesson__complete3')
const lessonComplete4 = document.querySelector('.lesson__complete4')
const lessonComplete5 = document.querySelector('.lesson__complete5')
const lessonComplete6 = document.querySelector('.lesson__complete6')
const lessonComplete7 = document.querySelector('.lesson__complete7')
const lessonComplete8 = document.querySelector('.lesson__complete8')

let currentCompleteLessons = 0

let beginner01 = JSON.parse(localStorage.getItem("beginner01"));

if (beginner01 === null) {
  beginner01 = [];
} else if (beginner01 !== null) {
  if (beginner01[0] === 1) {
    begginerLessonStart2.setAttribute(
      "href",
      "/lessons/beginner/lesson1/lessons/02.html"
    );
    currentCompleteLessons++
    lessonComplete1.style.backgroundColor = '#209c0f'
    lessonImage1.setAttribute("src", "/img/complete.png");
    lessonImage2.setAttribute("src", "/img/start.png");
  }
  if (beginner01[1] === 2) {
    begginerLessonStart3.setAttribute(
      "href",
      "/lessons/beginner/lesson1/lessons/03.html"
    );
    currentCompleteLessons++
    lessonComplete2.style.backgroundColor = '#209c0f'
    lessonImage2.setAttribute("src", "/img/complete.png");
    lessonImage3.setAttribute("src", "/img/start.png");
  }
  if (beginner01[2] === 3) {
    begginerLessonStart4.setAttribute(
      "href",
      "/lessons/beginner/lesson1/lessons/04.html"
    );
    currentCompleteLessons++
    lessonComplete3.style.backgroundColor = '#209c0f'
    lessonImage3.setAttribute("src", "/img/complete.png");
    lessonImage4.setAttribute("src", "/img/start.png");
  }
  if (beginner01[3] === 4) {
    begginerLessonStart5.setAttribute(
      "href",
      "/lessons/beginner/lesson1/lessons/05.html"
    );
    currentCompleteLessons++
    lessonComplete4.style.backgroundColor = '#209c0f'
    lessonImage4.setAttribute("src", "/img/complete.png");
    lessonImage5.setAttribute("src", "/img/start.png");
  }
  if (beginner01[4] === 5) {
    begginerLessonStart6.setAttribute(
      "href",
      "/lessons/beginner/lesson1/lessons/06.html"
    );
    currentCompleteLessons++
    lessonComplete5.style.backgroundColor = '#209c0f'
    lessonImage5.setAttribute("src", "/img/complete.png");
    lessonImage6.setAttribute("src", "/img/start.png");
  }
  if (beginner01[5] === 6) {
    begginerLessonStart7.setAttribute(
      "href",
      "/lessons/beginner/lesson1/lessons/07.html"
    );
    currentCompleteLessons++
    lessonComplete6.style.backgroundColor = '#209c0f'
    lessonImage6.setAttribute("src", "/img/complete.png");
    lessonImage7.setAttribute("src", "/img/start.png");
  }
  if (beginner01[6] === 7) {
    begginerLessonStart8.setAttribute(
      "href",
      "/lessons/beginner/lesson1/lessons/07.html"
    );
    currentCompleteLessons++
    lessonComplete7.style.backgroundColor = '#209c0f'
    lessonImage7.setAttribute("src", "/img/complete.png");
    lessonImage8.setAttribute("src", "/img/start.png");
  }
}

const printPersent = Math.round((currentCompleteLessons / 12) * 100);
headerProgressPersent.textContent = `${printPersent}%`