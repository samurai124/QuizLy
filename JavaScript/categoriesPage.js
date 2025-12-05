let card_1 = document.querySelector('#card-1');
let card_2 = document.querySelector('#card-2');
let card_3 = document.querySelector('#card-3');
card_1.addEventListener("click", () => {
    let category = "java";
    window.location.href = `/Pages/startQuizPage.html?category=${encodeURIComponent(category)}`;
});
card_2.addEventListener("click", () => {
    let category = "javascript";
    window.location.href = `/Pages/startQuizPage.html?category=${encodeURIComponent(category)}`;
});
card_3.addEventListener("click", () => {
    let category = "sql";
    window.location.href = `/Pages/startQuizPage.html?category=${encodeURIComponent(category)}`;
});

