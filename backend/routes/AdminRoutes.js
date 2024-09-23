const express = require("express");
const router = express.Router();
const adminControll= require('../controller/AdminController')

router.get('/get-companies',adminControll.getallcompanies )
router.delete('/delete-company/:id',adminControll.deleteCompany)

module.exports = router;