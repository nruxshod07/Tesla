let btns = document.querySelectorAll(".settings img");
let switchBtns = document.querySelectorAll(".switch .switch-btn");
let settings = document.querySelector(".settings");
let openCarBtns = document.querySelectorAll(".carVisibility");
let car = document.querySelector(".car .carImg");
let openCarDiv = document.querySelector(".openCar");
let colors = document.querySelector(".colorSelect");
let colorBtns = document.querySelectorAll(".colors div");
let settingsBtns = document.querySelectorAll(".circle");
let price = document.querySelector(".price");
let range = document.querySelector(".range");
let speedCount = document.querySelector(".speedCount");
let tempCount = document.querySelector(".tempCount");
let wheelSize = document.querySelector(".wheelSize");
let leftWheel = document.querySelector(".left");
let rightWheel = document.querySelector(".right");
let conditioner = document.querySelector(".conditioner .switch");
let longRange = document.querySelector(".longRange .switch");
let conditioner1 = document.querySelector(".conditioner .switch-btn");
let longRange1 = document.querySelector(".longRange .switch-btn");
  conditioner.onclick = () => {
    if (conditioner1.classList.contains("on")) {
      conditioner1.classList.remove("on");
      conditioner1.classList.add("off");
      conditioner.style.backgroundColor = "gray";
      range.innerHTML = +range.innerHTML + 50;
    } else if (conditioner1.classList.contains("off")) {
      range.innerHTML = +range.innerHTML - 50;
      conditioner1.classList.add("on");
      conditioner1.classList.remove("off");
      conditioner.style.backgroundColor = "blue";
    }
  };
  longRange.onclick = () => {
    if (longRange1.classList.contains("on")) {
      longRange1.classList.remove("on");
      longRange1.classList.add("off");
      longRange.style.backgroundColor = "gray";
      price.innerHTML = "89990";
    } else if (longRange1.classList.contains("off")) {
      longRange1.classList.add("on");
      longRange1.classList.remove("off");
      longRange.style.backgroundColor = "blue";
      price.innerHTML = "100000";
    }
  };

  openCarDiv.onclick = () => {
    if (colors.classList.contains("hidden")) {
      openCarDiv.style.display = "none";
      car.classList.add("scale");
      leftWheel.classList.add("hidden");
      rightWheel.classList.add("hidden");
      setTimeout(() => {
        car.classList.add("decrease");
        car.src = "img/image1black.png";
        colors.classList.remove("hidden");
        settings.classList.add("hidden");
      }, 1200);
      setTimeout(() => {
        car.classList.remove("scale");
        car.classList.remove("decrease");
      }, 3500);
    }
  };
openCarBtns.forEach((openCarBtn) => {
  openCarBtn.onclick = () => {
    let parent = openCarBtn.parentElement;
    if (openCarBtn.classList.contains("off")) {
      openCarBtn.classList.add("on");
      openCarBtn.classList.remove("off");
      parent.style.backgroundColor = "blue";
      openCarDiv.style.display = "block";
      car.classList.add("scale");
      setTimeout(() => {
        car.classList.add("decrease");
        car.src = "img/image1car.png";
        colors.classList.add("hidden");
        settings.classList.remove("hidden");
      }, 1200);
      setTimeout(() => {
        leftWheel.classList.remove("hidden");
        rightWheel.classList.remove("hidden");
        car.classList.remove("scale");
        car.classList.remove("decrease");
      }, 3500);
    } else if (openCarBtn.classList.contains("on")) {
      openCarDiv.style.display = "none";
      openCarBtn.classList.remove("on");
      openCarBtn.classList.add("off");
      parent.style.backgroundColor = "gray";
      car.classList.add("scale");
      leftWheel.classList.add("hidden");
      rightWheel.classList.add("hidden");
      setTimeout(() => {
        car.classList.add("decrease");
        car.src = "img/image1black.png";
        colors.classList.remove("hidden");
        settings.classList.add("hidden");
      }, 1200);
      setTimeout(() => {
        car.classList.remove("scale");
        car.classList.remove("decrease");
      }, 3500);
    }
  };
});

let color = {
  white: "img/image9white.png",
  black: "img/image1black.png",
  bronze: "img/image8bronze.png",
};
colorBtns.forEach((btn) => {
  btn.onclick = () => {
    let key = btn.getAttribute("data-color");
    car.src = color[key];
  };
});
// °
settingsBtns.forEach((btn) => {
  btn.onclick = () => {
    let currSpeed = +speedCount.innerHTML;
    let currRange = +range.innerHTML;
    let currTemp = +tempCount.innerHTML;
    let currSize = +wheelSize.innerHTML;
    let type = btn.getAttribute("data-type");
    switch (type) {
      case "addSpeed":
        if (currSpeed > 75) {
          currSpeed = 75;
          console.log("stop1");
        } else {
          range.innerHTML = currRange - 50;
          speedCount.innerHTML = currSpeed + 5;
          console.log("+");
        }
        break;
      case "removeSpeed":
        if (currSpeed < 45) {
          currSpeed = 45;
          console.log("stop2");
        } else {
          range.innerHTML = currRange + 50;
          speedCount.innerHTML = currSpeed - 5;
          console.log("-");
        }
        break;
      case "addTemperature":
        if (currTemp > 29) {
          currTemp = 29;
        } else {
          tempCount.innerHTML = currTemp + 1;
          range.innerHTML = currRange + 10;
        }
        break;
      case "removeTemperature":
        if (currTemp < -9) {
          currTemp = -9;
        } else {
          tempCount.innerHTML = currTemp - 1;
          range.innerHTML = currRange - 10;
        }
        break;
      case "addSize":
        currSize = currSize + 1;
        wheelSize.innerHTML = currSize;
        console.log(currSize);
        if (currSize === 19) {
          rightWheel.style.maxWidth = "80px";
          leftWheel.style.maxWidth = "80px";
          rightWheel.style.maxHeight = "80px";
          leftWheel.style.maxHeight = "80px";
        }
        if (currSize === 20) {
          rightWheel.style.maxWidth = "85px";
          leftWheel.style.maxWidth = "85px";
          rightWheel.style.maxHeight = "85px";
          leftWheel.style.maxHeight = "85px";
        } else if (currSize >= 21) {
          wheelSize.innerHTML = 21;
          rightWheel.style.maxWidth = "90px";
          leftWheel.style.maxWidth = "90px";
          rightWheel.style.maxHeight = "90px";
          leftWheel.style.maxHeight = "90px";
        }
        break;
      case "removeSize":
        currSize = currSize - 1;
        wheelSize.innerHTML = currSize;
        if (currSize <= 19) {
          wheelSize.innerHTML = 19;
          rightWheel.style.maxWidth = "80px";
          leftWheel.style.maxWidth = "80px";
          rightWheel.style.maxHeight = "80px";
          leftWheel.style.maxHeight = "80px";
        }
        console.log(currSize);
        if (currSize === 20) {
          rightWheel.style.maxWidth = "85px";
          leftWheel.style.maxWidth = "85px";
          rightWheel.style.maxHeight = "85px";
          leftWheel.style.maxHeight = "85px";
        } else if (currSize === 21) {
          rightWheel.style.maxWidth = "90px";
          leftWheel.style.maxWidth = "90px";
          rightWheel.style.maxHeight = "90px";
          leftWheel.style.maxHeight = "90px";
          break;
        }
    }
  };
});
