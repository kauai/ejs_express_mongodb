var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.get('/', async (req, res) => {
    res.render('cadastro',{})
//   const data = (await axios.get('https://jsonplaceholder.typicode.com/users')).data
//   res.render('users',{ title:'Node', data })
});

router.post('/', async (req,res,next) => {
    global.carros = []
    global.carros.push(req.body)
    console.log(global.carros)
    res.render('index',{title:'Node',...global.carros[0] })
});

module.exports = router