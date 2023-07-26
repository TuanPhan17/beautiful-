require('dotenv').config();
const express = require('express');
const cors = require('cors')
require('./config/mongoose.config');

const addUsersRoutes = require('./routes/users.routes');
const addBlogsRoutes = require('./routes/blogs.routes');
const port = process.env.PORT;

const app = express();

app.use(cors());

app.use(express.json());

addUsersRoutes(app);
addBlogsRoutes(app); 


app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));