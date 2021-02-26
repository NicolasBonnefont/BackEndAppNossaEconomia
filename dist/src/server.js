"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = require("./router");
var app = express_1.default();
app.use(express_1.default.json());
app.use(router_1.router);
app.listen('3000', function () {
    console.log('Server is running on port 3333 💘');
});
