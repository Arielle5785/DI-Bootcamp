const knex = require("knex");
require("dotenv").config();

// Do not expose your Neon credentials to the browser

const { PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE } = process.env;

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});

// async function getVersion(){
//     try{
//         const result = await db.raw("select version()");
//         console.log(result.rows);
//     }catch(err){
//         console.log(err);
//     }
// }

// const hashpwd = [
//     {id:1, name:"ArielleB", salt:"HZN+EYHwZwBeDvXYBYmBF3Uc4WJugwpWiS9wLQFYJseKIKn1sdezbkE3blwTa5LZf4ufZJMrul+osJpf3+yrRVqJ+rLMDcU29UClDqkw9vzSZfnXoyG/EabH81vwWsQ0kelKd/kTUwY3Scm0PuBqtH+kKF9L8/75MX4gJ+jcUqA=", hash:"tAMlZ8JROQ1mUTIzye2d8pLABYnCOKbmi6AQk4Saoj1Y2Ooj4m9wyHkPoup3AVpzHcIktsDVeEP5bBccZzOnig=="}
// ];
// const users = [
//     { email: "arielle.benadi@gmail.com", username: "Canelle", first_name: "Arielle", last_name: "Benadi" }
// ]

// async function getVersion() {
//     const result = await db.raw('select version()')
//     console.log(result);
    
// }
// getVersion()
// db("users").select("*")
//     .orderBy('username)
//     .where({ id: 1 })
//     .where("id",1)
//     .then((data) => {
//         console.log(data)
//     }
    
// )
// db.raw('select id,username,email,first_name,last_name where id =1')
//     .then((data) => {
//         console.log(data.rows);
        
//     })

db("users")
    .insert(
        { email: "bbb@gmail.com", username: "BabaBoom", first_name: "Brigitte", last_name: "Bardot" },
        { email: "ccc@gmail.com", username: "Gainsbarre", first_name: "Serge", last_name: "Gainsbourg" },
        { email: "ddd@gmail.com", username: "Ugolin", first_name: "Daniel", last_name: "Auteuil" }
    )
     .then((data) => {
        console.log(data.rows);
        
   })   

module.exports = {
    // hashpwd,
    users,
    db,
    getVersion
};


