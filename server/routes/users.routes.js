const {signUser,loginUser,handleGetAllUsers,handleIdByUser} = require('../controllers/users.controllers');

module.exports = (app)=>{
    app.post('/api/users/new',signUser);
    app.post('/api/users/login',loginUser);
    app.get('/api/users/',handleGetAllUsers) ;
    app.get('/api/users/:id',handleIdByUser);
}