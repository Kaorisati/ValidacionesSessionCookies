var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const userController = require("../controllers/userController");

/* GET users login. */
router.get('/login', userController.login);
router.post('/login', userController.validarLogin);


/* USER REGISTER */
const validaciones = [
  check('name').notEmpty().withMessage('completar nombre'),
  check('color').notEmpty().withMessage('completar color'),
  check('email').isEmail().withMessage('completar con un mail valido'),
  check('age').notEmpty().withMessage('completar edad').isNumeric().withMessage("debes ingresar un numero")
];
router.get('/register', userController.register);
router.post('/register',validaciones, userController.storeUser);



module.exports = router;
