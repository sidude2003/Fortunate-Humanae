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
  var randArrayOdd = [];
  var randArrayEven = [];

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
    return obj[n];
  }

  document.getElementById("generate").onclick = function () {
    // randomNum();
    let num = randomNum();
    randArray.push(num);
    if (randArray.length % 2 != 0) {
      randArrayOdd.push(randArray[randArray.length - 1]);
    } else {
      randArrayEven.push(randArray[randArray.length - 1]);
    }

    // console.log(randArray);
    document.getElementById("number-gen").innerHTML = num;

    figurepart11.forEach((part, index) => {
      if (num == 1 && index == repeatFind(randArrayOdd, 1) - 1) {
        part.style.display = "block";
      }
    });
    figurepart21.forEach((part, index) => {
      if (num == 1 && index == repeatFind(randArrayEven, 1) - 1) {
        part.style.display = "block";
      }
    });
    figurepart12.forEach((part, index) => {
      if (num == 2 && index == repeatFind(randArrayOdd, 2) - 1) {
        part.style.display = "block";
      }
    });
    figurepart22.forEach((part, index) => {
      if (num == 2 && index == repeatFind(randArrayEven, 2) - 1) {
        part.style.display = "block";
      }
    });
    figurepart13.forEach((part, index) => {
      if (num == 3 && index == repeatFind(randArrayEven, 3) - 1) {
        part.style.display = "block";
      }
    });
    figurepart23.forEach((part, index) => {
      if (num == 3 && index == repeatFind(randArrayEven, 3) - 1) {
        part.style.display = "block";
      }
    });
    figurepart14.forEach((part, index) => {
      if (num == 4 && index == repeatFind(randArrayEven, 4) - 1) {
        part.style.display = "block";
      }
    });
    figurepart24.forEach((part, index) => {
      if (num == 4 && index == repeatFind(randArrayEven, 4) - 1) {
        part.style.display = "block";
      }
    });
    figurepart15.forEach((part, index) => {
      if (num == 5 && index == repeatFind(randArrayEven, 5) - 1) {
        part.style.display = "block";
      }
    });
    figurepart25.forEach((part, index) => {
      if (num == 5 && index == repeatFind(randArrayEven, 5) - 1) {
        part.style.display = "block";
      }
    });
  };
});
