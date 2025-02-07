import { useCallback, useEffect, useState } from "react";

import { useTransactions } from "../../../../../app/hooks/useTransactions";
import { TransactionsParams } from "../../../../../app/services/transactionsService/getAll";
import { Transaction } from "../../../../../app/entities/Transaction";

type Filters = TransactionsParams;
type FiltersKeys = keyof TransactionsParams;

export function useTransactionsController() {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [transactionBeingEdited, setTransactionBeingEdited] =
    useState<Transaction | null>(null);

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

  const handleOpenEditModal = useCallback((transaction: Transaction) => {
    setTransactionBeingEdited(transaction);
    setIsEditModalOpen(true);
  }, []);

  const handleCloseEditModal = useCallback(() => {
    setTransactionBeingEdited(null);
    setIsEditModalOpen(false);
  }, []);

  return {
    isInitialLoading: isLoading,
    isLoading: isFetching,
    transactions,
    isFilterModalOpen: isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    filters,
    handleChangeFilters,
    handleApplyFilters,
    handleOpenEditModal,
    handleCloseEditModal,
    isEditModalOpen,
    transactionBeingEdited,
  };
}
