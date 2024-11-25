// userNumber = prompt('pick a number')

// for (let i = 1; i <= userNumber; i++) {
//     if (i % 2 == 0) { console.log(`${i} is even`) }
//     else { console.log(`${i} is odd`) }
// };
let names = ['john', 'sarah', 23, 'Rudolph', 34]
for (let i = 0; i < names.length; i++) {
    let item = names[i];
    if (typeof item === "string") {
        if (item[0] !== item[0].toUpperCase()) {
            item = item[0].toUpperCase() + item.slice(1);
        }
        console.log(item);
    }
}