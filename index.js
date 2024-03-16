const express = require('express');
const app = express();
const menuItemsRoute = require('./routes/menuItems');
const port = 3000;

global.DEBUG = true;

// Mount Router
app.get('/', (req,res) =>{
    res.send("Welcome to Martha's Good Eats Menu.")
})

const menuItemsRouter = require('./routes/menuItems')
app.use('/menu-items', menuItemsRouter);

const apiMenuItemsRouter = require('./routes/api/apiMenuItems');
app.use('/api/menu-items', apiMenuItemsRouter);

app.use((req, res) => {
    res.status(404).render('404');
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
