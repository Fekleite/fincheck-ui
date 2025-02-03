import { useMemo, useState } from "react";

import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { useDashboard } from "../DashboardContext/useDashboard";
import { useQuery } from "@tanstack/react-query";
import { bankAccountService } from "../../../../../app/services/backAccountService";

export function useAccountsController() {
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const windowWidth = useWindowWidth();
  const { areValuesVisible, toggleValuesVisibility, openNewAccountModal } =
    useDashboard();

  const { isFetching, data = [] } = useQuery({
    queryKey: ["bank-accounts"],
    queryFn: async () => {
      return bankAccountService.getAll();
    },
  });

  const totalBalance = useMemo(() => {
    if (!data) return 0;

    return data.reduce((total, account) => {
      return total + account.currentBalance;
    }, 0);
  }, [data]);

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading: isFetching,
    accounts: data,
    openNewAccountModal,
    totalBalance,
  };
}
