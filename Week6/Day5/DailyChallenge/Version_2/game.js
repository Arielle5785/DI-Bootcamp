// const { emojis } = require('./emoji.js');
const { emojis } = require ( './emoji.js');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5005;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

// Generate random emoji options
function getRandomEmojiOptions() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[randomIndex];

    // Get 3 other unique names
    const otherOptions = emojis
        .filter((emoji) => emoji.name !== correctEmoji.name)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((emoji) => emoji.name);

    // Combine and shuffle options
    const options = [...otherOptions, correctEmoji.name].sort(() => Math.random() - 0.5);

    return {
        emoji: correctEmoji.emoji,
        correctAnswer: correctEmoji.name,
        options,
    };
}

// Routes
app.get('/emojis', (req, res) => {
    const quizData = getRandomEmojiOptions();
    res.send(quizData);
});

app.post('/submit', (req, res) => {
    const { userAnswer, correctAnswer } = req.body;
    res.send(userAnswer === correctAnswer);
});

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
async function fetchQuizData() {
    const response = await fetch('http://localhost:5005/emojis');
    if (response.ok) {
        return await response.json();
    }
    throw new Error('Failed to fetch quiz data');
}

function renderQuiz(data) {
    const { emoji, options, correctAnswer } = data;

    // Update emoji display
    document.getElementById('displayEmoji').textContent = emoji;

    // Update options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = options
        .map(
            (option) => `
                <label>
                    <input type="radio" name="emoji-option" value="${option}">
                    ${option}
                </label><br>
            `
        )
        .join('');

    // Attach correct answer to DOM for validation
    optionsContainer.dataset.correctAnswer = correctAnswer;
}

async function handleSubmit(event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="emoji-option"]:checked');
    const correctAnswer = document.getElementById('options-container').dataset.correctAnswer;

    if (!selectedOption) {
        alert('Please select an option.');
        return;
    }

    const userAnswer = selectedOption.value;
    const response = await fetch('http://localhost:5005/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userAnswer, correctAnswer }),
    });

    const isCorrect = await response.json();
    alert(isCorrect ? 'Correct! 🎉' : `Wrong! The correct answer was ${correctAnswer}.`);

    // Fetch new quiz data
    const quizData = await fetchQuizData();
    renderQuiz(quizData);
}

// Initialize game
(async function initializeGame() {
    const quizData = await fetchQuizData();
    renderQuiz(quizData);

    // Attach event listener to form
    document.getElementById('quiz-form').addEventListener('submit', handleSubmit);
})();
