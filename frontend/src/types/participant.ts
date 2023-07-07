import { Pastry } from "./pastry";
import { User } from "./user";

export type Participant = {
  user: User;
  pastry: Pastry[];
  winner: boolean;
  canPlay: boolean;
  createdDate: string;
};
