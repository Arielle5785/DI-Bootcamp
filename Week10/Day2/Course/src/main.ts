// let num = 9;
// num = 10;
// num = "10";
// console.log(num)
// let num = 10;
// console.log(10)
// let num: number = 1;
// num = true;
// console.log(num);

type StrNumT = string | number,
const sum = (a: number, b: StrNumT): StrNumT => {
    if (typeof b === "string") {
        // return a + b + "";
        return -1
    }
    return a + b;
};