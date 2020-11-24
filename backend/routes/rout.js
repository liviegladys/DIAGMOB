const express = require('express');// passer par express
const router = express.Router();// 

//const auth = require('../middleware/auth'); // passer par le middleware pour s' authentifier
const UserCtrl = require('../controllers/User_Controller');
const QstCtrl = require('../controllers/Question_controller')
const questionsIdentiteCtrl= require('../controllers/questionsIdentite_controller')
const adminCtrl=require('../controllers/admin_controller')
const lstAnswerIdentiteCtrl=require('../controllers/lstAnswerIdentite_controller')
const lstAnswerCtrl=require('../controllers/lstAnswer_controller')

router.post('/signupadmin',  adminCtrl.signup  );
router.get('/loginadmin',  adminCtrl.login,UserCtrl.getUsers);// le middleware est le login
router.get('/readQst',QstCtrl.readQst)

router.post('/createQst',QstCtrl.createQst)


//router.get('/readUser', UserCtrl.readUser);
// router.get('/login', UserCtrl.login);
// router.post('/login', UserCtrl.login);
// router.get('/readquestionsIdentite', questionsIdentiteCtrl.readquestionsIdentite);

// router.get('/readlstAnswerIdentite', lstAnswerIdentiteCtrl.readlstAnswerIdentite);
// router.get('/readlstAnswer', lstAnswerCtrl.readlstAnswer);




module.exports = router;