import { useQuery } from "@tanstack/react-query";

import { transactionsService } from "../services/transactionsService";
import { TransactionsParams } from "../services/transactionsService/getAll";

export function useTransactions(params: TransactionsParams) {
  const { isFetching, data, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      return transactionsService.getAll(params);
    },
  });

  return {
    transactions: data ?? [],
    isFetching,
    isLoading,
  };
}
