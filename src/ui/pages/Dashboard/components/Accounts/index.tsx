import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { useRef } from "react";
import { PlusIcon } from "@radix-ui/react-icons";

import { EyeIcon } from "../../../../components/icons/EyeIcon";

import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { cn } from "../../../../../app/utils/cn";

import { AccountCard } from "./AccountCard";
import { AccountsSliderNavigation } from "./AccountsSliderNavigation";
import { AccountsSkeleton } from "./AccountsSkeleton";

import { useAccountsController } from "./useAccountsController";

// @ts-expect-error tbd
import "swiper/css";

export function Accounts() {
  const swiperRef = useRef<SwiperType | null>(null);

  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
    accounts,
  } = useAccountsController();

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
      {isLoading && <AccountsSkeleton />}

      {!isLoading && (
        <>
          <div>
            <span className="-tracking-[0.5px] text-white">Saldo total</span>

            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  "text-2xl -tracking-[1px] text-white",
                  !areValuesVisible && "blur-md",
                )}
              >
                {formatCurrency(1000)}
              </strong>

              <button
                type="button"
                className="rounded-full p-3 transition-colors hover:bg-teal-800"
                onClick={toggleValuesVisibility}
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-end gap-4">
            <div className="flex items-center justify-between">
              <strong className="text-lg font-bold -tracking-[1px] text-white">
                Minhas contas
              </strong>

              {accounts.length > 0 && (
                <AccountsSliderNavigation
                  swiper={swiperRef}
                  isBeginning={sliderState.isBeginning}
                  isEnd={sliderState.isEnd}
                />
              )}
            </div>

            <div className="mt-10 lg:mt-0">
              {accounts.length > 0 && (
                <Swiper
                  spaceBetween={16}
                  slidesPerView={windowWidth < 640 ? 1.2 : 2.1}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  onSlideChange={(swiper) => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd,
                    });
                  }}
                >
                  <SwiperSlide>
                    <AccountCard
                      color="#7950F2"
                      currentBalance={1000}
                      name="Nubank"
                      type="CHECKING"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <AccountCard
                      color="#FD7E14"
                      currentBalance={500}
                      name="Inter"
                      type="CHECKING"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <AccountCard
                      color="#343A40"
                      currentBalance={12000}
                      name="XP"
                      type="INVESTMENT"
                    />
                  </SwiperSlide>
                </Swiper>
              )}

              {accounts.length === 0 && (
                <button
                  type="button"
                  className="flex h-52 w-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-teal-600 p-4 text-white transition-colors hover:bg-teal-800"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-white">
                    <PlusIcon className="h-6 w-6" />
                  </div>

                  <span className="mx-auto max-w-28 font-medium -tracking-[0.5px]">
                    Cadastre uma nova conta
                  </span>
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
