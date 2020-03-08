const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user');

router.route('/')
.get(usercontroller.index)
.post(usercontroller.addUser);

router.route('/:userID')
.get(usercontroller.getUser)
.put(usercontroller.replaceUser)
.patch(usercontroller.updateUser)




module.exports = router;