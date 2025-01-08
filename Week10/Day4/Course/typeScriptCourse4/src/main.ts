// interface Student {
//   [key: string|number]: string |number|string[] | undefined,
//   name: string,
//   grade?: string[],
// }

// const student1: Student

const isObj = <T>(arg: T): T => arg

isObj(1)
console.log(isObj);

