var express = require('express');
var router = express.Router();
//add an array string
let kingdoms = ['Dorne', 'The North', 'The Crownlands', 'The Riverlands',  'The Westerlands', 'The Iron Islands', 'The Stormlands',  'The Reach', 'The Vale'];
/* GET home page. */
router.get('/', function(req, res, next) {
  let queryKingdom = req.query.kingdom;
//if the query is in the array then check is the string
  if (kingdoms.includes(queryKingdom)) {
    res.send('Yep, we have  ' + queryKingdom + '.');
  } else {
    res.send('Nope, no ' + queryKingdom + ' here.');
  }
});
module.exports = router;
