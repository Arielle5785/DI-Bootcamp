// EX1: Giphy
// const giphy = async () => {
//     try {
//         const response = await fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
//         if (!response.ok) {
//             throw new Error(`Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(`Error: ${error.message}`);
        
//     }
// }
    
//     giphy()
//ex2: giphy API
// const giphy = async () => {
//     try {
//         const response = await fetch('https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
//         if (!response.ok) {
//             throw new Error(`Status: ${response.status}`);
//         }
//         const data = await response.json();
//         const dataList = data.data
        
//         dataList.forEach(gif => {
//             console.log(gif.url)
//         });
        
//     } catch (error) {
//         console.log(`Error: ${error.message}`);
        
//     }
// }
// giphy()
     
// EX3 ASYNC Function
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

// const functionAsync = async () => {
//     try {
//         const response = await fetch('https://www.swapi.tech/api/starships/9/')
//         if (!response.ok) {
//             throw new Error(`Status: ${response.status}`);
//         }
//         const data = await response.json();

//         const objectStarWars = data
//         console.log(objectStarWars.result)
//     }
//     catch (error) {
//         console.log(`Error: ${error.message}`);
//     }
// }
// functionAsync()

//Ex4 Analyze
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
//output expected: print  'calling' then 2 secs later 'resolved'