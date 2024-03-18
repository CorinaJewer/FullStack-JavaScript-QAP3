const express = require('express');
const app = express();
const menuItemsRoute = require('./routes/menuItems');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.urlencoded({ extended: true, }));

const port = 3000;

global.DEBUG = true;

app.get('/', (req,res) =>{
    //res.send("Welcome to Martha's Good Eats Menu.")
    res.render('index.ejs', { name: 'Peter'});
})

const menuItemsRouter = require('./routes/menuItems')
app.use('/menu-items', menuItemsRouter);

const loginRouter = require('./routes/login')
app.use('/login', loginRouter);

const apiMenuItemsRouter = require('./routes/api/apiMenuItems');
app.use('/api/menu-items', apiMenuItemsRouter);

app.use((req, res) => {
    res.status(404).render('404');
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
