var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.get('/', async (req, res) => {
  const data = (await axios.get('https://jsonplaceholder.typicode.com/users')).data
  res.render('users',{ title:'Node', data })
});

// router.get('/',(req, res, next) => {
//   axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(({ data }) => {
//     res.render('users',{ title:'Node', data })
//   })
// });

module.exports = router;
