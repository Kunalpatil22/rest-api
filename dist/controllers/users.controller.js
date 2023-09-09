"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.insertUser = exports.getUserById = exports.getUsers = void 0;
const User = __importStar(require("../models/User.model"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User.getUsers();
        if (!users)
            return res.status(404).send({ message: "Users not found." });
        res.send(users);
    }
    catch (e) {
        console.error(e);
        return res.status(500).send({ message: "Something went wrong." });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.getUserById(parseInt(req.params.id));
        if (!user)
            return res.status(404).send({ message: "User not found." });
        res.send(user);
    }
    catch (e) {
        console.error(e);
        return res.status(500).send({ message: "Something went wrong." });
    }
});
exports.getUserById = getUserById;
const insertUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.insertUser(req.body.name, req.body.email);
        if (!user)
            return res.status(402).send({ message: "User insert failed." });
        res.send({ message: "User inserted successfully.", user });
    }
    catch (e) {
        console.error(e);
        if (e.name == "ValidationError")
            return res.status(402).send({ message: e.message });
        return res.status(500).send({ message: "Something went wrong." });
    }
});
exports.insertUser = insertUser;
const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.updateUserById(parseInt(req.params.id), req.body.name, req.body.email);
        if (!user)
            return res.status(404).send({ message: "User does not exist." });
        res.send({ message: "User updated successfully.", user });
    }
    catch (e) {
        console.error(e);
        if (e.name == "ValidationError")
            return res.status(402).send({ message: e.message });
        return res.status(500).send({ message: "Something went wrong." });
    }
});
exports.updateUserById = updateUserById;
const deleteUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = yield User.deleteUserById(parseInt(req.params.id));
        if (!id)
            return res.status(404).send({ message: "User does not exist." });
        res.send({ message: "User deleted successfully.", id });
    }
    catch (e) {
        console.error(e);
        return res.status(500).send({ message: "Something went wrong." });
    }
});
exports.deleteUserById = deleteUserById;
//# sourceMappingURL=users.controller.js.map