import { Transaction } from "../../entities/Transaction";
import { httpClient } from "../httpClient";

export type UpdateTransactionRequestBody = Omit<Transaction, "category">;

export async function update({
  id,
  ...requestBody
}: UpdateTransactionRequestBody) {
  const { data } = await httpClient.put(`/transactions/${id}`, requestBody);

  return data;
}
