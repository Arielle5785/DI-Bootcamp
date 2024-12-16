const { Router } = require("express");

const {
    getAllBlogs,
    deleteBlogs,
    createBlogs,
    getOneBlogWithParams,
} = require("../controllers/blogsController.js");

const Router = Router();

router.get("/api/blogs", getAllBlogs);
router.get("/api/blogs/:id", getOneBlogWithParams);
router.post("/api/blogs", createBlogs);
router.put("/api/blogs/:id", updateBlogs);
router.delete("/api/blogs/:id", deleteBlogs);

module.exports = {
    blogsRouter :router,
}