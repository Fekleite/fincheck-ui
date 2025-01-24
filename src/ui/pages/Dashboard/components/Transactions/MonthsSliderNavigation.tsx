import { useSwiper } from "swiper/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export function MonthsSliderNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <button
        type="button"
        className="absolute left-0 top-0 z-10 rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>

      <button
        type="button"
        className="absolute right-0 top-0 z-10 rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
    </>
  );
}
