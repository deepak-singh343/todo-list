const express=require('express');
const router=new express.Router();
const homeController=require('../controllers/home_controller');
console.log('Router loaded');
router.get('/',homeController.home);
router.use('/add',require('./add'));
router.use('/deletetask',require('./deletetask'));
module.exports=router;
 