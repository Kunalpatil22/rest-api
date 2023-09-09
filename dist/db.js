"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const promise_1 = __importDefault(require("mysql2/promise"));
exports.default = promise_1.default.createPool(config_1.db_connection_url);
//# sourceMappingURL=db.js.map