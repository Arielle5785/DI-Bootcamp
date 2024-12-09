const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
// const usernames = gameInfo.forEach(player => {console.log(
//     `${player.username}!`)
// });

// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :

// const winners = ["becky", "susy"]

// const usernames = gameInfo.filter(player => player.score >5).forEach(player => {console.log(
//     `${player.username}!`)
// });
gameInfo.forEach(player => {
  if (player.score > 5) {
    console.log(`${player.username}!`)
  }
});


// Find and display the total score of the users. (Hint: The total score is 71)

const totalScore = gameInfo.reduce((acc, player) => acc + player.score,0);
console.log(totalScore);


