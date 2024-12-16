const { blogs } = require("../config/data.js");
const { getAllBlogsFromDB } = require("../models/blogsModels.js");

const getAllBlogs = (req, res) => {
    getAllBlogsFromDB()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.log(e);
            res.status(404).json({ msg: "not found" })
        });
};

const deleteBlog = (req, res) => {
  const { id } = req.params;
  const index = blogs.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "blog not found to delete" });
  }

  blogs.splice(index, 1);
  // res.json({status: "deleted" });
  res.sendStatus(200);
};

const updateBlogs = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const index = blogs.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "blog not found" });
  }

  blog[index] = { ...blogs[index], title, content };

  res.status(200).json(blogs);
};

const createBlog = (req, res) => {
  console.log(req.body);
  const { title, content } = req.body;
  const newBlog = { id: blogs.length + 1, title, content };
  blogs.push(newBlog);
  res.json(blogs);
};

const getOneBlogtWithParams = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const myBlog = blogs.find((item) => item.id == id);
  if (!myBlog) return res.sendStatus(404); //res.status(404).json({message:'product not found'})
  res.json(myBlog);
};

module.exports = {
  getAllBlogs,
  deleteBlogs,
  updateBlogs,
  createBlogs,
  getOneBlogWithParams,

};
