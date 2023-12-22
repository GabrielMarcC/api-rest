"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_2 = __importDefault(require("express"));
const app = (0, express_2.default)();
const route = (0, express_1.Router)();
app.get("/", (req, res) => {
    res.json({ message: "hello world" });
});
app.use(route);
app.listen(3333, () => "server is running on port 3333");
