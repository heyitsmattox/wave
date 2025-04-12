const express = require('express');
const router = express.Router();

//define our routes here
router.get('/', (req, res) => {
  res.send('GET request to our homepage')
});

export default router;
//create a route for when to invoke our fetchUser controller function