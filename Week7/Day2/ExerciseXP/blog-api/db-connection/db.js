const knex = require("knex");
require("dotenv").config();

// Do not expose your Neon credentials to the browser

const { PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE } = process.env;
// console.log(process.env);


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

//   const blogs = [
//     { id: 1, title: 'Happy Monday!', content: 'blablablabla' },
//     { id: 2, title: 'See you Tuesday!', content: 'blablablabla' },
//     { id: 3, title: 'Wednesday is the day!', content: 'blablablabla' },
    
// ]
db("blogs")
  .insert(
    [
      {
        title: "TGIF",
        content: "Thanks G.od, it\'s Friday",
      },
      {
        title: "Thursday",
        content: "two more nights, and it\s Shabbat",
      },
    ],
    ["id"]
  )
  .then((data) => {
    console.log(data);
  });



// db("products")
//   //   .where("id", 3)
//   .orderBy("name")
//   .select("name", "price", "id")
//   .then((data) => {
//     console.log(data);
//   });

  // db.raw('select id,name,price from products where id = ?',[1])
  // .then((data) => {
  //   console.log(data.rows);
  // });

/** insert */


/** update */
// db("products")
//   .update({ name: "samsung s24" }, ["id", "name"])
//   .where({ id: 3 })
//   .then((data) => {
//     console.log(data);
//   });

/** delete */
// db("products")
//   .del()
//   .where({ id: 3 })
//   .returning("*")
//   .then((data) => {
//     console.log(data);
//   });

// const test = async () => {
//   try {
//     const trx = await db.transaction();

//     const pdoduct1 = await db("products")
//       .insert({ name: "ccc", price: 111 }, ["id"])
//       .transacting(trx);

//     console.log("product 1 =>", pdoduct1);

//     const pdoduct2 = await db("products")
//       .insert({ name: "ddd", price: 222 }, ["id"])
//       .transacting(trx);

//     console.log("product 2 =>", pdoduct2);

//     await trx.commit();

//   } catch (error) {
//     console.log(e);
//     await trx.rollback();
//   }
// };
// test()
