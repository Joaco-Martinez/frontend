
import { UserRole } from "./enum";


export interface IUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  password?: string;
  rol: UserRole;
}

export interface ICreateUser {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  rol: UserRole;
}

// 0 admin 
// 1 agente

export interface ILoginUser {
  email: string;
  password: string;
}