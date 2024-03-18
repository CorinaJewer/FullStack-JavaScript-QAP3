const dal = require("../services/pg.auth.db");

var getMenuItems = function() {
  if(DEBUG) console.log("Menu_Items.pg.dal.getMenuItems()");
  return new Promise(function(resolve, reject) {
    const sql = `SELECT * FROM public."Menu_Items"\
    ORDER BY menu_id ASC;`
    dal.query(sql, [], (err, result) => {
      if (err) {
        // Logging would notmally be placed here.
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    }); 
  }); 
};

var getMenuItemById = function(menu_id) {
  if(DEBUG) console.log("logins.pg.dal.getMenuItemById()");
  return new Promise(function(resolve, reject) {
    const sql = `SELECT  menu_id, name, description, price, category, image_url FROM public."Menu_Items" WHERE menu_id = $1`;
    dal.query(sql, [menu_id], (err, result) => {
      if (err) {
        // Logging would normally be placed here.
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    }); 
  }); 
};

module.exports  = {getMenuItems, getMenuItemById};
