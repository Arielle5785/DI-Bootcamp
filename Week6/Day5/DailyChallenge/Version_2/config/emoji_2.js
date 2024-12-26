const emojis = [
    { id: 1, emoji: "😀", name: "Grinning Face" },
    { id: 2, emoji: "😂", name: "Face with Tears of Joy" },
    { id: 3, emoji: "😍", name: "Smiling Face with Heart-Eyes" },
    { id: 4, emoji: "😎", name: "Smiling Face with Sunglasses" },
    { id: 5, emoji: "😢", name: "Crying Face" },
    { id: 6, emoji: "😡", name: "Angry Face" },
    { id: 7, emoji: "🥳", name: "Partying Face" },
    { id: 8, emoji: "😱", name: "Face Screaming in Fear" },
    { id: 9, emoji: "🤔", name: "Thinking Face" },
    { id: 10, emoji: "🙃", name: "Upside-Down Face" },
    { id: 11, emoji: "🤩", name: "Star-Struck" },
    { id: 12, emoji: "😴", name: "Sleeping Face" },
    { id: 13, emoji: "😬", name: "Grimacing Face" },
    { id: 14, emoji: "🤗", name: "Hugging Face" },
    { id: 15, emoji: "😇", name: "Smiling Face with Halo" },
    { id: 16, emoji: "🤑", name: "Money-Mouth Face" },
    { id: 17, emoji: "😈", name: "Smiling Face with Horns" },
    { id: 18, emoji: "💀", name: "Skull" },
    { id: 19, emoji: "👻", name: "Ghost" },
    { id: 20, emoji: "🎃", name: "Jack-O-Lantern" },
    { id: 21, emoji: "🎉", name: "Party Popper" },
    { id: 22, emoji: "🔥", name: "Fire" },
    { id: 23, emoji: "🌈", name: "Rainbow" },
    { id: 24, emoji: "⭐", name: "Star" },
    { id: 25, emoji: "💖", name: "Sparkling Heart" },
    { id: 26, emoji: "🍕", name: "Pizza" },
    { id: 27, emoji: "🎈", name: "Balloon" },
    { id: 28, emoji: "🐶", name: "Dog Face" },
    { id: 29, emoji: "🐱", name: "Cat Face" },
    { id: 30, emoji: "🦄", name: "Unicorn Face" }
];
function getRandomEmojiOptions(emojis) {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[randomIndex];
    const otherOptions = emojis
        .filter((emoji) => emoji.id !== correctEmoji.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)
        .map((emoji) => emoji.name);

    return {
        emoji: correctEmoji.emoji,
        correctAnswer: correctEmoji.name,
        options: [...otherOptions, correctEmoji.name].sort(() => 0.5 - Math.random()),
    };
}

module.exports = { emojis, getRandomEmojiOptions };


