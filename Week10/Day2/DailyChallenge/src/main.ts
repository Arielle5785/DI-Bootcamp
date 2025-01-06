const validateUnionType =(value: any, allowedTypes: string[]): boolean =>{
    const valueType = Array.isArray(value) ? "array" : typeof value;
    return allowedTypes.includes(valueType);
}
    
//Example of usage:
const value1 = "Hello the world";
const value2 = 42;
const value3 = true;
const value4 = ["string1", "string2", "string3"]
const allowedTypes = ["string"]//true, false,false,false
// const allowedTypes = ["string", "array"]//true, false,false, true
// const allowedTypes = ["string", "number", "array"]//true, true, false, true
// const allowedTypes=["string", "number", "array", "boolean"]//true, true, true, true

console.log(validateUnionType(value1, allowedTypes));
console.log(validateUnionType(value2, allowedTypes));
console.log(validateUnionType(value3, allowedTypes));
console.log(validateUnionType(value4, allowedTypes));