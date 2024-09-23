const express = require("express");
const router = express.Router();
const registerationController= require('../controller/registeration')

router.post('/company',registerationController.registerCompany )

module.exports = router;