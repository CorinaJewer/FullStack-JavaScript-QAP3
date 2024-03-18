const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('login');
  });

router.post('/', (req, res) => {
  res.redirect('login/menu-items')
});

router.get('/menu-items', async (req, res) => {
    const menuItems = [
        {menu_id: 7, name: 'Soup', price: '7.99', category: 'Lunch'},
        {menu_id: 1, name: 'Pancakes', price: '14.99', category: 'Breakfast'},
        {menu_id: 4, name: 'Burger', price: '17.99', category: 'Dinner'}];

    res.render('menuItemsStaff', { menuItems: menuItems });
});

router.get('/menu-items/:id/edit', async (req, res) => {
    const menuItem = 
      {menu_id: 4, name: 'Burger', description: 'Grade A Beef Burger.', price: '17.99', category: 'Lunch'};
    res.render('menuItemPatch', { locals:menuItem });
});

router.get('/menu-items/:id', async (req, res) => {  
}); 

router.get('/menu-items/:id/delete', async (req, res) => {
  const menuItem = 
      {menu_id: 4, name: 'Burger', description: 'Grade A Beef Burger.', price: '17.99', category: 'Lunch'};
    res.render('menuItemDelete', { locals:menuItem });
});


router.post('/menu-items/', async (req, res) => {});
router.patch('/menu-items/:id', async (req, res) => {});
router.delete('/menu-items/:id', async (req, res) => {});

module.exports = router;