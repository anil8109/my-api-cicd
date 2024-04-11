const {
    getEmployee
} = require("../controller/employee")
var express = require('express'),
router = express.Router();

router.get('/getEmployees', getEmployee);

module.exports = router;