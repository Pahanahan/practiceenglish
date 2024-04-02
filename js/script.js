const lesson1 = document.querySelector(".begginer1-lesson__box1-learn");
const lessonStart = document.querySelector(".begginer1-lesson__box1-start");

if (lesson1) {
  document;
  lessonStart.addEventListener("click", function (event) {
    event.preventDefault();
    lesson1.style.display = "flex";
  });
}