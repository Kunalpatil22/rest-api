import { Request, Response } from "express";
import * as User from "../models/User.model";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.getUsers();
    if (!users) return res.status(404).send({ message: "Users not found." });
    res.send(users);
  } catch (e: any) {
    console.error(e);
    return res.status(500).send({ message: "Something went wrong." });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.getUserById(parseInt(req.params.id));
    if (!user) return res.status(404).send({ message: "User not found." });
    res.send(user);
  } catch (e: any) {
    console.error(e);
    return res.status(500).send({ message: "Something went wrong." });
  }
};

export const insertUser = async (req: Request, res: Response) => {
  try {
    const user = await User.insertUser(req.body.name, req.body.email);
    if (!user) return res.status(402).send({ message: "User insert failed." });
    res.send({ message: "User inserted successfully.", user });
  } catch (e: any) {
    console.error(e);
    if (e.name == "ValidationError")
      return res.status(402).send({ message: e.message });
    return res.status(500).send({ message: "Something went wrong." });
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.updateUserById(
      parseInt(req.params.id),
      req.body.name,
      req.body.email
    );
    if (!user) return res.status(404).send({ message: "User does not exist." });
    res.send({ message: "User updated successfully.", user });
  } catch (e: any) {
    console.error(e);
    if (e.name == "ValidationError")
      return res.status(402).send({ message: e.message });
    return res.status(500).send({ message: "Something went wrong." });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const id = await User.deleteUserById(parseInt(req.params.id));
    if (!id) return res.status(404).send({ message: "User does not exist." });
    res.send({ message: "User deleted successfully.", id });
  } catch (e: any) {
    console.error(e);
    return res.status(500).send({ message: "Something went wrong." });
  }
};
