import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Swiper as SwiperType } from "swiper/types";

interface AccountsSliderNavigationProps {
  swiper: React.MutableRefObject<SwiperType | null>;
  isBeginning: boolean;
  isEnd: boolean;
}

export function AccountsSliderNavigation({
  swiper,
  isBeginning,
  isEnd,
}: AccountsSliderNavigationProps) {
  return (
    <div>
      <button
        type="button"
        className="rounded-full p-3 text-gray-50 transition-colors enabled:hover:bg-teal-800 disabled:text-gray-400 disabled:opacity-50"
        onClick={() => swiper.current?.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      <button
        type="button"
        className="rounded-full p-3 text-gray-50 transition-colors enabled:hover:bg-teal-800 disabled:text-gray-400 disabled:opacity-50"
        onClick={() => swiper.current?.slideNext()}
        disabled={isEnd}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
