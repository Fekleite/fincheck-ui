import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";

import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";

import { MONTHS } from "../../../../../app/config/constants";

import { MonthsSliderOption } from "./MonthsSliderOption";
import { MonthsSliderNavigation } from "./MonthsSliderNavigation";
import { TransactionCard } from "./TransactionCard";

export function Transactions() {
  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-2xl bg-gray-100 p-10">
      <header className="flex items-center justify-between">
        <button
          type="button"
          className="flex items-center justify-between gap-2 py-3"
        >
          <TransactionsIcon />

          <span className="text-sm font-medium -tracking-[0.5px] text-gray-800">
            Transações
          </span>

          <ChevronDownIcon className="h-6 w-6 text-gray-900" />
        </button>

        <button
          type="button"
          className="rounded-full p-3 transition-colors hover:bg-gray-200"
        >
          <FilterIcon />
        </button>
      </header>

      <div className="flex flex-1 flex-col gap-4">
        <div className="relative">
          <Swiper spaceBetween={16} slidesPerView={3} centeredSlides={true}>
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

        <div className="box-content flex flex-1 flex-col gap-2">
          {Array.from("1234").map((value) => {
            return (
              <TransactionCard
                key={value}
                name="Sálario"
                date="01/01/2025"
                type="income"
                value={5000}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}