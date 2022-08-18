const app = {
  init: () => {
    document.addEventListener("DOMContentLoaded", app.content);
  },

  content: () => {
    let page = document.body.id;
    switch (page) {
      case "homepage":
        app.navSlide();
        app.mainImageSlide();
        break;
      case "projects":
        app.navSlide();
        break;
      case "fitness":
        app.navSlide();
        app.chestTriList();
        case "contact":
        app.navSlide();
        app.form_submit();
    }
  },

  navSlide: () => {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".navbar-links");
    const navLinks = document.querySelectorAll(".navbar-links li");
    // Nav toggle
    menu.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      // Link animation
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 5 + 0.5
          }s`;
        }
      });
      // Menu animation
      menu.classList.toggle("menu-active");
    });
  },

  mainImageSlide: () => {
    const image = document.querySelector(".img-container");
    const introsec = document.querySelector(".intro-section");
    const firstintro = document.querySelector(".main-content");
    const button = document.getElementById("main-button");
    const text = document.querySelector(".text");
    const intro = document.querySelector(".introduce");
    const buttontwo = document.getElementById("buttontwo");

    button.addEventListener("click", () => {
      button.style.display = "none";
      text.style.display = "none";
      introsec.style.display = "inline-block";
      buttontwo.style.display = "inline-block";
      buttontwo.classList.toggle("change-btn");
      image.classList.toggle("image-active");
      introsec.classList.remove("intro-inactive");
      introsec.classList.add("intro-active");
    });

    buttontwo.addEventListener("click", () => {
      introsec.classList.add("intro-inactive");
      setTimeout(function () {
        introsec.classList.remove("intro-active");
        introsec.classList.remove("intro-inactive");
        buttontwo.classList.toggle("change-btn");
        button.style.display = "inline-block";
        text.style.display = "block";
        image.classList.toggle("image-active");
      }, 1000);
    });
  },

  chestTriList: () => {
    const chestButton = document.getElementById("chest-tri-btn");
    const backButton = document.getElementById("back-bi-btn");
    const legButton =  document.getElementById("legs-btn");
    const armButton =  document.getElementById("arms-btn");
    const table = document.querySelector(".ex-table");
    const exerciseContainer = document.querySelector(".exercise-list");
    const chestTri = document.querySelector(".chest-tri-ex");
    const backBi = document.querySelector(".back-bi-ex");
    const legs =  document.querySelector(".leg-ex");
    const arms =  document.querySelector(".arm-ex");
    const hidebutton = document.getElementById("hide-ex");

    chestButton.addEventListener("click", () => {
      table.style.display = "none";
      chestTri.style.display = "block";
      exerciseContainer.style.display = "block";
    });

    backButton.addEventListener("click", () => {
      table.style.display = "none";
      backBi.style.display = "block";
      exerciseContainer.style.display = "block";
    });

    legButton.addEventListener("click", () => {
      table.style.display = "none";
      legs.style.display = "block";
      exerciseContainer.style.display = "block";
    });

    armButton.addEventListener("click", () => {
      table.style.display = "none";
      arms.style.display = "block";
      exerciseContainer.style.display = "block";
    });


    hidebutton.addEventListener("click", () => {
        table.style.display = "revert";
        exerciseContainer.style.display = "none";
        chestTri.style.display = "none";
        backBi.style.display = "none";
        legs.style.display = "none";
        arms.style.display = "none";
    });
  },
};

app.init();

