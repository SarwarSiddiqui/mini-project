const questions = [
    "Do you love Sarwar? ❤️",
    "Will you go out with Sarwar? 🌟",
    "Am I your favorite person? 🥰",
    "Would you like to grab a coffee sometime? ☕",
    "Are we soulmates? 🌌"
];

const questionElement = document.getElementById('question');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

let currentQuestionIndex = 0;

yesButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex];
    } else {
        questionElement.textContent = "Yay! You said YES to everything! 🥳";
        document.querySelector('.button-container').style.display = 'none';
    }
});

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 50;

    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.max(0, Math.min(x, window.innerWidth - 100))}px`;
    noButton.style.top = `${Math.max(0, Math.min(y, window.innerHeight - 50))}px`;
});
