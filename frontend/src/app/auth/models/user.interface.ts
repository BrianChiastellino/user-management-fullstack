export interface IUser {
  id?: string;
  username: string;
  email: string;
  password: string;
  document: string;
  active_account?: boolean;
  role?: "admin" | "user";
  createdAt?: Date;
  updatedAt?: Date;
}
