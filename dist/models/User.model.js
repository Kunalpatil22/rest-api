"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.getUserById = exports.getUsers = exports.insertUser = void 0;
const db_1 = __importDefault(require("../db"));
const joi_1 = __importDefault(require("joi"));
const insertUser = (name, email) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = joi_1.default
        .object({
        name: joi_1.default.string().min(1).max(64).required(),
        email: joi_1.default.string().email().max(256).required(),
    })
        .validate({ name, email });
    if (error)
        throw error;
    try {
        const conn = yield db_1.default.getConnection();
        const [result] = yield conn.query("INSERT INTO users (name, email) VALUES (?,?)", [name, email]);
        db_1.default.releaseConnection(conn);
        if (!result.insertId)
            return null;
        return { id: result.insertId, name, email };
    }
    catch (e) {
        throw e;
    }
});
exports.insertUser = insertUser;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield db_1.default.getConnection();
        const [result] = yield conn.query("SELECT * FROM users");
        db_1.default.releaseConnection(conn);
        if (!result || result.length === 0)
            return null;
        return result;
    }
    catch (e) {
        throw e;
    }
});
exports.getUsers = getUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield db_1.default.getConnection();
        const [result] = yield conn.query("SELECT * FROM users WHERE id = ?", [id]);
        db_1.default.releaseConnection(conn);
        if (!result || result.length === 0)
            return null;
        return result[0];
    }
    catch (e) {
        throw e;
    }
});
exports.getUserById = getUserById;
const updateUserById = (id, name, email) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = joi_1.default
        .object({
        name: joi_1.default.string().min(1).max(64).required(),
        email: joi_1.default.string().email().max(256).required(),
    })
        .validate({ name, email });
    if (error)
        throw error;
    try {
        const conn = yield db_1.default.getConnection();
        const [result] = yield conn.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id]);
        if (!result.affectedRows)
            return null;
        db_1.default.releaseConnection(conn);
        return { id, name, email };
    }
    catch (e) {
        throw e;
    }
});
exports.updateUserById = updateUserById;
const deleteUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield db_1.default.getConnection();
        const [result] = yield conn.query("DELETE FROM users WHERE id = ?", [id]);
        if (!result.affectedRows)
            return null;
        db_1.default.releaseConnection(conn);
        return id;
    }
    catch (e) {
        throw e;
    }
});
exports.deleteUserById = deleteUserById;
//# sourceMappingURL=User.model.js.map