const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

const toJs = (morseJsonString) => {
    return new Promise((resolve, reject) => {
     try {
      // Parse the JSON string into a JavaScript object
      const morseObject = JSON.parse(morseJsonString);

      // Check if the object is empty
      if (Object.keys(morseObject).length === 0) {
        reject('The Morse object is empty');
      } else {
        resolve(morseObject);
      }
    } catch (error) {
      // Handle invalid JSON format
      reject('Invalid JSON string');
    }
  });
};
// toJs(morse)
//     .then((morseObject) => {
//         console.log('Morse JS Object: ', morseObject);   
//     })
//     .catch((error) => {
//         console.log('Error: ', error);
        
//     })

const toMorse = (morseJS) => {
    return new Promise((resolve, reject) => {
        const userInput = prompt('Enter a word or sentence to read it in morse: ').toLowerCase();
        const characters = userInput.split('');
        const morseTranslation = [];
        for (let char of characters) {
            if (morseJS[char]) {
                morseTranslation.push(morseJS[char]);
            } else {
                reject(`This character ${char} is not listed on the morse dictionary.`);
                return
            }
        }
        resolve(morseTranslation);
    });
}; 

// toJs(morse)
//   .then((morseObject) => {
//     console.log("Morse JS Object: ", morseObject);
//     return toMorse(morseObject); // Pass the resolved object to toMorse
//   })
//   .then((translation) => {
//     console.log("Morse translation:", translation);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

const joinWords = (morseTranslation) => {
  const resultContainer = document.getElementById("result");
  const errorContainer = document.getElementById("error");
  resultContainer.innerHTML = morseTranslation.join("<br>");
  errorContainer.innerHTML = "";

};

toJs(morse)
  .then((morseObject) => {
    console.log("Morse JS Object: ", morseObject);
    return toMorse(morseObject); // Pass the resolved object to toMorse
  })
  .then((translation) => {
    console.log("Morse translation:", translation);
    joinWords(translation); // Pass the translation array to joinWords
  })
  .catch((error) => {
      console.log("Error:", error);
      const errorContainer = document.getElementById("error");
      errorContainer.innerHTML = error;
  });