import { Swiper, SwiperSlide } from "swiper/react";

import EmptyStateImg from "../../../../../assets/empty-state.svg";

import { FilterIcon } from "../../../../components/icons/FilterIcon";

import { MONTHS } from "../../../../../app/config/constants";

import { MonthsSliderOption } from "./MonthsSliderOption";
import { MonthsSliderNavigation } from "./MonthsSliderNavigation";
import { TransactionCard } from "./TransactionCard";
import { TransactionsSkeleton } from "./TransactionsSkeleton";
import { TransactionTypeDropdown } from "./TransactionTypeDropdown";
import { FiltersModal } from "./FiltersModal";

import { useTransactionsController } from "./useTransactionsController";
import { EditTransactionModal } from "../modals/EditTransactionModal";

export function Transactions() {
  const {
    isLoading,
    isInitialLoading,
    transactions,
    isFilterModalOpen,
    handleCloseFiltersModal,
    handleOpenFiltersModal,
    handleChangeFilters,
    filters,
    handleApplyFilters,
    handleCloseEditModal,
    handleOpenEditModal,
    isEditModalOpen,
    transactionBeingEdited,
  } = useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-2xl bg-gray-100 px-4 py-8 md:p-10">
      {isInitialLoading && <TransactionsSkeleton />}

      {!isInitialLoading && (
        <>
          <header className="flex items-center justify-between">
            <TransactionTypeDropdown
              onSelect={(type) => handleChangeFilters("type")(type)}
              selectedType={filters.type}
            />

            <button
              type="button"
              className="rounded-full p-3 transition-colors hover:bg-gray-200"
              onClick={handleOpenFiltersModal}
            >
              <FilterIcon />
            </button>
          </header>

          <div className="flex flex-1 flex-col gap-4">
            <div className="relative">
              <Swiper
                spaceBetween={16}
                slidesPerView={3}
                centeredSlides={true}
                onSlideChange={(swiper) =>
                  handleChangeFilters("month")(swiper.realIndex)
                }
                initialSlide={filters.month}
              >
                <MonthsSliderNavigation />

                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month}>
                    {({ isActive }) => (
                      <MonthsSliderOption
                        isActive={isActive}
                        month={month}
                        slideIndex={index}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {isLoading && <TransactionsSkeleton condensed />}

            {!hasTransactions && !isLoading && (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-6">
                <img src={EmptyStateImg} alt="Sem transações" />
                <span className="text-gray-700">
                  Não encontramos nenhuma transação!
                </span>
              </div>
            )}

            {hasTransactions && !isLoading && (
              <>
                <div className="flex flex-1 flex-col gap-2">
                  {transactions.map((transaction) => {
                    return (
                      <TransactionCard
                        key={transaction.id}
                        transaction={transaction}
                        onClick={(transaction) =>
                          handleOpenEditModal(transaction)
                        }
                      />
                    );
                  })}
                </div>

                {transactionBeingEdited && (
                  <EditTransactionModal
                    open={isEditModalOpen}
                    onClose={handleCloseEditModal}
                    transaction={transactionBeingEdited}
                  />
                )}
              </>
            )}
          </div>

          <FiltersModal
            open={isFilterModalOpen}
            onClose={handleCloseFiltersModal}
            onApplyFilters={(filters) => handleApplyFilters(filters)}
          />
        </>
      )}
    </div>
  );
}
