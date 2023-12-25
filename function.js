// document.addEventListener("DOMContentLoaded", function () {
//     const readToggle = document.querySelector(".read-toggle");
//     const moreContent = document.querySelector(".more-content");

//     readToggle.addEventListener("click", function () {
//         moreContent.classList.toggle("show");
//         if (moreContent.classList.contains("show")) {
//             readToggle.textContent = "Read Less";
//         } else {
//             readToggle.textContent = "Read More";
//         }
//     });
// });
// read more ...........................................................................
document.addEventListener("DOMContentLoaded", function () {
    const readToggle = document.querySelector(".read-toggle");
    const moreContent = document.querySelector(".more-content");

    readToggle.addEventListener("click", function () {
        moreContent.classList.toggle("show");
        if (moreContent.classList.contains("show")) {
            readToggle.textContent = "Read Less";
        } else {
            readToggle.textContent = "Read More";
        }
    });
});
// scrollreval.............................................................................
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    dilay: 200,
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .Services-container, .portfolio-box, contact from', {origin:'bottom'});
ScrollReveal().reveal('.about-img, .home-content', {origin:'left'});
ScrollReveal().reveal('.home-content p , .about-content', {origin:'right'});
