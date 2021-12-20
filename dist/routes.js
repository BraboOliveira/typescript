"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = __importDefault(require("./controllers/userControllers"));
const routes = (0, express_1.Router)();
// routes.get('/',(req,res)=>{
//     return res.send('Hello World 2');
// });
routes.get('/users', userControllers_1.default.index);
exports.default = routes;
