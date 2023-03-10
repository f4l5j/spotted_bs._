/*cookies*/
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 0);

/*introduzione*/
const introduzione1Container = document.querySelector(".introduzione1-container");
const introduzione1Button = document.querySelector(".introduzione1-btn");

introduzione1Button.addEventListener("click", () => {
  introduzione1Container.classList.remove("active");
  localStorage.setItem("introduzione1OK", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("introduzione1OK")) {
    introduzione1Container.classList.add("active");
  }
}, 0);
/*introduzione2*/
const introduzione2Container = document.querySelector(".introduzione2-container");
const introduzione2Button = document.querySelector(".introduzione2-btn");

introduzione2Button.addEventListener("click", () => {
  introduzione2Container.classList.remove("active");
  localStorage.setItem("introduzione2OK", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("introduzione2OK")) {
    introduzione2Container.classList.add("active");
  }
}, 0);
/*introduzione3*/
const introduzione3Container = document.querySelector(".introduzione3-container");
const introduzione3Button = document.querySelector(".introduzione3-btn");

introduzione3Button.addEventListener("click", () => {
  introduzione3Container.classList.remove("active");
  localStorage.setItem("introduzione3OK", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("introduzione3OK")) {
    introduzione3Container.classList.add("active");
  }
}, 0);
/*giochi1
const giochi1Container = document.querySelector(".giochi1-container");
const giochi1Button = document.querySelector(".giochi1-btn");

giochi1Button.addEventListener("click", () => {
  giochi1Container.classList.remove("active");
  localStorage.setItem("giochi1OK", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("giochi1OK")) {
    giochi1Container.classList.add("active");
  }
}, 0);
const giochi2Container = document.querySelector(".giochi2-container");
const giochi2Button = document.querySelector(".giochi2-btn");

giochi2Button.addEventListener("click", () => {
  giochi2Container.classList.remove("active");
  localStorage.setItem("giochi2OK", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("giochi2OK")) {
    giochi2Container.classList.add("active");
  }
}, 0);*/
/*v2*/
const v2Container = document.querySelector(".v2-container");
const v2Button = document.querySelector(".v2-btn");

v2Button.addEventListener("click", () => {
  v2Container.classList.remove("active");
  localStorage.setItem("v2OK", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("v2OK")) {
    v2Container.classList.add("active");
  }
}, 0);
/*v2*/
const merchContainer = document.querySelector(".merch-container");
const merchButton = document.querySelector(".merch-btn");

merchButton.addEventListener("click", () => {
  merchContainer.classList.remove("active");
  localStorage.setItem("merchOK", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("merchOK")) {
    merchContainer.classList.add("active");
  }
}, 0);