import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { useRef } from "react";

import { EyeIcon } from "../../../components/icons/EyeIcon";

import { AccountCard } from "./AccountCard";

// @ts-expect-error tbd
import "swiper/css";

export function Accounts() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
      <div>
        <span className="-tracking-[0.5px] text-white">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl -tracking-[1px] text-white">
            R$ 1000,00
          </strong>

          <button type="button" className="p-3">
            <EyeIcon open={false} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-end gap-4">
        <div className="flex items-center justify-between">
          <strong className="text-lg font-bold -tracking-[1px] text-white">
            Minhas contas
          </strong>

          <div>
            <button
              type="button"
              className="rounded-full p-3 text-gray-50 transition-colors enabled:hover:bg-teal-800 disabled:text-gray-400 disabled:opacity-50"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <button
              type="button"
              className="rounded-full p-3 text-gray-50 transition-colors enabled:hover:bg-teal-800 disabled:text-gray-400 disabled:opacity-50"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={2.1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
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
        </div>
      </div>
    </div>
  );
}
