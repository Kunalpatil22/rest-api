import { RowDataPacket } from "mysql2";
export declare const insertUser: (name: string, email: string) => Promise<{
    id: number;
    name: string;
    email: string;
} | null>;
export declare const getUsers: () => Promise<RowDataPacket[] | null>;
export declare const getUserById: (id: number) => Promise<RowDataPacket | null>;
export declare const updateUserById: (id: number, name: string, email: string) => Promise<{
    id: number;
    name: string;
    email: string;
} | null>;
export declare const deleteUserById: (id: number) => Promise<number | null>;
