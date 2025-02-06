import { useState } from "react";
import { useTransactions } from "../../../../../app/hooks/useTransactions";

export function useTransactionsController() {
  const [isFilterModalOpen, setIsFiltersModalOpen] = useState(false);

  const { transactions, isFetching, isLoading } = useTransactions({
    month: 1,
    year: 2025,
  });

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
  };
}
