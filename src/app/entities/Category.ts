import { TransactionTypeEnum } from "../config/enum";

type TransactionType = keyof typeof TransactionTypeEnum;

export interface Category {
  id: string;
  name: string;
  icon: string;
  type: TransactionType;
}
