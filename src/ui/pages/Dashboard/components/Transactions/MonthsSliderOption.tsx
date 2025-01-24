import { useSwiper } from "swiper/react";

import { cn } from "../../../../../app/utils/cn";

interface MonthsSliderOptionProps {
  isActive: boolean;
  month: string;
  slideIndex: number;
}

export function MonthsSliderOption({
  isActive,
  month,
  slideIndex,
}: MonthsSliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      className={cn(
        "h-12 w-full rounded-full text-sm font-medium -tracking-[0.5px] text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-800",
        isActive && "bg-white text-gray-800 hover:bg-white",
      )}
      onClick={() => swiper.slideTo(slideIndex)}
    >
      {month}
    </button>
  );
}
