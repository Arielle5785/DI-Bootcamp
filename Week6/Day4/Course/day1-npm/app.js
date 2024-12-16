// const slugify = require('slugify')
// console.log(slugify('my link to the article'));
import { getUsers } from "./info";
getUsers('https://jsonplaceholder.typicode.com/user')
    .then(data) => {
    console.log(data);
    
})
.catch (e) => {
    console.log(e.message);
    
});
