export const multi = (a, b)=> {
    return a*b
};
export const divide = (a, b) => {
    if (b === 0) {
        throw new Error('cannot divide by zero')
    } return a / b
};
export const plus = (a, b) => {
    return a + b
};
export const minus = (a, b) => {
    return a - b
};
// console.log(multi(4, 5));
// module.exports = {
//     multi,
//     divide,
//     plus,
//     minus
// }
