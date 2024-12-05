    
function isAnagram(word1, word2) {
    const string1 = word1.toLowerCase().split(' ').join('');
    const string2 = word2.toLowerCase().split(' ').join('');
    if (string1.length != string2.length) return false;

    const total = {};
    for (const letter of string1) {
        total[letter] = total[letter] + 1 || 1;
    }
    for (const letter of string2) {
        total[letter] = total[letter] ? total[letter] - 1 : -1;
    }
    const differences = Object.values(total);
        return !differences.some(num => num!= 0)
    }
const result1 = isAnagram('azdlowaazz', 'azdowaazze'); //true
// console.log('result1', result1);

