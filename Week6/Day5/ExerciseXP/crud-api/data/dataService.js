const axios = require('axios')


// const fetchPosts = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!res.ok) {
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//     }
// };

// module.exports = {
//     fetchPosts,
// }


async function fetchPosts(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

module.exports = {fetchPosts}