import { AccountType } from "../../entities/BankAccount";
import { httpClient } from "../httpClient";

type GetAllResponse = AccountType[];

export async function getAll() {
  const { data } = await httpClient.get<GetAllResponse>("/bank-accounts");

  return data;
}
