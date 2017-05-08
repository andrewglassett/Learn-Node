const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const drew = { name: 'Wes', age: 100, cool: true};
  // res.send('Hey! It works!');
  // res.json(drew);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello', {
    name: 'wes',
    dog: req.query.dog,
    title: 'heyo'
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
})

module.exports = router;
