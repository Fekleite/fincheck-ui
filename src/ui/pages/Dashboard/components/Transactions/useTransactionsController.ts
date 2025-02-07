import { useEffect, useState } from "react";

import { useTransactions } from "../../../../../app/hooks/useTransactions";
import { TransactionsParams } from "../../../../../app/services/transactionsService/getAll";

type Filters = TransactionsParams;
type FiltersKeys = keyof TransactionsParams;

export function useTransactionsController() {
  const [isFilterModalOpen, setIsFiltersModalOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const { transactions, isFetching, isLoading, refetch } =
    useTransactions(filters);

  useEffect(() => {
    refetch();
  }, [filters, refetch]);

  function handleChangeFilters<TFilter extends FiltersKeys>(filter: TFilter) {
    return (value: TransactionsParams[TFilter]) => {
      if (value !== filters[filter]) {
        setFilters((prevState) => ({
          ...prevState,
          [filter]: value,
        }));
      }
    };
  }

  function handleApplyFilters(filters: {
    bankAccountId?: string;
    year: number;
  }) {
    handleChangeFilters("bankAccountId")(filters.bankAccountId);
    handleChangeFilters("year")(filters.year);
    setIsFiltersModalOpen(false);
  }

  function handleOpenFiltersModal() {
    setIsFiltersModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFiltersModalOpen(false);
  }

  return {
    isInitialLoading: isLoading,
    isLoading: isFetching,
    transactions,
    isFilterModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    filters,
    handleChangeFilters,
    handleApplyFilters,
  };
}
