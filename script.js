"use strict";

const menuButton = document.querySelector(".nav-menu");
const opitonsTab = document.querySelector(".options");
const optionContainer = document.querySelector(".option-container");
const backBtn = document.querySelector(".options-back");
const buttonPrev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
const sliderChild = document.querySelector(".slider-child");
const buttonNext = document.querySelector(".next");
const headCard = document.querySelectorAll(".head-card");
const bodyCard = document.querySelectorAll(".body-card-planet");
const bodyCardMoon = document.querySelectorAll(".body-card-moon");
const body = document.querySelectorAll(".body-card");
const homeCard = document.querySelector(".home");

let scroll = 0;
opitonsTab.style.height = `${homeCard.clientHeight}px`;
let counter = 0;
const obj = {
  method(i) {
    return (i += counter);
  },
};
const alignBtn = function () {
  optionContainer.style.height = `${opitonsTab.clientHeight}px`;
  optionContainer.style.width = `${opitonsTab.clientWidth}px`;
};
const openTab = function () {
  const num = Number(opitonsTab.style.right.substring(0, 2));
  const open = "images/menu_24dp_ D3D3D3_FILL0_wght400_GRAD0_opsz24.png";
  const close = "images/close_24dp_ D3D3D3_FILL0_wght400_GRAD0_opsz24.png";

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
    slide.style.left = `${(slide.clientWidth + 35) * index}px`;
  });
}
moveSlide();

buttonPrev.addEventListener("click", () => {
  if (scroll) {
    counter++;
    moveSlide(1);
    scroll--;
  }
});
buttonNext.addEventListener("click", () => {
  let scrollValue = sliderChild.scrollWidth - sliderChild.clientWidth;
  if (scrollValue / 253 <= 1) {
    slides.forEach((slide) => {
      let a = Number(slide.style.left.replace("px", ""));
      slide.style.left = `${a - scrollValue}px`;
    });
    return;
  }
  scroll++;
  counter--;
  moveSlide(1);
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
    window.location.href = `Planets/${loc}/index.html`;
  });
});
bodyCardMoon.forEach((entries) => {
  entries.addEventListener("click", () => {
    const loc = entries.children[1].children[0].textContent;
    window.location.href = `Moons/${loc}/index.html`;
  });
});
slides.forEach((entries) => {
  entries.addEventListener("click", () => {
    const loc = entries.children[1].textContent;
    if (loc === "The Sun") {
      window.location.href = `Star/index.html`;
    } else if (loc === "Moon") {
      window.location.href = `Moons/The Moon/index.html`;
    } else {
      window.location.href = `Planets/${loc}/index.html`;
    }
  });
});
