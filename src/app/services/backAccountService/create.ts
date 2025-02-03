import { BankAccountsTypeEnum } from "../../config/enum";
import { httpClient } from "../httpClient";

type BankAccountType = keyof typeof BankAccountsTypeEnum;

export interface CreateBankAccountRequestBody {
  name: string;
  initialBalance: number;
  type: BankAccountType;
  color: string;
}

export async function create(requestBody: CreateBankAccountRequestBody) {
  const { data } = await httpClient.post("/bank-accounts", requestBody);

  return data;
}
