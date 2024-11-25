// let sentence = 'The movie is not that bad, I liked it!';
// let sentence = 'This dinner is not that bad ! You cook well';
// let sentence = 'This movie is not so bad !';
let sentence = 'This dinner is bad !';
let wordNot = sentence.indexOf('not'); 
let wordBad = sentence.indexOf('bad');
let newSentence = '';

if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
    newSentence = sentence.substring(0, wordNot) + 'good' + sentence.substring(wordBad + 3);
    console.log(newSentence);} 
else { console.log(sentence) };

