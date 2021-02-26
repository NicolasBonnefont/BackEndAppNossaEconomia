"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var UserController_1 = require("./Controllers/UserController");
var router = express_1.Router();
exports.router = router;
var userController = new UserController_1.UserController();
router.get('/', userController.BuscaUsuario);
