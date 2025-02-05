import { useQuery } from "@tanstack/react-query";
import { bankAccountService } from "../services/bankAccountService";

export function useBankAccounts() {
  const { isFetching, data } = useQuery({
    queryKey: ["bank-accounts"],
    queryFn: async () => {
      return bankAccountService.getAll();
    },
  });

  return {
    accounts: data ?? [],
    isFetching,
  };
}
