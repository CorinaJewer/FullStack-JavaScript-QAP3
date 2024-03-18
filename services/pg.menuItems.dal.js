const dal = require("../services/pg.auth.db");

var getMenuItems = function() {
    if(DEBUG) console.log("Menu_Items.pg.dal.getMenuItems()");
    return new Promise(function(resolve, reject) {
      const sql = `SELECT * FROM public."Menu_Items"\
      ORDER BY menu_id ASC;`
      dal.query(sql, [], (err, result) => {
        if (err) {
          // logging should go here
          if(DEBUG) console.log(err);
          reject(err);
        } else {
          resolve(result.rows);
        }
      }); 
    }); 
};

module.exports  = {getMenuItems};
