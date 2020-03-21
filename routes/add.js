const express=require('express');
const router=new express.Router();
const addController=require('../controllers/add_controller');
router.post('/',addController.addcontent);
module.exports=router;