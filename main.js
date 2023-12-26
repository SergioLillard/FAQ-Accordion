const question1 = document.getElementById("q1");
const question2 = document.getElementById("q2");
const question3 = document.getElementById("q3");
const question4 = document.getElementById("q4");

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");

question1.addEventListener("click", () => {
  if (p1.classList.contains("show")) {
    p1.classList.remove("show");
    p1.classList.add("hide");

    image1.src = "./assets/images/icon-plus.svg";

    question1.classList.add("border-bottom");
  } else {
    p1.classList.remove("hide");
    p1.classList.add("show");

    image1.src = "./assets/images/icon-minus.svg";

    question1.classList.remove("border-bottom");
    p1.classList.add("border-bottom");
  }
});

question2.addEventListener("click", () => {
  if (p2.classList.contains("show")) {
    p2.classList.remove("show");
    p2.classList.add("hide");

    image2.src = "./assets/images/icon-plus.svg";

    question2.classList.add("border-bottom");
  } else {
    p2.classList.remove("hide");
    p2.classList.add("show");

    image2.src = "./assets/images/icon-minus.svg";

    question2.classList.remove("border-bottom");
    p2.classList.add("border-bottom");
  }
});

question3.addEventListener("click", () => {
  if (p3.classList.contains("show")) {
    p3.classList.remove("show");
    p3.classList.add("hide");

    image3.src = "./assets/images/icon-plus.svg";

    question3.classList.add("border-bottom");
  } else {
    p3.classList.remove("hide");
    p3.classList.add("show");

    image3.src = "./assets/images/icon-minus.svg";

    question3.classList.remove("border-bottom");
    p3.classList.add("border-bottom");
  }
});

question4.addEventListener("click", () => {
  if (p4.classList.contains("show")) {
    p4.classList.remove("show");
    p4.classList.add("hide");

    image4.src = "./assets/images/icon-plus.svg";
  } else {
    p4.classList.remove("hide");
    p4.classList.add("show");

    image4.src = "./assets/images/icon-minus.svg";
  }
});
