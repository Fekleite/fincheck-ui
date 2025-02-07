import { TransactionTypeEnum } from "../config/enum";
import { Category } from "./Category";

export type TransactionType = keyof typeof TransactionTypeEnum;

export interface Transaction {
  id: string;
  category?: Category;
  name: string;
  date: string;
  type: TransactionType;
  value: number;
  categoryId: string;
  bankAccountId: string;
}
