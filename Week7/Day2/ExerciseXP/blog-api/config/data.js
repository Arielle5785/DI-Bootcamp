const knex = require("knex");
require("dotenv").config();

const { PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE } = process.env;

const db = knex({
    client: "pg",
    connections: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: { rejectUnauthorized: false },
    },
});

const blogs = [
    { id: 1, title: 'Happy Monday!', content: 'first day of the week' },
    { id: 2, title: 'See you Tuesday!', content: 'don’t work too hard until then!' },
    { id: 3, title: 'Wednesday is the day!', content: 'blablablabla' },
    
]

module.exports = {
    blogs,
}
