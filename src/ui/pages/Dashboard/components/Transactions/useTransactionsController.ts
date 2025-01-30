import { useState } from "react";

export function useTransactionsController() {
  const [isFilterModalOpen, setIsFiltersModalOpen] = useState(false);

  function handleOpenFiltersModal() {
    setIsFiltersModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFiltersModalOpen(false);
  }

  return {
    isInitialLoading: false,
    isLoading: false,
    transactions: [],
    isFilterModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  };
}
