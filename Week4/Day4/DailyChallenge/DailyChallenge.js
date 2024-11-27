// 1. get Input
// 2. check empty
// 3. write a story
// 4. bonus; shuffle
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("libform");
    const storySpan = document.getElementById("story");
    const shuffleButton = document.getElementById("shuffle-button");
    const storyTemplates = [
        "Once upon a time, there was a very {adjective} {noun} who loved to {verb} with {person} in {place}.",
        "In {place}, a {adjective} {noun} decided to {verb} with {person}, and it became a legend.",
        "{person} went to {place} with a {adjective} {noun} to {verb} all day long!"
    ];
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const noun = document.getElementById("noun").value.trim();
        const adjective = document.getElementById("adjective").value.trim();
        const person = document.getElementById("person").value.trim();
        const verb = document.getElementById("verb").value.trim();
        const place = document.getElementById("place").value.trim();

        if (!noun|| !adjective || !person || !verb|| !place) {
            alert("Please fill out all fields with words!");
            return;
        }

        const story = storyTemplates[0]
            .replace("{noun}", noun)
            .replace("{adjective}", adjective)
            .replace("{person}", person)
            .replace("{verb}", verb)
            .replace("{place}", place);

        storySpan.textContent = story;
    });

    // Event listener for shuffle button
        shuffleButton.addEventListener("click", () => {
        const noun = document.getElementById("noun").value.trim();
        const adjective = document.getElementById("adjective").value.trim();
        const person = document.getElementById("person").value.trim();
        const verb = document.getElementById("verb").value.trim();
        const place = document.getElementById("place").value.trim();

        // Validate inputs
        if (!noun|| !adjective || !person || !verb|| !place) {
            alert("Before shuffling, please fill out all fields with words!");
            return;
        }

        // Pick a random story template
        const randomTemplate = storyTemplates[Math.floor(Math.random() * storyTemplates.length+1)];

        // Generate a new story
        const shuffledStory = randomTemplate
            .replace("{noun}", noun)
            .replace("{adjective}", adjective)
            .replace("{person}", person)
            .replace("{verb}", verb)
            .replace("{place}", place);

        // Display the new story
        storySpan.textContent = shuffledStory;
    });
});
