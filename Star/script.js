"use strict";
const menuButton = document.querySelector(".nav-menu");
const opitonsTab = document.querySelector(".options");
const optionContainer = document.querySelector(".option-container");
const backBtn = document.querySelector(".options-back");
const arrowBtn = document.querySelector(".arrow-btn");
const backgroun = document.querySelector(".heloo");
const slides = document.querySelectorAll(".card-body-main");
const slide = document.querySelector(".card-body-main");
const buttonPrev = document.querySelector(".prev");
const sliderChild = document.querySelector(".sld");
const buttonNext = document.querySelector(".next");
const noName = document.querySelector(".no-name");
const bodyy = document.querySelector("body");
const bodyMain = document.querySelector(".body-main");
const scrollBtn = document.querySelector(".scroll-btn");
const headCard = document.querySelectorAll(".head-card");
const bodyCard = document.querySelectorAll(".body-card-planet");
const bodyCardMoon = document.querySelectorAll(".body-card-moon");
const body = document.querySelectorAll(".body-card");
const homeCard = document.querySelector(".home");
let slideRight = 4;
let slideLeft = 0;
let scroll = 0;
let scrolled = 0;
opitonsTab.style.height = `${homeCard.clientHeight}px`;

function changeHW() {
  const h = `${slide.clientHeight}px`;
  const w = `${slide.clientWidth}px`;
  sliderChild.style.width = w;
  sliderChild.style.height = h;
  noName.style.width = w;
  noName.style.height = h;
}
bodyy.style.marginTop = `${document.querySelector(".nav").clientHeight}px`;
changeHW();
let counter = 0;
const obj = {
  method(i) {
    return (i += counter);
  },
};
sliderChild.style.width = `${slides.clientWidth}px`;
sliderChild.style.height = `${slides.clientHeight}px`;
const alignBtn = function () {
  optionContainer.style.height = `${opitonsTab.clientHeight}px`;
  optionContainer.style.width = `${opitonsTab.clientWidth}px`;
  console.log(opitonsTab.clientHeight);
};
const openTab = function () {
  const num = Number(opitonsTab.style.right.substring(0, 2));
  const open = "../images/menu_24dp_ D3D3D3_FILL0_wght400_GRAD0_opsz24.png";
  const close = "../images/close_24dp_ D3D3D3_FILL0_wght400_GRAD0_opsz24.png";

  if (num > 0) {
    opitonsTab.style.right = "-400px";
    optionContainer.style.right = "-400px";
    setTimeout(() => {
      // optionContainer.style.height = `0px`;
      optionContainer.style.width = `0px`;
      body.forEach((cardd) => {
        cardd.classList.add("hide");
      });
      headCard.forEach((cardd) => {
        cardd.classList.remove("hide");
      });
    }, 500);
    menuButton.innerHTML = `  <img
    src='${open}'
    class="nav-img"
  />
  Menu`;
  } else {
    opitonsTab.style.right = "35px";
    menuButton.innerHTML = `  <img
    src='${close}'
    class="nav-img"
  />
  Menu`;
  }
  // alignBtn();
};

menuButton.addEventListener("click", openTab);
function moveSlide(n) {
  slides.forEach((slide, index) => {
    if (n) index = obj.method(index);
    slide.style.left = `${slide.clientWidth * index}px`;
  });
}
moveSlide();

buttonPrev.addEventListener("click", () => {
  if (!slideLeft) return;
  counter++;
  moveSlide(1);
  slideLeft--;
  slideRight++;
});
buttonNext.addEventListener("click", () => {
  if (!slideRight) return;
  counter--;
  moveSlide(1);
  slideLeft++;
  slideRight--;
});
const observer = new ResizeObserver(() => {
  changeHW();
  moveSlide(1);
});
observer.observe(slide);

scrollBtn.addEventListener("click", () => {
  if (!scrolled) {
    window.scrollTo({
      left: bodyMain.getBoundingClientRect().left + window.pageXOffset,

      top: bodyMain.getBoundingClientRect().top + window.pageYOffset,

      behavior: "smooth",
    });
    scrolled++;
    document.querySelector(".scroll-img").style.rotate = "270deg";
    document.querySelector(".scroll-img").style.left = "-4px";
    document.querySelector(".scroll-img").style.right = "0px";
    slide.getBoundingClientRect().top -
      console.log(document.querySelector(".nav").clientHeight);
  } else {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
    scrolled--;
    document.querySelector(".scroll-img").style.rotate = "90deg";
    document.querySelector(".scroll-img").style.left = "0px";
    document.querySelector(".scroll-img").style.right = "-4px";
  }
});
headCard.forEach((card) => {
  card.addEventListener("click", () => {
    // homeCard.classList.add("hide");
    if (card.classList.contains("planet")) {
      headCard.forEach((cardd) => {
        cardd.classList.add("hide");
      });

      opitonsTab.style.transition = "none";
      opitonsTab.style.right = `${-400}px`;
      bodyCard.forEach((cardd) => {
        cardd.classList.remove("hide");
      });
      setTimeout(() => {
        opitonsTab.style.transition = "right 0.5s ease-in-out";
        opitonsTab.style.right = "35px";
        alignBtn();
        optionContainer.style.right = "35px";
      }, 1);
    } else if (card.classList.contains("moons")) {
      headCard.forEach((cardd) => {
        cardd.classList.add("hide");
      });

      opitonsTab.style.transition = "none";
      opitonsTab.style.right = `${-400}px`;
      bodyCardMoon.forEach((cardd) => {
        cardd.classList.remove("hide");
      });
      setTimeout(() => {
        opitonsTab.style.transition = "right 0.5s ease-in-out";
        opitonsTab.style.right = "35px";
        alignBtn();
        optionContainer.style.right = "35px";
      }, 1);
    }
  });
});
// opitonsTab.style.transition = "0s";
backBtn.addEventListener("click", () => {
  console.log("wl");
  body.forEach((cardd) => {
    cardd.classList.add("hide");
  });
  optionContainer.style.width = `0px`;
  // optionContainer.style.right = "-400px";

  opitonsTab.style.transition = "none";
  optionContainer.style.transition = "none";
  opitonsTab.style.right = `${-400}px`;
  optionContainer.style.right = "-400px";

  headCard.forEach((cardd) => {
    cardd.classList.remove("hide");
  });
  // optionContainer.style.width = `0px`;

  setTimeout(() => {
    opitonsTab.style.transition = "right 0.5s ease-in-out";
    optionContainer.style.transition = "right 0.5s ease-in-out";
    opitonsTab.style.right = "35px";
  }, 1);
});
bodyCard.forEach((entries) => {
  entries.addEventListener("click", () => {
    const loc = entries.children[1].children[0].textContent;
    window.location.href = `../Planets/${loc}/index.html`;
  });
});
bodyCardMoon.forEach((entries) => {
  entries.addEventListener("click", () => {
    const loc = entries.children[1].children[0].textContent;
    window.location.href = `../Moons/${loc}/index.html`;
  });
});
