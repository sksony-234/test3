const express = require('express');
const { createUser, getAllUser, deleteUser, updateUser } = require('../controllers/userController');

const router = express.Router();

router.route('/user').post(createUser);
router.route('/users').get(getAllUser);
router.route('/user/:id').delete(deleteUser).put(updateUser);

module.exports = router;