// Exercise 1
// const compareToTen = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num <= 10) {
//             resolve('accepted')
//         } else {
//             reject('rejected')
//         }
//     });
// };

//In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

//In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//     .catch(error => console.log(error))
//  compareToTen('a')
//   .then(result => console.log(result))
//     .catch(error => console.log(error))
// Exercise2
// const functionName = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('success');
//         }, 4000);
//     })
// };

// functionName()
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

// Exercise 3
// const promiseName = Promise.resolve(3);
// promiseName
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
// //     })

// const promiseName = Promise.reject('Boo');
// promiseName
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     })

// const promise2 = new Promise    

function job() {
    setTimeout(callback1, 2000);
    let counter = 0;
    
    const intervalId = setInterval(() => {
        counter++
        callback2()
        if (counter >= 3) { clearInterval(intervalId) }
        
    }, 1000);
    
}
const callback1 = () => {
    console.log('callback1');
    
}
const callback2 = () => {
    console.log('callback2');
    
}
job()
//correction from Raquel so the order is repected.
// output expected: callBack1, callBack2, callBack2, callBack2
// function job() {
//     setTimeout(callback1, 2000);
//     let counter = 0;
//     function intervalId() {
//         const interval = setInterval(() => {
//             counter++
//             if (counter >= 4) { clearInterval(interval) }
//             else callback2()
//         }, 1000);
//     }
//     setTimeout(intervalId,2100)
// }
// const callback1 = () => {
//     console.log('callback1');
// }
// const callback2 = () => {
//     console.log('callback2');
// }
// job()













