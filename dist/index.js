"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const express_1 = __importDefault(require("express"));
const users_route_1 = __importDefault(require("./routes/users.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/users", users_route_1.default);
app.listen(config_1.port, () => {
    console.log(`Server running on port ${config_1.port}.`);
});
//# sourceMappingURL=index.js.map