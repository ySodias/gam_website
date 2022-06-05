import { IInterator } from "./IInterator";
import { IUser } from "./IUser";

export interface IPosts {
  id: number;
  src_img: string;
  type: number;
  title: string;
  desc: string;
  id_user: number;
  created_at: string;
  updated_at: string;
  user: IUser,
  interator: IInterator | null,
}