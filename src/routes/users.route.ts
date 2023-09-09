import express, { Router } from "express";
import {
  getUsers,
  getUserById,
  insertUser,
  updateUserById,
  deleteUserById,
} from "../controllers/users.controller";

const router: Router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", insertUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;
