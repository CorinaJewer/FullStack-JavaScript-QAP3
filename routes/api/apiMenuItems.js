const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const menuItems = [
        {id: 7, name: 'soup', price: '7.99'},
        {id: 1, name: 'pancakes', price: '14.99'},
        {id: 4, name: 'burger', price: '17.99'},
    ];
    res.send(menuItems);
  });

router.get('/:id', async (req, res) => { }); 
router.get('/:id/edit', async (req, res) => {});
router.get('/:id/delete', async (req, res) => {});
router.post('/', async (req, res) => {});
router.patch('/:id', async (req, res) => {});
router.delete('/:id', async (req, res) => {});


module.exports = router;