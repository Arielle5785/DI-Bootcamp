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

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/api/blogs', (req, res) =>
{
    res.json(blog)
}
)
// app.get("/api/blogs/:id", (req, res) => {
//   console.log(req.params);
//   const { id } = req.params;
//   const myBlog = blog.find((item) => item.id == id);
//   if (!myBlog) return res.sendStatus(404); //res.status(404).json({message:'product not found'})
//   res.json(myBlog);
// });


// app.post('/api/blogs', (req, res) => {
//   const newBlog = {
//     id: blog.length + 1,
//     title: req.body.title,
//     content: req.body.content,
//   };
//   blog.push(newBlog);
//   res.status(201).json(blog);
// }
// )

// app.put('/api/blogs/:id', (req, res) => {
//   // const id = Number(req.params.id);
//   const { id } = req.params;
//   const index = blog.findIndex((blog) => blog.id === Number(id));
//   if (index === -1) {
//     return res.status(404).send('blog not found');
//   }
//   const updateBlog = {
//     id: blog[index].id,
//     title: req.body.title,
//     content: req.body.content,
//   };
//   blog[index] = updateBlog;
//   res.status(200).json(blog)
// });
 
// app.delete('/api/blogs/:id', (req, res) => {
//   const id = Number(req.params.id);
//   const index = blog.findIndex((blog) => blog.id === id);
//   if (index === -1) {
//     return res.status(404).send('Blog not found');
//   }  blog.splice(index, 1);
//     res.status(200).json('Blog deleted')
// }
// )