const lesson1 = document.querySelector(".begginer1-lesson__box1-learn");

document
  .querySelector(".begginer1-lesson__box1-start")
  .addEventListener("click", function (event) {
    event.preventDefault();
    lesson1.style.display = "flex";
  });
