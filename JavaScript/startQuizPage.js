const params = new URLSearchParams(window.location.search);
const category = params.get("category");
let categorie_span = document.querySelector('#categorie_span');
let btn = document.querySelector(".start-quiz-btn");
categorie_span.innerText = category;
btn.addEventListener("click", () => {
    window.location.href = `/Pages/questionPage.html?category=${encodeURIComponent(category)}`;
});