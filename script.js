/* =========================
   ELEMENTS
========================= */

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const memoryBtn = document.getElementById("memoryBtn");


/* =========================
   OPEN WEBSITE
========================= */

openBtn.addEventListener("click", () => {

    /* START MUSIC */

    music.volume = 0.65;

    music.play().catch(() => {
        console.log("Music requires user interaction.");
    });


    /* =========================
       BLUE LOVE FALLING EFFECT
    ========================= */

    for(let i = 0; i < 90; i++){

        const item = document.createElement("div");

        const icons = [
            "💙",
            "🩵",
            "✨",
            "✦",
            "♡",
            "⋆"
        ];

        item.innerHTML =
            icons[
                Math.floor(
                    Math.random() * icons.length
                )
            ];

        item.classList.add("falling");

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.fontSize =
            (Math.random() * 18 + 16) + "px";

        item.style.animationDuration =
            (Math.random() * 2.5 + 2) + "s";

        item.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(item);


        setTimeout(() => {

            item.remove();

        }, 6000);

    }


    /* =========================
       OPENING TRANSITION
    ========================= */

    opening.style.transition =
        "opacity 1.2s ease, transform 1.2s ease";

    opening.style.opacity = "0";

    opening.style.transform =
        "scale(1.05)";


    setTimeout(() => {

        opening.style.display = "none";

        mainContent.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);

});


/* =========================
   MEMORY BUTTON
========================= */

memoryBtn.addEventListener("click", () => {

    document
        .getElementById("memories")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================
   MUSIC BUTTON
========================= */

musicBtn.addEventListener("click", () => {

    if(music.paused){

        music.play().catch(() => {});

        musicBtn.innerHTML =
            "⏸ Pause Music";

    }else{

        music.pause();

        musicBtn.innerHTML =
            "🎵 Play Music";

    }

});


/* =========================
   MUSIC STATE SYNC
========================= */

music.addEventListener("play", () => {

    musicBtn.innerHTML =
        "⏸ Pause Music";

});

music.addEventListener("pause", () => {

    musicBtn.innerHTML =
        "🎵 Play Music";

});


/* =========================
   AUTO SLIDER
========================= */

const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dot");

let currentSlide = 0;


function showSlide(index){

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });


    dots.forEach((dot) => {

        dot.classList.remove("active");

    });


    if(slides[index]){

        slides[index]
            .classList.add("active");

    }


    if(dots[index]){

        dots[index]
            .classList.add("active");

    }

}


/* =========================
   SLIDER INTERVAL
========================= */

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}, 3500);


/* =========================
   DOT CLICK
========================= */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

    });

});


/* =========================
   FLOATING BLUE HEARTS
========================= */

const heartsContainer =
    document.querySelector(".hearts");


function createHeart(){

    const heart =
        document.createElement("div");

    heart.classList.add("heart");


    const icons = [
        "💙",
        "🩵",
        "♡",
        "✦",
        "✨"
    ];


    heart.innerHTML =
        icons[
            Math.floor(
                Math.random() * icons.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (Math.random() * 18 + 14) + "px";


    heart.style.animationDuration =
        (Math.random() * 5 + 8) + "s";


    heart.style.animationDelay =
        Math.random() * 2 + "s";


    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 15000);

}


/* CREATE HEARTS */

setInterval(
    createHeart,
    700
);


/* INITIAL */

showSlide(0);
