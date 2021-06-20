const router=require('express').Router();
const Person =require('../controllers/personController')


router.post('/CreatePerson',Person.CreatePerson)

router.get('/ShowPerson/:id',Person.ShowPerson)


module.exports=router;