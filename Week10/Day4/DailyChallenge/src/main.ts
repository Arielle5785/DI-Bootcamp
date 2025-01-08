type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
};

// Not sure which one should it be
//--1
// type One = (User | Product | Order)[];

// const handleData= (items: One):string[] =>{
//     return items.map((item) => {
//         if (item.type === 'user') {
//             return `Welcome ${item.name}, you have ${item.age}`;
//         } else if (item.type === 'product') {
//             return `Here is the product id ${item.id} and price ${item.price}`;
//         } else if (item.type === 'order') {
//             return `Here is a summary of your order ${item.orderId} and amount ${item.amount}`;
//         } else {
//             return "There is an error.";
//         }
//     });
// };

// const data: (One) = [
//     { type: 'user', name: 'John', age: 23 },
//     { type: 'product', id: 101, price: 49.99 },
//     { type: 'order', orderId: 'A123', amount: 200 },
// ]
// console.log(handleData(data));


//--2
const handleData = (item: (User | Product | Order)): string => {
        if (item.type === 'user') {
            return `Welcome ${item.name}, you have ${item.age}`;
        } else if (item.type === 'product') {
            return `Here is the product id ${item.id} and price ${item.price}`;
        } else if (item.type === 'order') {
            return `Here is a summary of your order ${item.orderId} and amount ${item.amount}`;
        } else {
            return "There is an error.";
        }
    
}

const user1: User = { type: 'user', name: 'Alice', age: 30 };
const product1: Product = { type: 'product', id: 101, price: 49.99 };
const order1: Order = { type: 'order', orderId: 'A123', amount: 200 };

console.log(handleData(user1));
console.log(handleData(product1));
console.log(handleData(order1));