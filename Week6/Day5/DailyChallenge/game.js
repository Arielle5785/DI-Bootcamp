const { emojis } = require('./emoji.js')

const correctRandomEmoji = ()=>{
const number = Math.floor(Math.random() * emojis.length) + 1;
return (emojis[number])
 }   

// console.log(correctRandomEmoji() ) 

const getFourOtherNames = () => {
    const correctEmoji = correctRandomEmoji(); // Get the correct random emoji
    const remainingEmojis = emojis.filter((emoji) => emoji.id !== correctEmoji.id); // Exclude the correct emoji
    const shuffled = remainingEmojis.sort(() => 0.5 - Math.random()); // Shuffle the remaining emojis
    const otherNames = shuffled.slice(0, 4).map((emoji) => emoji.name);
    return otherNames
}
// console.log(getFourOtherNames());

const quiz = [correctRandomEmoji(), ...getFourOtherNames()];
console.log(quiz);
        