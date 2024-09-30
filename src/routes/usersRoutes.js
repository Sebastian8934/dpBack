const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const { validatorCreateUser } = require('../middleware/validators');

router
    .get('/',userController.getAll)
    .post('/',userController.create)
    .put('/:_id', userController.update)
    .delete('/:_id',userController.deleteId)
    
module.exports = router;