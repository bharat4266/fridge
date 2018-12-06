var express = require('express');
var app = express();
var myfridge_controller = require('../controllers/foodnewcontroller');
var router = express.Router();

router.get("/food", myfridge_controller.food_list_get);

router.post("/food", myfridge_controller.food_add);

router.get("/food/:id", myfridge_controller.food_get);

router.put("/food/:id", myfridge_controller.food_update);

router.delete("/food/:id", myfridge_controller.food_delete);

module.exports = router;