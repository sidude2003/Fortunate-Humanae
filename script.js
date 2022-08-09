document.addEventListener("DOMContentLoaded", function () {
  const figurepart11 = document.querySelectorAll(".figure-part-1-1");
  const figurepart12 = document.querySelectorAll(".figure-part-1-2");
  const figurepart13 = document.querySelectorAll(".figure-part-1-3");
  const figurepart14 = document.querySelectorAll(".figure-part-1-4");
  const figurepart15 = document.querySelectorAll(".figure-part-1-5");
  const figurepart21 = document.querySelectorAll(".figure-part-2-1");
  const figurepart22 = document.querySelectorAll(".figure-part-2-2");
  const figurepart23 = document.querySelectorAll(".figure-part-2-3");
  const figurepart24 = document.querySelectorAll(".figure-part-2-4");
  const figurepart25 = document.querySelectorAll(".figure-part-2-5");
  var randArray = [];

  function randomNum() {
    let rand = Math.random() * 5;
    return Math.floor(rand) + 1;
  }

  function repeatFind(array, n) {
    const obj = {};
    array.forEach((number) => {
      if (!obj[number]) {
        obj[number] = 1;
      } else {
        obj[number] += 1;
      }
    });
    return obj[1];
  }

  document.getElementById("generate").onclick = function () {
    // randomNum();
    let num = randomNum();
    randArray.push(num);
    console.log(randArray);

    figurepart11.forEach((part, index) => {
      if (num == 1 && index == repeatFind(randArray, 1) - 1) {
        part.style.display = "block";
      }
    });
  };
});
