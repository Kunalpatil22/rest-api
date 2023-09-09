import { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../db";
import joi from "joi";

export const insertUser = async (name: string, email: string) => {
  const { error } = joi
    .object({
      name: joi.string().min(1).max(64).required(),
      email: joi.string().email().max(256).required(),
    })
    .validate({ name, email });

  if (error) throw error;

  try {
    const conn = await pool.getConnection();
    const [result] = await conn.query<ResultSetHeader>(
      "INSERT INTO users (name, email) VALUES (?,?)",
      [name, email]
    );
    pool.releaseConnection(conn);
    if (!result.insertId) return null;
    return { id: result.insertId, name, email };
  } catch (e) {
    throw e;
  }
};

export const getUsers = async () => {
  try {
    const conn = await pool.getConnection();
    const [result] = await conn.query<RowDataPacket[]>("SELECT * FROM users");
    pool.releaseConnection(conn);
    if (!result || result.length === 0) return null;
    return result;
  } catch (e) {
    throw e;
  }
};

export const getUserById = async (id: number) => {
  try {
    const conn = await pool.getConnection();
    const [result] = await conn.query<RowDataPacket[]>(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    pool.releaseConnection(conn);
    if (!result || result.length === 0) return null;
    return result[0];
  } catch (e) {
    throw e;
  }
};

export const updateUserById = async (
  id: number,
  name: string,
  email: string
) => {
  const { error } = joi
    .object({
      name: joi.string().min(1).max(64).required(),
      email: joi.string().email().max(256).required(),
    })
    .validate({ name, email });

  if (error) throw error;

  try {
    const conn = await pool.getConnection();
    const [result] = await conn.query<ResultSetHeader>(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, id]
    );
    if (!result.affectedRows) return null;
    pool.releaseConnection(conn);
    return { id, name, email };
  } catch (e) {
    throw e;
  }
};

export const deleteUserById = async (id: number) => {
  try {
    const conn = await pool.getConnection();
    const [result] = await conn.query<ResultSetHeader>(
      "DELETE FROM users WHERE id = ?",
      [id]
    );
    if (!result.affectedRows) return null;
    pool.releaseConnection(conn);
    return id;
  } catch (e) {
    throw e;
  }
};
