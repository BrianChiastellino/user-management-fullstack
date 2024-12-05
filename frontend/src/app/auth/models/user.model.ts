import { IUser } from "./user.interface";

export class User implements IUser {
  id: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  document: string = '';
  active_account: boolean = true;
  role: "admin" | "user" = 'user';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

}
