import { Transaction, TransactionType } from "../../entities/Transaction";
import { httpClient } from "../httpClient";

export type TransactionsResponse = Transaction[];

export interface TransactionsParams {
  month: number;
  year: number;
  bankAccountId?: string;
  type?: TransactionType;
}

export async function getAll({ ...params }: TransactionsParams) {
  const { data } = await httpClient.get<TransactionsResponse>("/transactions", {
    params,
  });

  return data;
}
