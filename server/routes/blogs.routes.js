const {handleCreateBlog,handleGetAllBlogs,handleIdByBlog,handleDeleteById,handleUpdateByIdBlog} = require('../controllers/blogs.controllers');

module.exports = (app)=>{
    app.post('/api/blog/new',handleCreateBlog);
    app.get('/api/blog/',handleGetAllBlogs) ;
    app.get('/api/blog/:id',handleIdByBlog);
    app.delete('/api/blog/:id',handleDeleteById);
    app.put('/api/blog/:id',handleUpdateByIdBlog)
}