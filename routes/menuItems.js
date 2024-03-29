const express = require('express');
const router = express.Router();
const menuItemsDAL = require('../services/pg.menuItems.dal');

router.get('/', async (req, res) => {
    if(DEBUG) console.table('ROUTE: /menu-items GET');
    /*const menuItems = [
        {id: 7, image_url: '/Images/soup.jpg',name: 'Chicken Noodle Soup', description: 'Soup for the soul made fresh daily.', price: '7.99', category: 'Lunch', },
        {id: 1, image_url: '/Images/pancakes.jpg',name: 'Pancakes', description: 'Pancakes with strawberries and blueberries',price: '14.99', category: 'Breakfast'},
        {id: 4, image_url: '/Images/burgers.jpg', name: 'Premium Beef Burgers', description: 'Burgers for two with fries.', price: '17.99', category: "Dinner", }];*/

    try {
      let menuItems = await menuItemsDAL.getMenuItems(); 
      if(DEBUG) console.table(menuItems);
      const groupedMenuItems = menuItems.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
      }, {});
      res.render('menuItems', {groupedMenuItems:groupedMenuItems});
    } catch {
        res.render('503');
    };
});

module.exports = router;