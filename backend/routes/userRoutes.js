const express= require('express')
const router= express.Router()

const userController= require('../controller/userControler')

router.post("/login", userController.login)

module.exports=router