const params = new URLSearchParams(window.location.search);
const score = parseInt(params.get("score")) || 0;
console.log(score);
 
const total = 10;

function retakeQuiz() {
   window.location.href = '/Pages/startQuizPage.html';
}

function goToCategories() {
    window.location.href = '/Pages/categoriesPage.html';
}

window.onload = function() {
    const percentage = (score / total) * 100;
    const wrongAnswers = total - score;
    document.querySelector('.results-title').textContent = `${score} / ${total} Correct`;
    document.querySelector('#scor_percent').textContent = `${Math.round(percentage)}%`;
    document.querySelector('#correct_answers').parentElement.innerHTML = 
        `<span class="stat-label" id="correct_answers">Correct Answers:</span> ${score}`;
    document.querySelector('#wrong_answers').parentElement.innerHTML = 
        `<span class="stat-label" id="wrong_answers">Incorrect Answers:</span> ${wrongAnswers}`;
    const circumference = 283;
    const offset = circumference - (percentage / 100) * circumference;
    document.querySelector('.circle-progress').style.setProperty('--progress', offset);
};