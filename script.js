/* =========================
   SCROLL REVEAL
========================= */

const elements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach((element) => {

    observer.observe(element);

});


/* =========================
   CURSOR GLOW
========================= */

const cursor = document.querySelector(".cursor-glow");


document.addEventListener("mousemove", (event) => {

    cursor.style.left = event.clientX + "px";

    cursor.style.top = event.clientY + "px";

});


/* =========================
   PARALLAX
========================= */

const heroPhoto =
    document.querySelector(".candidate-photo");


window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    if (scroll < window.innerHeight) {

        heroPhoto.style.transform =
            `translateX(-50%) translateY(${scroll * 0.25}px)`;

    }

});


/* =========================
   IMAGE ERROR
========================= */

const images =
    document.querySelectorAll("img");


images.forEach((image) => {

    image.addEventListener("error", () => {

        image.style.background = "#222";

        image.alt = "Здесь будет фотография кандидата";

    });

});