import { BankAccountsTypeEnum } from "../config/enum";

type BankAccountType = keyof typeof BankAccountsTypeEnum;

export interface AccountType {
  id: string;
  name: string;
  initialBalance: number;
  type: BankAccountType;
  color: string;
  currentBalance: number;
}
