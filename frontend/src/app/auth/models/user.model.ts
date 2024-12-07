import { IUser } from "./user.interface";

export class User implements IUser {
  id?: string;
  username: string;
  email: string;
  password: string;
  document: string;
  active_account?: boolean;
  role?: "admin" | "user";
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    username: string,
    email: string,
    password: string,
    document: string,
    role?: 'admin' | 'user',
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.document = document;
    this.role = role ?? 'user';
  }
}
