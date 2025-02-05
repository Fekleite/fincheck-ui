import { TransactionTypeEnum } from "../../config/enum";
import { httpClient } from "../httpClient";

type TransactionType = keyof typeof TransactionTypeEnum;

export interface CreateTransactionRequestBody {
  bankAccountId: string;
  categoryId: string;
  name: string;
  date: Date;
  type: TransactionType;
  value: number;
}

export async function create(requestBody: CreateTransactionRequestBody) {
  const { data } = await httpClient.post("/transactions", requestBody);

  return data;
}
