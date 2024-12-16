const { db } = require('../config/data.js');

const getAllBlogsFromDB = () => {
    return db("blogs").select("id", "title", "content").orderBy("title");
};

module.exports = {
    getAllBlogsFromDB
};