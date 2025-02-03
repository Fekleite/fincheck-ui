import { BankAccountsTypeEnum } from "../../config/enum";
import { httpClient } from "../httpClient";

type BankAccountType = keyof typeof BankAccountsTypeEnum;

type GetAllResponse = {
  id: string;
  name: string;
  initialBalance: number;
  type: BankAccountType;
  color: string;
  currentBalance: number;
}[];

export async function getAll() {
  const { data } = await httpClient.get<GetAllResponse>("/bank-accounts");

  return data;
}
