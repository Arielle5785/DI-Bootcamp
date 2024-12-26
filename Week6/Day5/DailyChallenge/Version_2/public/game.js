let score = 0;
let isGameRunning = true;

async function fetchEmojiQuiz() {
    const response = await fetch('http://localhost:5000/api/emojis');
    if (response.ok) {
        const data = await response.json();
        renderQuiz(data);
    }
}

function renderQuiz(data) {
    const { emoji, options, correctAnswer } = data;

    // Display the emoji
    const emojiDisplay = document.getElementById('emoji-display');
    emojiDisplay.textContent = emoji;

    // Display the options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = options
        .map(
            (option) =>
                `<label>
                    <input type="radio" name="emoji-option" value="${option}" required>
                    ${option}
                </label><br>`
        )
        .join('');

    // Attach the correct answer to the dataset
    optionsContainer.dataset.correctAnswer = correctAnswer;
}

document.getElementById('quiz-form').onsubmit = async (e) => {
    e.preventDefault();
    const selectedOption = document.querySelector('input[name="emoji-option"]:checked').value;
    const correctAnswer = document.getElementById('options-container').dataset.correctAnswer;
    const result = document.getElementById('result');

    if (selectedOption === correctAnswer) {
        score += 10;
        result.textContent = `Correct! 🎉 Your score: ${score}`;
    } else {
        result.textContent = `Wrong! The correct answer was ${correctAnswer}. Your score: ${score}`;
    }

    // Post the score to the backend
    await fetch('http://localhost:5000/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score }),
    });

    // Fetch a new quiz
    setTimeout(() => {
        result.textContent = '';
        fetchEmojiQuiz();
    }, 2000);
};

document.getElementById('endGame').onclick = () => {
    isGameRunning = false; // Stop the game
    const result = document.getElementById('result');
    result.textContent = `Game Over! Final Score: ${score}. Refresh to play again.`;

    // Clear quiz elements
    document.getElementById('emoji-display').textContent = '';
    document.getElementById('options-container').innerHTML = '';
};

// Start the quiz
fetchEmojiQuiz();
