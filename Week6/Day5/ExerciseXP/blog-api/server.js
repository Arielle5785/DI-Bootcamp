const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const blog = [
    { id: 1, title: 'Happy Monday!', content: 'blablablabla' },
    { id: 2, title: 'See you Tuesday!', content: 'blablablabla' },
    { id: 3, title: 'Wednesday is the day!', content: 'blablablabla' },
    
]

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

// app.get('/api/blogs', (req, res) =>
// {
//     res.json(blog)
// }
// )
app.get("/api/blogs/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const myBlog = blog.find((item) => item.id == id);
  if (!myBlog) return res.sendStatus(404); //res.status(404).json({message:'product not found'})
  res.json(myBlog);
});



