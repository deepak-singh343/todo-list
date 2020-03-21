const express=require('express');
const router=new express.Router();
const deleteController=require('../controllers/delete_controller');
router.get('/:deleteEle',deleteController.delcontent);
router.get('/',deleteController.delcontent);

module.exports=router;