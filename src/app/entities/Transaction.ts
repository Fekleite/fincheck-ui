import { TransactionTypeEnum } from "../config/enum";

type TransactionType = keyof typeof TransactionTypeEnum;

export interface Transaction {
  id: string;
  backAccountId: string;
  categoryId: string;
  name: string;
  date: Date;
  type: TransactionType;
  value: number;
}
