import { BankAccountsTypeEnum } from "../config/enum";

type BankAccountType = keyof typeof BankAccountsTypeEnum;

export interface BankAccount {
  id: string;
  name: string;
  initialBalance: number;
  type: BankAccountType;
  color: string;
  currentBalance: number;
}
