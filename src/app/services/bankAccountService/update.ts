import { BankAccountsTypeEnum } from "../../config/enum";
import { httpClient } from "../httpClient";

type BankAccountType = keyof typeof BankAccountsTypeEnum;

export interface UpdateBankAccountRequestBody {
  id: string;
  name: string;
  initialBalance: number;
  type: BankAccountType;
  color: string;
}

export async function update({
  id,
  ...requestBody
}: UpdateBankAccountRequestBody) {
  const { data } = await httpClient.put(`/bank-accounts/${id}`, requestBody);

  return data;
}
